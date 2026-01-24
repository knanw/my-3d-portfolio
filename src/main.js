import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

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

// --- LICHT ---
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const sun = new THREE.DirectionalLight(0xffffff, 1.2);
sun.position.set(5, 15, 10);
sun.castShadow = true;
scene.add(sun);

// --- BODEN ---
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: 0xbbbbbb })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2.5; // Boden etwas tiefer für mehr Raumhöhe
floor.receiveShadow = true;
scene.add(floor);

// --- SCHREIBTISCH (Höhe ca. 0.8 Einheiten über Boden) ---
const deskGroup = new THREE.Group();
const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.15, 2.5), 
    new THREE.MeshStandardMaterial({ color: 0x3e2723 }) // Dunkleres Holz
);
deskTop.position.y = 0;
deskTop.castShadow = true;
deskTop.receiveShadow = true;
deskGroup.add(deskTop);

// Beine (müssen bis zum Boden reichen: 2.5 Einheiten lang)
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

// --- MONITOR (Erhöht mit Ständer) ---
const monitorGroup = new THREE.Group();
const mBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.5), legMat);
mBase.position.y = 0.1;
const mStand = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), legMat);
mStand.position.y = 0.5;
const mScreen = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.1), legMat);
mScreen.position.y = 1.2;
const display = new THREE.Mesh(
    new THREE.PlaneGeometry(2.3, 1.3),
    new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x111111 })
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

// --- INTERAKTION ---
const monitorUI = document.getElementById('monitor-ui');

window.addEventListener('click', (event) => {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData.id === "monitor") {
        // 1. Kamera-Flug starten
        gsap.to(camera.position, { 
            x: 0, y: 1.2, z: 1.2, // Etwas näher ran für das Menü
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
                // 2. Menü einblenden, wenn angekommen
                monitorUI.style.display = "block";
                monitorUI.style.opacity = 0;
                gsap.to(monitorUI.style, { opacity: 1, duration: 0.5 });
            }
        });
        
        gsap.to(controls.target, { x: 0, y: 1.2, z: -0.8, duration: 2 });
    } else {
        // Optional: Menü ausblenden, wenn man woanders hinklickt
        gsap.to(monitorUI.style, { opacity: 0, duration: 0.3, onComplete: () => {
            monitorUI.style.display = "none";
        }});
    }
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();