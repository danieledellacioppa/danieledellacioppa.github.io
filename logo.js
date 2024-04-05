console.log("Il file del logo è stato avviato correttamente!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 2;

const group = new THREE.Group(); // Crea un gruppo per unire testo e ottagono

const loader = new THREE.FontLoader();

// loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
loader.load('https://threejs.org/examples/fonts/optimer_bold.typeface.json', function (font) {
    // Crea il testo
    const textGeometry = new THREE.TextGeometry('AKHTER', {
        font: font,
        size: 0.2,
        height: 0.05,
    });
    textGeometry.computeBoundingBox();
    
    // const textMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        specular: 0xffffff,
        shininess: 50
    });
    
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    
    // Calcola la larghezza del testo per centrarlo
    const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
    textMesh.position.x = -0.5 * textWidth;
    
    // Regola la posizione Y qui per centrare il testo sull'ottagono
    // Il valore specifico potrebbe richiedere alcuni tentativi per ottenere l'allineamento perfetto
    textMesh.position.y = 0.1; // Aumenta o diminuisci questo valore come necessario
    
    // Ruota il testo per annullare la rotazione dell'ottagono
    textMesh.rotation.z = -Math.PI / 8;
    group.add(textMesh);

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

    // Dopo aver aggiunto il testo e l'ottagono al gruppo

// Parametri per le barre
const barWidth = textWidth + 0.4; // Slightly wider than the text width
const barHeight = 0.05; // Thickness of the bars
const barDepth = 0.05; // Depth of the bars, assuming a relatively flat shape

// Material for the bars (you can reuse the text material or create a new one)
const barMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

// Upper bar
const upperBarGeometry = new THREE.BoxGeometry(barWidth, barHeight, barDepth);
const upperBarMesh = new THREE.Mesh(upperBarGeometry, barMaterial);
upperBarMesh.position.x = textMesh.position.x + 0.57; // Adjust this value to position the bar above the text
upperBarMesh.position.y = textMesh.position.y + 0.05; // Adjust this value to position the bar above the text
upperBarMesh.rotation.z = -Math.PI / 8; // Annulla la rotazione del gruppo/ottagono
group.add(upperBarMesh);

// Lower bar
const lowerBarGeometry = new THREE.BoxGeometry(barWidth, barHeight, barDepth);
const lowerBarMesh = new THREE.Mesh(lowerBarGeometry, barMaterial);
lowerBarMesh.position.x = textMesh.position.x + 0.45; // Adjust this value to position the bar below the text
lowerBarMesh.position.y = textMesh.position.y - 0.25; // Adjust this value to position the bar below the text
lowerBarMesh.rotation.z = -Math.PI / 8; // Annulla la rotazione del gruppo/ottagono
group.add(lowerBarMesh);

// Make sure the bars are centered with respect to the text
// upperBarMesh.position.x = textMesh.position.x;
// lowerBarMesh.position.x = textMesh.position.x;

// Rotate the bars to align with the octagon if needed
// upperBarMesh.rotation.z = group.rotation.z;
// lowerBarMesh.rotation.z = group.rotation.z;

// -----------------------------------------------------------------------------trapezio
// Aggiustamenti per renderlo più evidente come trapezio
const upperWidth = barWidth - 0.2; // Rendi la larghezza superiore leggermente più stretta
const lowerWidth = barWidth - 0.1; // Rendi la larghezza inferiore leggermente più larga

const trapezoidShape = new THREE.Shape();
const trapezoidHeight = barHeight; // Utilizza l'altezza delle barre per l'altezza del trapezio

// Calcola l'offset da ciascun lato per la differenza di larghezza
const widthDifference = (lowerWidth - upperWidth) / 2;

// Punti per il trapezio, partendo dall'angolo in alto a sinistra e procedendo in senso orario
trapezoidShape.moveTo(-upperWidth / 2, trapezoidHeight / 2);
trapezoidShape.lineTo(upperWidth / 2, trapezoidHeight / 2);
trapezoidShape.lineTo(lowerWidth / 2, -trapezoidHeight / 2);
trapezoidShape.lineTo(-lowerWidth / 2, -trapezoidHeight / 2);
trapezoidShape.closePath();

// Parametri per l'estrusione
const extrudeSettings = {
    steps: 2,
    depth: 0.05, // Uguale alla 'height' del testo per mantenere la consistenza
    bevelEnabled: false, // Nessun smussamento per mantenere la forma netta
};

// Crea la geometria dell'estrusione
const trapezoidGeometry = new THREE.ExtrudeGeometry(trapezoidShape, extrudeSettings);

const trapezoidMesh = new THREE.Mesh(trapezoidGeometry, barMaterial);

// Posizionamento e rotazione
trapezoidMesh.position.set(+0.2, 0.5, 0); // Aggiusta questa posizione in base al layout desiderato
trapezoidMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il trapezio al gruppo
group.add(trapezoidMesh);
// -----------------------------------------------------------------------------trapezio FINE



    

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

