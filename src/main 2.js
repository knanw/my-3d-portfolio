import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Für einfacheres Debugging

// 1. Szene, Kamera, Renderer initialisieren
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x87CEEB); // Himmelblau

// Debug-Steuerung: Erlaubt dir, dich mit der Maus umzusehen (später entfernen)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Sanftere Bewegung
controls.dampingFactor = 0.05;

// Licht
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Sanftes Umgebungslicht
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 5, 5);
scene.add(directionalLight);

// 2. Ein einfacher Raum erstellen
// Material für Wände, Boden, Decke
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.BackSide });
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });

const roomSize = 10; // Größe des Raumes

// Boden
const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -roomSize / 2;
scene.add(floor);

// Decke
const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), wallMaterial);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = roomSize / 2;
scene.add(ceiling);

// Wände
const wallGeometry = new THREE.PlaneGeometry(roomSize, roomSize);
const walls = [
    new THREE.Mesh(wallGeometry, wallMaterial), // Back
    new THREE.Mesh(wallGeometry, wallMaterial), // Front
    new THREE.Mesh(wallGeometry, wallMaterial), // Left
    new THREE.Mesh(wallGeometry, wallMaterial)  // Right
];

walls[0].position.z = -roomSize / 2; // Back Wall
walls[1].position.z = roomSize / 2;   // Front Wall
walls[1].rotation.y = Math.PI;        // Rotate to face inwards
walls[2].rotation.y = Math.PI / 2;    // Left Wall
walls[2].position.x = -roomSize / 2;
walls[3].rotation.y = -Math.PI / 2;   // Right Wall
walls[3].position.x = roomSize / 2;

walls.forEach(wall => {
    wall.position.y = 0; // Centered vertically
    scene.add(wall);
});


// Startposition der Kamera
camera.position.set(0, 0, 0); // Startet in der Mitte des Raumes

// 3. Render-Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Nur für OrbitControls nötig
    renderer.render(scene, camera);
}
animate();

// Fenstergrößenänderung handhaben
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});