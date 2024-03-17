console.log("Il file JavaScript è stato caricato correttamente!");
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

camera.position.z = 5;

let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
cube.userData = { URL: "https://github.com/danieledellacioppa/Zip-JSON-Editor" }; // URL del progetto
scene.add(cube);

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

function onMouseClick(event) {
    // Calcola la posizione del mouse nella scena
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Aggiorna il raycaster con la posizione del mouse
    raycaster.setFromCamera(mouse, camera);

    // Calcola gli oggetti che intersecano il raggio
    let intersects = raycaster.intersectObjects(scene.children);

    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.userData.URL) {
            window.open(intersects[i].object.userData.URL);
            break;
        }
    }
}

window.addEventListener('click', onMouseClick);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Qui puoi aggiungere animazioni agli oggetti, es. far ruotare il cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate();
