console.log("Il file JavaScript è stato caricato correttamente!");
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Sfondo rgb(155, 204, 0);
renderer.setClearColor(0x9bcc00, 1);

document.body.appendChild(renderer.domElement);

let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

camera.position.z = 5;

let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshStandardMaterial({ color: 0x9bcc00 });

// Sfera al centro
let sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
scene.add(sphere);

// Cubo 1 a sinistra della sfera
let cube1 = new THREE.Mesh(geometry, material);
cube1.position.set(-2, 0, 0);
cube1.userData = { URL: "https://github.com/danieledellacioppa/Zip-JSON-Editor" };
scene.add(cube1);

// Cubo 2 a destra della sfera
let cube2 = new THREE.Mesh(geometry, material);
cube2.position.set(2, 0, 0);
cube2.userData = { URL: "https://github.com/danieledellacioppa/Jetpack-Dagger-Minimalistic-Launcher-for-Android-10" };
scene.add(cube2);

// Esagono sopra la sfera
let cube3 = new THREE.Mesh(geometry, material);
cube3.position.set(1, 0, 0);
scene.add(cube3);

// Variabili per l'animazione della rotazione
let angle = 0;
let radius = 2;

function animate() {
    requestAnimationFrame(animate);

    // Aggiorna l'angolo per la rotazione
    angle += 0.01;

    // Calcola le nuove posizioni per la rotazione attorno alla sfera
    cube1.position.x = Math.cos(angle) * radius;
    cube1.position.y = Math.sin(angle) * radius;
    cube2.position.x = Math.cos(angle + Math.PI * 2 / 3) * radius;
    cube2.position.y = Math.sin(angle + Math.PI * 2 / 3) * radius;
    cube3.position.x = Math.cos(angle + Math.PI * 4 / 3) * radius;
    cube3.position.y = Math.sin(angle + Math.PI * 4 / 3) * radius;

    renderer.render(scene, camera);
}

animate();

