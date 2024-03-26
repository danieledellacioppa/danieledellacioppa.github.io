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

// Sfera al centro (simula il nucleo)
let sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
scene.add(sphere);

// Cubi (simulano gli elettroni)
let cube1 = new THREE.Mesh(geometry, material);
let cube2 = new THREE.Mesh(geometry, material);
let cube3 = new THREE.Mesh(geometry, material);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let radius = 2;

function animate() {
    requestAnimationFrame(animate);

    // Movimento "elettrone" 1
    angle1 += 0.02;
    cube1.position.x = Math.cos(angle1) * radius;
    cube1.position.y = Math.sin(angle1) * radius;
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    // Movimento "elettrone" 2 - in un piano perpendicolare al primo
    angle2 += 0.03;
    cube2.position.x = Math.cos(angle2) * radius;
    cube2.position.z = Math.sin(angle2) * radius;
    cube2.rotation.x += 0.01;
    cube2.rotation.z += 0.01;

    // Movimento "elettrone" 3 - in un piano inclinato
    angle3 += 0.04;
    cube3.position.y = Math.cos(angle3) * radius;
    cube3.position.z = Math.sin(angle3) * radius;
    cube3.rotation.y += 0.01;
    cube3.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();
