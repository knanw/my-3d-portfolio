import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

// --- BASIS SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0); // Heller Hintergrund (hellgrau)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Schatten aktivieren für Realismus
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- LICHT ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// --- BODEN ---
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: 0xdddddd })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2;
floor.receiveShadow = true;
scene.add(floor);

// --- MÖBEL-GRUPPE ---
const workstation = new THREE.Group();

// 1. Schreibtisch (Holz-Look)
const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(4, 0.1, 2),
    new THREE.MeshStandardMaterial({ color: 0xc4a484 })
);
deskTop.castShadow = true;
workstation.add(deskTop);

const legGeo = new THREE.BoxGeometry(0.1, 2, 0.1);
const legMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
const positions = [[-1.9, -1, -0.9], [1.9, -1, -0.9], [-1.9, -1, 0.9], [1.9, -1, 0.9]];
positions.forEach(p => {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(p[0], p[1], p[2]);
    workstation.add(leg);
});

// 2. Monitor mit Textur
const textureLoader = new THREE.TextureLoader();
const screenTex = textureLoader.load('/bildschirm-foto.jpg'); // Bild im public Ordner!

const monitorGroup = new THREE.Group();
const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1, 0.1), legMat);
const display = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 0.9),
    new THREE.MeshStandardMaterial({ map: screenTex, emissive: 0xffffff, emissiveIntensity: 0.2 })
);
display.position.z = 0.06;
display.userData = { id: "monitor" };
monitorGroup.add(frame, display);
monitorGroup.position.set(0, 0.6, -0.5);
workstation.add(monitorGroup);

// 3. Bürostuhl (Richtung Schreibtisch)
const chair = new THREE.Group();
const seat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.8), legMat);
const back = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), legMat);
back.position.set(0, 0.4, 0.4); // Rückenlehne
const base = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.6), legMat);
base.position.y = -0.35;
// Rollenkreuz (vereinfacht)
const cross = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.7), legMat);
cross.position.y = -0.65;
chair.add(seat, back, base, cross);
chair.position.set(0, -0.7, 1.2); // Vor dem Tisch platziert
workstation.add(chair);

// 4. Bananenpflanze (Bodenpflanze)
const plant = new THREE.Group();
const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.7), new THREE.MeshStandardMaterial({color: 0x8b4513}));
pot.position.y = -1.65;
plant.add(pot);

const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d5a27, side: THREE.DoubleSide });
for(let i=0; i<6; i++) {
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.5), leafMat);
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 8), leafMat);
    leaf.scale.set(1, 0.05, 2.5);
    leaf.position.y = 0.75;
    
    const branch = new THREE.Group();
    branch.add(stem, leaf);
    branch.rotation.z = (Math.PI / 4) + (Math.random() * 0.5);
    branch.rotation.y = (i * (Math.PI * 2) / 6);
    branch.position.y = -1.3;
    plant.add(branch);
}
plant.position.set(-3, 0, 0);
workstation.add(plant);

scene.add(workstation);
camera.position.set(6, 4, 8);

// --- INTERAKTION ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        let obj = intersects[0].object;
        if (obj.userData.id === "monitor") {
            gsap.to(camera.position, { x: 0, y: 0.6, z: 1.5, duration: 1.5 });
            gsap.to(controls.target, { x: 0, y: 0.6, z: 0, duration: 1.5 });
        }
    }
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();