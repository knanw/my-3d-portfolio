import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import gsap from 'gsap';

// --- SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht (heller für den Raum)
scene.add(new THREE.AmbientLight(0xffffff, 1));

// --- 360° STEUERUNG (VR Style) ---
const controls = new PointerLockControls(camera, document.body);

// Klick auf die Seite aktiviert die 360° Sicht
window.addEventListener('click', () => {
    if (!controls.isLocked) {
        controls.lock(); 
    }
});

// --- RAUM BAUEN (Himmel/Box) ---
// Wir erstellen eine große Kugel mit einer Textur von innen (Skybox)
const roomGeo = new THREE.BoxGeometry(20, 20, 20);
const roomMat = new THREE.MeshStandardMaterial({ color: 0x333333, side: THREE.BackSide });
const room = new THREE.Mesh(roomGeo, roomMat);
scene.add(room);

// Schreibtisch (Hotspot)
const desk = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff4444 })
);
desk.position.set(5, -2, -5);
desk.userData = { id: "desk" };
scene.add(desk);

camera.position.set(0, 0, 5);

// --- INTERAKTIVE BEWEGUNG ZUM OBJEKT ---
const raycaster = new THREE.Raycaster();
const centerPoint = new THREE.Vector2(0, 0); // Mitte des Bildschirms

// Rechtsklick (oder Taste), um zum Objekt zu gleiten
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    // Prüfen, was wir in der Mitte des Bildschirms anschauen
    raycaster.setFromCamera(centerPoint, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const target = intersects[0].object;
        
        if (target.userData.id === "desk") {
            // Sanfte Kamerafahrt mit GSAP
            gsap.to(camera.position, {
                x: target.position.x - 1,
                y: target.position.y + 1.5,
                z: target.position.z + 2,
                duration: 1.5,
                ease: "power2.inOut"
            });
        }
    }
});

// --- RENDER LOOP ---
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();