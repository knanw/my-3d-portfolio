// src/world/OfficeWorld.js
import * as THREE from 'three';
import screenImageUrl from '/bildschirm-foto.jpg';

export class OfficeWorld {
    constructor(scene) {
        this.scene = scene;
        this.textureLoader = new THREE.TextureLoader();
        this.legMat = new THREE.MeshStandardMaterial({ color: 0x111111 });

        // Diese müssen alle hier drunter definiert sein!
        this.createFloor();
        this.createDesk(); 
        this.createMonitor();
        this.createChair();
        this.createPlant();
    }

    createFloor() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(30, 30),
            new THREE.MeshStandardMaterial({ color: 0xbbbbbb })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -2.5;
        floor.receiveShadow = true;
        this.scene.add(floor);
    }


    createFloor() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(30, 30),
            new THREE.MeshStandardMaterial({ color: 0xbbbbbb })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -2.5;
        floor.receiveShadow = true;
        this.scene.add(floor);
    }

    createDesk() {
        const deskGroup = new THREE.Group();
        const deskTop = new THREE.Mesh(
            new THREE.BoxGeometry(5, 0.15, 2.5), 
            new THREE.MeshStandardMaterial({ color: 0x3e2723 })
        );
        deskTop.castShadow = true;
        deskTop.receiveShadow = true;
        deskGroup.add(deskTop);

        const legGeo = new THREE.BoxGeometry(0.15, 2.5, 0.15);
        const legPos = [[-2.3, -1.25, -1.1], [2.3, -1.25, -1.1], [-2.3, -1.25, 1.1], [2.3, -1.25, 1.1]];
        legPos.forEach(p => {
            const leg = new THREE.Mesh(legGeo, this.legMat);
            leg.position.set(p[0], p[1], p[2]);
            leg.castShadow = true;
            deskGroup.add(leg);
        });
        this.scene.add(deskGroup);
    }

    createMonitor() {
        const monitorGroup = new THREE.Group();
        const screenTex = this.textureLoader.load(screenImageUrl);

        const mBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.5), this.legMat);
        mBase.position.y = 0.1;
        
        const mStand = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.1), this.legMat);
        mStand.position.y = 0.5;
        
        const mScreen = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.1), this.legMat);
        mScreen.position.y = 1.2;

        const display = new THREE.Mesh(
            new THREE.PlaneGeometry(2.3, 1.3),
            new THREE.MeshStandardMaterial({ 
                map: screenTex,
                emissive: 0xffffff,
                emissiveIntensity: 0.1,
                emissiveMap: screenTex 
            })
        );
        display.position.set(0, 1.2, 0.06);
        display.userData = { id: "monitor" };

        monitorGroup.add(mBase, mStand, mScreen, display);
        monitorGroup.position.set(0, 0, -0.8);
        this.scene.add(monitorGroup);
    }

    createChair() {
        const chair = new THREE.Group();
        const chairMat = new THREE.MeshStandardMaterial({ color: 0x222222 });

        const cSeat = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.2, 1.1), chairMat);
        cSeat.position.y = -0.4;

        const cBack = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.15), chairMat);
        cBack.position.set(0, 0.4, 0.5);

        const cLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2), this.legMat);
        cLeg.position.y = -1.1;

        const cCross = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.1, 5), this.legMat);
        cCross.position.y = -1.7;

        chair.add(cSeat, cBack, cLeg, cCross);
        chair.position.set(0, -0.6, 2.2);
        this.scene.add(chair);
    }

    createPlant() {
        const plant = new THREE.Group();
        const pot = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.5, 1), 
            new THREE.MeshStandardMaterial({color: 0x5d4037})
        );
        pot.position.y = -2;
        plant.add(pot);

        const leafMat = new THREE.MeshPhysicalMaterial({ 
            color: 0x1b5e20, 
            side: THREE.DoubleSide, 
            roughness: 0.7 
        });

        for (let i = 0; i < 10; i++) {
            const angle = (i / 10) * Math.PI * 2;
            const stemHeight = 3 + Math.random() * 2;
            
            const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, stemHeight), leafMat);
            stem.position.y = -2 + stemHeight / 2;
            stem.rotation.z = (Math.random() - 0.5) * 0.4;
            
            const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), leafMat);
            leaf.scale.set(1, 0.02, 3.5);
            leaf.position.y = stemHeight / 2;
            leaf.rotation.x = 0.4;

            const branch = new THREE.Group();
            branch.add(stem, leaf);
            branch.rotation.y = angle;
            plant.add(branch);
        }
        plant.position.set(-4.5, 0, 0.5);
        this.scene.add(plant);
    }
}