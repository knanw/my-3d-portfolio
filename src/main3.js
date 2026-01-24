import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(5, 5, 5);
scene.add(light);

// --- OBJEKTE ---
// Ein einfacher "Schreibtisch" (roter Block)
const deskGeometry = new THREE.BoxGeometry(2, 1, 1);
const deskMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const desk = new THREE.Mesh(deskGeometry, deskMaterial);
desk.position.set(3, -4, -3); // Hinten rechts an der Wand
desk.userData = { name: "Schreibtisch" }; // Wichtig für die Identifizierung beim Klick
scene.add(desk);

// Ein "Monitor" auf dem Schreibtisch (schwarze Fläche)
const monitor = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 0.6),
    new THREE.MeshStandardMaterial({ color: 0x000000 })
);
monitor.position.set(3, -3.2, -3.45);
monitor.userData = { name: "Monitor" };
scene.add(monitor);

// Boden zur Orientierung
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -4.5;
scene.add(floor);

camera.position.set(0, 2, 10);

// --- INTERAKTION (Raycaster) ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    // Mausposition normalisieren (-1 bis +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        
        if (clickedObject.userData.name === "Schreibtisch" || clickedObject.userData.name === "Monitor") {
            console.log("Gehe zum Schreibtisch...");
            moveCamera(3, -2, 0); // Zoomt zum Schreibtisch
        }
    }
});

// Einfache Kamera-Bewegung (ohne extra Library für den Anfang)
function moveCamera(x, y, z) {
    // In einem echten Projekt würden wir hier GSAP oder TWEEN.js nutzen
    // Für den Test setzen wir die Kamera einfach direkt um:
    camera.position.set(x, y, z);
    camera.lookAt(3, -3.2, -3.45); // Schau auf den Monitor
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();