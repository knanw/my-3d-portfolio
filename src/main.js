import { SceneManager } from './core/SceneManager';
import { OfficeWorld } from './core/OfficeWorld';
import { InteractionManager } from './core/InteractionManager';
import { UIManager } from './core/UIManager';
import './style.css';

const sceneManager = new SceneManager();
const office = new OfficeWorld(sceneManager.scene);
const ui = new UIManager();
const interaction = new InteractionManager(sceneManager.camera, sceneManager.scene, sceneManager.controls);

function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
    interaction.checkMonitorFocus(ui);
}

animate();