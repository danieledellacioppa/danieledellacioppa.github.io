console.log("Il file JavaScript è stato caricato correttamente!");
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

camera.position.z = 5;

// Primo cubo (già esistente nel tuo codice)
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
let cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -1.5; // Sposta leggermente a sinistra
cube1.userData = { URL: "https://github.com/danieledellacioppa/Zip-JSON-Editor" }; // URL del progetto
scene.add(cube1);

// Secondo cubo
let cube2 = new THREE.Mesh(geometry, material.clone()); // Clona il materiale se vuoi lo stesso colore, altrimenti crea un nuovo material con color diverso
cube2.position.x = 1.5; // Sposta leggermente a destra
cube2.userData = { URL: "https://github.com/danieledellacioppa/Jetpack-Dagger-Minimalistic-Launcher-for-Android-10" }; // Puoi cambiare l'URL per il secondo cubo
scene.add(cube2);

// Funzione animate aggiornata per animare entrambi i cubi
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Anima entrambi i cubi
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
}

animate();
