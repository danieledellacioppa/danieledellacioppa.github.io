console.log("Il file JavaScript è stato caricato correttamente!");
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// rgba(80, 80, 80, 0.5);
renderer.setClearColor(0x505050, 0.5);
document.body.appendChild(renderer.domElement);

let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

camera.position.z = 5;

// Primo cubo (già esistente nel tuo codice)
let geometry = new THREE.BoxGeometry();
// colore che voglio è 155, 204, 0
let material = new THREE.MeshStandardMaterial({ color: 0x9bcc00 });
let cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -1.5; // Sposta leggermente a sinistra
cube1.userData = { URL: "https://github.com/danieledellacioppa/Zip-JSON-Editor" }; // URL del progetto
scene.add(cube1);

// Secondo cubo
let cube2 = new THREE.Mesh(geometry, material.clone()); // Clona il materiale se vuoi lo stesso colore, altrimenti crea un nuovo material con color diverso
cube2.position.x = 1.5; // Sposta leggermente a destra
cube2.userData = { URL: "https://github.com/danieledellacioppa/Jetpack-Dagger-Minimalistic-Launcher-for-Android-10" }; // Puoi cambiare l'URL per il secondo cubo
scene.add(cube2);

let sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
sphere.position.x = 0;
sphere.position.y = 0;
sphere.position.z = 0;
scene.add(sphere);

let exagon = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1, 6), material);
exagon.position.x = 2;
exagon.position.y = 2;
exagon.position.z = 0;
scene.add(exagon);


// Funzione animate aggiornata per animare entrambi i cubi
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Anima entrambi i cubi
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    exagon.rotation.x += 0.01;
    exagon.rotation.y += 0.01;
}

animate();
