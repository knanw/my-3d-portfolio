import * as THREE from 'three';
import gsap from 'gsap';

export class InteractionManager {
    constructor(camera, scene, controls) {
        this.camera = camera;
        this.scene = scene;
        this.controls = controls;
        this.zoomLevel = 1;
        this.isCameraMoving = false;
        this.mouseStartX = 0;
        this.mouseStartY = 0;

        this.CAMERA_STATES = {
            1: { pos: { x: 10, y: 8, z: 12 }, target: { x: 0, y: 0, z: 0 } },
            2: { pos: { x: 6, y: 5, z: 8 },   target: { x: 0, y: 0.5, z: 0 } },
            3: { pos: { x: 0, y: 2, z: 3.5 }, target: { x: 0, y: 1, z: -0.5 } },
            4: { pos: { x: 0, y: 1.2, z: 0.05 }, target: { x: 0, y: 1.2, z: -0.8 } }
        };

        this._initEvents();
    }

    _initEvents() {
        window.addEventListener('mousedown', (e) => {
            this.mouseStartX = e.clientX;
            this.mouseStartY = e.clientY;
        });

        window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && this.zoomLevel > 1) {
                this.zoomLevel--;
                this.updateCamera();
            }
        });
    }

    handleMouseUp(event) {
// NEU: Wenn der Klick auf ein HTML-Element im UI ging, brich hier ab!
        if (event.target.closest('#monitor-ui')) return;

        const deltaX = Math.abs(event.clientX - this.mouseStartX);
        const deltaY = Math.abs(event.clientY - this.mouseStartY);

        if (deltaX < 5 && deltaY < 5) {
            const mouse = new THREE.Vector2(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, this.camera);
            const intersects = raycaster.intersectObjects(this.scene.children, true);
            const hitId = intersects[0]?.object.userData.id;

            if (this.zoomLevel === 1 && intersects.length > 0) {
                this.zoomLevel = 2;
            } else if (this.zoomLevel === 2 && intersects.length > 0) {
                this.zoomLevel = 3;
            } else if (this.zoomLevel === 3 && hitId === "monitor") {
                this.zoomLevel = 4;
            } else if (intersects.length === 0 && this.zoomLevel > 1) {
                this.zoomLevel--;
            }
            this.updateCamera();
        }
    }

    updateCamera() {
        this.isCameraMoving = true;
        const state = this.CAMERA_STATES[this.zoomLevel];

        gsap.to(this.camera.position, { 
            ...state.pos, 
            duration: 1.2, 
            ease: "power2.inOut",
            onComplete: () => { this.isCameraMoving = false; }
        });
        gsap.to(this.controls.target, { ...state.target, duration: 1.2 });
    }

    checkMonitorFocus(uiManager) {
        const monitorPos = new THREE.Vector3(0, 1.2, -0.74);
        const distance = this.camera.position.distanceTo(monitorPos);
        
        const camDir = new THREE.Vector3();
        this.camera.getWorldDirection(camDir);
        const dot = camDir.dot(new THREE.Vector3(0, 0, 1)); 

        if (this.zoomLevel === 4 && !this.isCameraMoving && dot < -0.98 && distance < 1.0) {
            uiManager.showMonitorUI(monitorPos, this.camera);
        } else {
            uiManager.hideMonitorUI();
        }
    }
}