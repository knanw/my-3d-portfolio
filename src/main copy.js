import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import screenImageUrl from '/bildschirm-foto.jpg';
import aboutTemplate from './templates/about.html?raw';

function renderAbout(name) {
    // Simples "Templating" durch Ersetzen von Platzhaltern
    const html = aboutTemplate.replace('{{name}}', name);
    document.getElementById('app-content').innerHTML = html;
}



// --- SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdde1e7); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- LIGHT ---
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const sun = new THREE.DirectionalLight(0xffffff, 1.2);
sun.position.set(5, 15, 10);
sun.castShadow = true;
scene.add(sun);

// --- FLOOR ---
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: 0xbbbbbb })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2.5; // floor depth
floor.receiveShadow = true;
scene.add(floor);

// --- DESK (height: 0.8 above ground floor) ---
const deskGroup = new THREE.Group();
const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.15, 2.5), 
    new THREE.MeshStandardMaterial({ color: 0x3e2723 }) // Dunkleres Holz
);
deskTop.position.y = 0;
deskTop.castShadow = true;
deskTop.receiveShadow = true;
deskGroup.add(deskTop);

// DESK-LEGS (need to reach the ground: 2.5 long)
const legGeo = new THREE.BoxGeometry(0.15, 2.5, 0.15);
const legMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
const legPos = [[-2.3, -1.25, -1.1], [2.3, -1.25, -1.1], [-2.3, -1.25, 1.1], [2.3, -1.25, 1.1]];
legPos.forEach(p => {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(p[0], p[1], p[2]);
    leg.castShadow = true;
    deskGroup.add(leg);
});
scene.add(deskGroup);

// --- MONITOR (with sceleton) ---
const monitorGroup = new THREE.Group();

// 1. create Texture Loader 
const textureLoader = new THREE.TextureLoader();
// 2. load imported imaged
const screenTex = textureLoader.load(screenImageUrl);

const mBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.5), legMat);
mBase.position.y = 0.1;
const mStand = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), legMat);
mStand.position.y = 0.5;
const mScreen = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.1), legMat);
mScreen.position.y = 1.2;
const display = new THREE.Mesh(
    new THREE.PlaneGeometry(2.3, 1.3),
    new THREE.MeshStandardMaterial({ 
        map: screenTex,             // Das ist der entscheidende Teil!
        emissive: 0xffffff,         // Weißes Licht, damit das Bild leuchtet
        emissiveIntensity: 0.1,     // Nur ganz dezent, damit es nicht blendet
        emissiveMap: screenTex      // Das Bild selbst soll die Lichtquelle sein
    })
);
display.position.set(0, 1.2, 0.06);
display.userData = { id: "monitor" };

monitorGroup.add(mBase, mStand, mScreen, display);
monitorGroup.position.set(0, 0, -0.8);
scene.add(monitorGroup);

// --- BÜROSTUHL (Höher & Richtig gedreht) ---
const chair = new THREE.Group();
const chairMat = new THREE.MeshStandardMaterial({ color: 0x222222 });

const cSeat = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.2, 1.1), chairMat);
cSeat.position.y = -0.4; // Sitzhöhe knapp unter Tischplatte

const cBack = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.15), chairMat);
cBack.position.set(0, 0.4, 0.5); // Rückenlehne hinten

const cLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2), legMat);
cLeg.position.y = -1.1;

const cCross = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.1, 5), legMat);
cCross.position.y = -1.7;

chair.add(cSeat, cBack, cLeg, cCross);
chair.position.set(0, -0.6, 2.2); // Positioniert vor dem Tisch
chair.rotation.y = 0; // Schaut Richtung Monitor
scene.add(chair);

// --- GROSSE PFLANZE (Überragt den Tisch) ---
const plant = new THREE.Group();
const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.5, 1), new THREE.MeshStandardMaterial({color: 0x5d4037}));
pot.position.y = -2;
plant.add(pot);

const leafMat = new THREE.MeshPhysicalMaterial({ color: 0x1b5e20, side: THREE.DoubleSide, roughness: 0.7 });
for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const stemHeight = 3 + Math.random() * 2; // Sehr hohe Stiele
    
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, stemHeight), leafMat);
    stem.position.y = -2 + stemHeight / 2;
    stem.rotation.z = (Math.random() - 0.5) * 0.4;
    
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), leafMat);
    leaf.scale.set(1, 0.02, 3.5); // Lange Bananenblätter
    leaf.position.y = stemHeight / 2;
    leaf.rotation.x = 0.4;

    const branch = new THREE.Group();
    branch.add(stem, leaf);
    branch.rotation.y = angle;
    plant.add(branch);
}
plant.position.set(-4.5, 0, 0.5);
scene.add(plant);

camera.position.set(10, 8, 12);

// --- VARIABLEN FÜR DEN STATUS ---
let zoomLevel = 1; 
const monitorUI = document.getElementById('monitor-ui');
let mouseStartX, mouseStartY;

// --- CLICK-LOGIK MIT UNTERSCHEIDUNG (CLICK vs. DRAG) ---
window.addEventListener('mousedown', (e) => {
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
});

window.addEventListener('mouseup', (event) => {
    // Berechne, wie weit die Maus bewegt wurde
    const deltaX = Math.abs(event.clientX - mouseStartX);
    const deltaY = Math.abs(event.clientY - mouseStartY);

if (deltaX < 5 && deltaY < 5) {
        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        const hitId = intersects[0]?.object.userData.id;

        // --- STRENGES 4-STUFEN-SYSTEM ---
        if (zoomLevel === 1 && intersects.length > 0) {
            zoomLevel = 2; // Gehe näher zum Tisch
            updateCamera();
        } 
        else if (zoomLevel === 2 && intersects.length > 0) {
            zoomLevel = 3; // Setz dich an den Tisch
            updateCamera();
        } 
        else if (zoomLevel === 3 && hitId === "monitor") {
            zoomLevel = 4; // Fokus auf Monitor
            updateCamera();
        }
        else if (intersects.length === 0) {
            // Klick ins Leere -> Eine Stufe zurück
            if (zoomLevel > 1) {
                zoomLevel--;
                updateCamera();
            }
        }
    }
});

function handleActualClick(event) {

	if (event.target.closest('#monitor-ui')) return;

    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    const hit = intersects[0]?.object;
    const hitMonitor = hit?.userData.id === "monitor";
    const hitDeskOrPlant = intersects.length > 0 && !hitMonitor;

    // --- STRENGE STUFEN-LOGIK ---
    if (zoomLevel === 1 && (hitMonitor || hitDeskOrPlant)) {
        zoomLevel = 2;
        goToTisch();
    } 
    else if (zoomLevel === 2 && hitMonitor) {
        zoomLevel = 3;
        goToMonitor();
    }
    else if (zoomLevel === 3 && !hitMonitor) {
        zoomLevel = 2;
        goToTisch();
    }
    else if (zoomLevel === 2 && !hitMonitor && !hitDeskOrPlant) {
        zoomLevel = 1;
        goToRaum();
    }
}


let isCameraMoving = false;

function updateCamera() {
isCameraMoving = true;
    
    let pos = { x: 10, y: 8, z: 12 };
    let target = { x: 0, y: 0, z: 0 };

    if (zoomLevel === 2) { pos = { x: 6, y: 5, z: 8 }; target = { x: 0, y: 0.5, z: 0 }; }
    if (zoomLevel === 3) { pos = { x: 0, y: 2, z: 3.5 }; target = { x: 0, y: 1.0, z: -0.5 }; }
    
    // NOCH NÄHER RAN: z von 0.2 auf 0.1 oder sogar 0.05
    if (zoomLevel === 4) { 
        pos = { x: 0, y: 1.2, z: 0.05 }; 
        target = { x: 0, y: 1.2, z: -0.8 }; 
    }

    gsap.to(camera.position, { 
        ...pos, 
        duration: 1.2, 
        ease: "power2.inOut",
        onComplete: () => { isCameraMoving = false; }
    });
    gsap.to(controls.target, { ...target, duration: 1.2 });
}

// --- KAMERA-FAHRTEN ---
function goToRaum() {
    gsap.to(camera.position, { x: 10, y: 8, z: 12, duration: 1.5, ease: "power2.inOut" });
    gsap.to(controls.target, { x: 0, y: 0, z: 0, duration: 1.5 });
    controls.enableRotate = true;
}

function goToTisch() {
    gsap.to(camera.position, { x: 3, y: 3, z: 6, duration: 1.5, ease: "power2.inOut" });
    gsap.to(controls.target, { x: 0, y: 0.5, z: 0, duration: 1.5 });
    controls.enableRotate = true;
}

function goToMonitor() {
    gsap.to(camera.position, { x: 0, y: 1.2, z: 0.2, duration: 1.2, ease: "power2.inOut" });
    gsap.to(controls.target, { x: 0, y: 1.2, z: -0.8, duration: 1.2 });
}

let isDragging = false;

// Drag-Erkennung für die 360-Drehung
window.addEventListener('mousedown', () => isDragging = false);
window.addEventListener('mousemove', () => isDragging = true);

function animate() {
    requestAnimationFrame(animate);
    controls.update();

    const monitorPos = new THREE.Vector3(0, 1.2, -0.74);
    
    // 1. Berechne die Distanz zwischen Kamera und Monitor
    const distance = camera.position.distanceTo(monitorPos);
    
    // 2. Winkel-Check (Blickrichtung)
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    const monitorNormal = new THREE.Vector3(0, 0, 1);
    const dot = camDir.dot(monitorNormal); 

    // LOGIK:
    // - Muss Zoomstufe 4 sein
    // - Kamera darf nicht mehr in der GSAP-Fahrt sein
    // - Muss frontal sein (dot < -0.98)
    // - NEU: Muss nah genug sein (distance < 1.0)
    if (zoomLevel === 4 && !isCameraMoving && dot < -0.98 && distance < 1.0) {
        const vector = monitorPos.clone();
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * -0.5 + 0.5) * window.innerHeight;

        monitorUI.style.display = "block";
        monitorUI.style.left = `${x}px`;
        monitorUI.style.top = `${y}px`;
        monitorUI.style.opacity = "1";
    } else {
        // Wenn eine Bedingung nicht erfüllt ist (z.B. durch Rauszoomen): Ausblenden
        monitorUI.style.opacity = "0";
        if (monitorUI.style.display === "block" && parseFloat(monitorUI.style.opacity) < 0.1) {
            monitorUI.style.display = "none";
        }
    }

    renderer.render(scene, camera);
}

animate();

window.showDetails = function(topic) {
    const menu = document.getElementById('ui-menu');
    const details = document.getElementById('ui-details');
    const title = document.getElementById('detail-title');
    const content = document.getElementById('detail-content');

    // Inhalte festlegen
    const data = {
        about: { t: "ABOUT ME", c: "Ich bin ein kreativer Entwickler mit Leidenschaft für 3D-Web-Erlebnisse." },
        projects: { t: "PROJECTS", c: "Hier findest du meine neuesten Three.js Experimente und Web-Apps." },
        contact: { t: "CONTACT", c: "Schreib mir eine Mail an: hello@example.com" }
    };

    title.innerText = data[topic].t;
    content.innerText = data[topic].c;

    // Animation: Menü raus, Details rein
    gsap.to(menu, { opacity: 0, duration: 0.2, onComplete: () => {
        menu.style.display = 'none';
        details.style.display = 'block';
        gsap.fromTo(details, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 });
    }});
};

window.showMenu = function() {
    const menu = document.getElementById('ui-menu');
    const details = document.getElementById('ui-details');

    gsap.to(details, { opacity: 0, duration: 0.2, onComplete: () => {
        details.style.display = 'none';
        menu.style.display = 'block';
        gsap.to(menu, { opacity: 1, duration: 0.4 });
    }});
};


// --- ZENTRALE SCHRITT-ZURÜCK LOGIK ---
function handleBackStep() {
    if (zoomLevel > 1) {
        zoomLevel--;
        updateCamera();
    }
}

// ESC Taste: Nur eine Stufe zurück!
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        handleBackStep();
    }
});

// // --- INHALTE RENDERN ---
// window.renderAppContent = function(page) {
//     const container = document.getElementById('app-content');
    
//     if (page === 'about') {
//         container.innerHTML = `
//             <div class="text-shadow-box">
//                 <h1 style="border-bottom: 2px solid #0077b5; display: inline-block;">Lebenslauf</h1>
//                 <p style="font-size: 1.2rem;"><b>Name:</b> Dein Name</p>
//                 <p>Ich entwickle interaktive 3D-Welten. Hier siehst du, wie CSS-Transparenz und Three.js verschmelzen.</p>
//             </div>
//         `;
//     } 
//     else if (page === 'projects') {
//         container.innerHTML = `
//             <h1 class="text-shadow-box">Meine Projekte</h1>
//             <div class="tile-grid">
//                 <div class="project-tile"><h3>3D Office</h3><p>Die Szene, die du gerade siehst.</p></div>
//                 <div class="project-tile"><h3>Glass UI</h3><p>Transparentes Interface Design.</p></div>
//                 <div class="project-tile"><h3>GSAP Magic</h3><p>Flüssige Kamera-Fahrten.</p></div>
//                 <div class="project-tile"><h3>Three.js</h3><p>Web-basierte Grafik-Engine.</p></div>
//             </div>
//         `;
//     }else if (page === 'contact') {
//             container.innerHTML = `
//                 <h1 style="margin-bottom: 30px;">Let's Connect</h1>
//                 <p style="margin-bottom: 40px;">Wähle eine Plattform für Details:</p>
//                 <a href="#" class="icon-link icon-github">GitHub</a>
//                 <a href="#" class="icon-link icon-linkedin">LinkedIn</a>
//                 <a href="#" class="icon-link icon-email">Email</a>
//             `;
//         }
//         gsap.to(container, { opacity: 1, x: 0, duration: 0.4 });

// };

// --- LIVE UHRZEIT ---
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if (!clockElement) return; // Sicherheitshalber, falls das Element noch nicht geladen ist

    const now = new Date();
    
    // Formatierung: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

// Sofort einmal aufrufen
updateClock();

// Jede Sekunde (1000ms) aktualisieren
setInterval(updateClock, 1000);


import yaml from 'js-yaml';
import { marked } from 'marked';
import fm from 'front-matter';
import './style.css';
// Templates
import aboutTpl from './templates/about.html?raw';
import contactTpl from './templates/contact.html?raw';
import projectItemTpl from './templates/project-item.html?raw';

// Daten
import profileDataRaw from './data/profile.yml?raw';
import bioMarkdownRaw from './data/bio.md?raw';
const projectFiles = import.meta.glob('./data/projects/*.md', { query: '?raw', eager: true });

// const render = (template, data) => {
//     return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
// };

const render = (template, data) => {
    // Erlaubt auch Bindestriche und Punkte innerhalb der Klammern
    return template.replace(/{{([\w.-]+)}}/g, (_, key) => {
        return data[key] !== undefined ? data[key] : '';
    });
};

window.renderAppContent = function(page) {
    const container = document.getElementById('app-content');
    let htmlResult = "";

    if (page === 'about') {
      // 1. Die Rohdaten der bio.md parsen
    const parsedBio = fm(bioMarkdownRaw);
    const bioHtml = marked.parse(parsedBio.body);
    // Wir können hier auch Daten aus dem Bio-YAML mitgeben (z.B. parsedBio.attributes.title)
    htmlResult = render(aboutTpl, { 
        ...parsedBio.attributes,
        bio: bioHtml
    });
    } 
    
    else if (page === 'contact') {
        const profile = yaml.load(profileDataRaw);
        htmlResult = render(contactTpl, profile); // Übergibt das ganze YAML-Objekt
    } 
    
else if (page === 'projects') {
        const paths = Object.keys(projectFiles);

        const projectsHtml = paths.map(path => {
            const fileModule = projectFiles[path];
            const rawContent = fileModule.default || fileModule;

            const { attributes, body } = fm(rawContent);

            return render(projectItemTpl, {
                ...attributes, // title, date, thumbnail
                content: marked.parse(body)
            });
        }).join('');

        htmlResult = `<h1 class="text-shadow-box">Projekte</h1><div class="projects-list">${projectsHtml}</div>`;
    }

    container.innerHTML = htmlResult;
    gsap.fromTo(container, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
};