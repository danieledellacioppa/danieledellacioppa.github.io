// console.log("Il file del logo è stato avviato correttamente!");

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// camera.position.z = 5;

// const loader = new THREE.FontLoader();

// loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
//     const textGeometry = new THREE.TextGeometry('AKHTER', {
//         font: font,
//         size: 0.5,
//         height: 0.1,
//     });
//     const textMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
//     textMesh.position.set(-1.5, 0, 0);
//     scene.add(textMesh);

//     const shape = new THREE.Shape();
//     const exteriorAngle = 2 * Math.PI / 8;
//     const radius = 1;
//     for (let i = 0; i < 8; i++) {
//         const angle = i * exteriorAngle;
//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);
//         if (i === 0) {
//             shape.moveTo(x, y);
//         } else {
//             shape.lineTo(x, y);
//         }
//     }
//     shape.closePath();

//     const geometry = new THREE.ShapeGeometry(shape);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.rotation.z = Math.PI / 8; // Ruota l'ottagono
//     scene.add(mesh);
// });

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// animate();

console.log("Il file del logo è stato avviato correttamente!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 2;

const group = new THREE.Group(); // Crea un gruppo per unire testo e ottagono

const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    // Crea il testo come prima
    const textGeometry = new THREE.TextGeometry('AKHTER', {
        font: font,
        size: 0.2,
        height: 0.1,
    });
    textGeometry.computeBoundingBox();
    const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
    
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.x = -0.5 * textWidth; // Centra il testo
    
    // Ruota il testo per annullare la rotazione dell'ottagono
    textMesh.rotation.z = -Math.PI / 8;
    group.add(textMesh); // Aggiunge il testo al gruppo

        // Segue la creazione dell'ottagono (senza modifiche)
        const shape = new THREE.Shape();
        const exteriorAngle = 2 * Math.PI / 8;
        const radius = 1;
        for (let i = 0; i < 8; i++) {
            const angle = i * exteriorAngle;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            if (i === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        }
        shape.closePath();

        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material); // Questa è la linea mancante per creare l'oggetto mesh

        // Dopo aver creato l'ottagono, aggiungilo al gruppo anziché direttamente alla scena
        group.add(mesh);

            // Ruota il gruppo per allineare l'ottagono
    group.rotation.z = Math.PI / 8;
    
    scene.add(group); // Aggiunge il gruppo alla scena
});

let oscillationSpeed = 0.01;
let oscillationAngle = 0;

function animate() {
    requestAnimationFrame(animate);
    
    // Aggiorna l'angolo di oscillazione
    oscillationAngle += oscillationSpeed;
    // Applica l'oscillazione al gruppo
    group.rotation.y = Math.sin(oscillationAngle) * Math.PI / 8;
    
    renderer.render(scene, camera);
}

animate();

