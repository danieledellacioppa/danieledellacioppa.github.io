console.log("Il file del logo è stato avviato correttamente!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

const loader = new THREE.FontLoader();

loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('AKHTER', {
        font: font,
        size: 0.5,
        height: 0.1,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-1.5, 0, 0);
    scene.add(textMesh);

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
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = Math.PI / 8; // Ruota l'ottagono
    scene.add(mesh);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

