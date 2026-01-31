import yaml from 'js-yaml';
import { marked } from 'marked';
import fm from 'front-matter';
import gsap from 'gsap';

// --- HIER LIEGT DER FEHLER ---
// Diese Zeilen müssen exakt so vorhanden sein:
import aboutTpl from '../templates/about.html?raw';
import contactTpl from '../templates/contact.html?raw';
import projectItemTpl from '../templates/project-item.html?raw';

// Auch für die Daten:
import profileDataRaw from '../data/profile.yml?raw';
import bioMarkdownRaw from '../data/bio.md?raw';
const projectFiles = import.meta.glob('../data/projects/*.md', { query: '?raw', eager: true });


export class UIManager {
    constructor() {
        this.monitorUI = document.getElementById('monitor-ui');
        this.container = document.getElementById('app-content');
        // Verhindert, dass Klicks auf das UI an Three.js weitergereicht werden
        this.monitorUI.addEventListener('mousedown', (e) => e.stopPropagation());
        this.monitorUI.addEventListener('mouseup', (e) => e.stopPropagation());
        this.monitorUI.addEventListener('click', (e) => e.stopPropagation());

        // EXTREM WICHTIG: Die Methoden für das HTML (onclick) global verfügbar machen
        window.renderAppContent = (page) => this.renderAppContent(page);
        window.showDetails = (topic) => this.showDetails(topic);
        window.showMenu = () => this.showMenu();

        this.initClock();
        }

    render(template, data) {
        return template.replace(/{{([\w.-]+)}}/g, (_, key) => {
            return data[key] !== undefined ? data[key] : '';
        });
    }

    renderAppContent(page) {
        let htmlResult = "";

        if (page === 'about') {
            const parsedBio = fm(bioMarkdownRaw);
            const bioHtml = marked.parse(parsedBio.body);
            htmlResult = this.render(aboutTpl, { 
                ...parsedBio.attributes,
                bio: bioHtml
            });
        } 
        else if (page === 'contact') {
            const profile = yaml.load(profileDataRaw);
            htmlResult = this.render(contactTpl, profile);
        } 
        
        else if (page === 'projects') {
            const paths = Object.keys(projectFiles);
            console.log("Gefundene Pfade:", paths); // Schau in die Konsole!
            const projectsHtml = paths.map(path => {
                const fileModule = projectFiles[path];
                const rawContent = fileModule.default || fileModule;
                const { attributes, body } = fm(rawContent);
                return this.render(projectItemTpl, {
                    ...attributes,
                    content: marked.parse(body)
                });
            }).join('');
            htmlResult = `<h1 class="text-shadow-box">Projects</h1><div class="projects-list">${projectsHtml}</div>`;
        }

        this.container.innerHTML = htmlResult;
        this.container.scrollTop = 0;
        gsap.fromTo(this.container, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
    }

    showDetails(topic) {
        const menu = document.getElementById('ui-menu');
        const details = document.getElementById('ui-details');
        const title = document.getElementById('detail-title');
        const content = document.getElementById('detail-content');

        const data = {
            about: { t: "ABOUT ME", c: "Ich bin ein kreativer Entwickler mit Leidenschaft für 3D-Web-Erlebnisse." },
            projects: { t: "PROJECTS", c: "Hier findest du meine neuesten Three.js Experimente und Web-Apps." },
            contact: { t: "CONTACT", c: "Schreib mir eine Mail an: hello@example.com" }
        };

        title.innerText = data[topic].t;
        content.innerText = data[topic].c;

        gsap.to(menu, { opacity: 0, duration: 0.2, onComplete: () => {
            menu.style.display = 'none';
            details.style.display = 'block';
            gsap.fromTo(details, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 });
        }});
    }

    showMenu() {
        const menu = document.getElementById('ui-menu');
        const details = document.getElementById('ui-details');

        gsap.to(details, { opacity: 0, duration: 0.2, onComplete: () => {
            details.style.display = 'none';
            menu.style.display = 'block';
            gsap.to(menu, { opacity: 1, duration: 0.4 });
        }});
    }

    showMonitorUI(monitorPos, camera) {
        const vector = monitorPos.clone();
        vector.project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * -0.5 + 0.5) * window.innerHeight;

        this.monitorUI.style.display = "block";
        this.monitorUI.style.left = `${x}px`;
        this.monitorUI.style.top = `${y}px`;
        this.monitorUI.style.opacity = "1";
    }

    hideMonitorUI() {
        this.monitorUI.style.opacity = "0";
        setTimeout(() => { if(this.monitorUI.style.opacity === "0") this.monitorUI.style.display = "none"; }, 300);
    }

    initClock() {
        setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            document.getElementById('live-clock').innerText = timeStr;
        }, 1000);
    }

    // initClock() {
    //     const clockElement = document.getElementById('live-clock');
    //     if (!clockElement) return;
        
    //     const update = () => {
    //         const now = new Date();
    //         clockElement.innerText = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    //     };
    //     update();
    //     setInterval(update, 1000);
    // }

}