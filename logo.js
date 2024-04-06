console.log("Il file del logo è stato avviato correttamente!");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x9bcc00, 1);
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
    
    // Materiale per il testo (grigio scuro)
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    
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
        const material = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material); // Questa è la linea mancante per creare l'oggetto mesh

        // Dopo aver creato l'ottagono, aggiungilo al gruppo anziché direttamente alla scena
        group.add(mesh);

// Dopo aver aggiunto l'ottagono preesistente al gruppo...

// Creazione di un nuovo ottagono più piccolo e grigio
const smallerRadius = radius * 0.9; // Rendi l'ottagono più piccolo
const smallerShape = new THREE.Shape();
for (let i = 0; i < 8; i++) {
    const angle = i * exteriorAngle;
    const x = smallerRadius * Math.cos(angle);
    const y = smallerRadius * Math.sin(angle);

    if (i === 0) {
        smallerShape.moveTo(x, y);
    } else {
        smallerShape.lineTo(x, y);
    }
}
smallerShape.closePath();

// Parametri per l'estrusione dell'ottagono più piccolo con maggiore profondità
const extrudeSettingsSmaller = {
    steps: 2,
    depth: 0.2, // Aumenta la profondità per rendere l'ottagono più piccolo più spesso
    bevelEnabled: false, // Disabilita lo smussamento per mantenere bordi netti
};

// Creazione della geometria estrusa per lo smallerShape con maggiore profondità
const smallerExtrudeGeometry = new THREE.ExtrudeGeometry(smallerShape, extrudeSettingsSmaller);

// Creazione del materiale per l'ottagono più piccolo (grigio chiaro)
const smallerExtrudeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

// Creazione del mesh per l'ottagono più piccolo estruso con maggiore profondità
const smallerExtrudeMesh = new THREE.Mesh(smallerExtrudeGeometry, smallerExtrudeMaterial);

// Posiziona l'ottagono più piccolo al centro dell'ottagono più grande
smallerExtrudeMesh.position.z =- 0.16 // Regola questa posizione se necessario per l'effetto visivo desiderato

// Aggiunta del nuovo ottagono più piccolo e con maggiore profondità al gruppo
group.add(smallerExtrudeMesh);


//creazione di un nuovo ottagono ancora più piccolo e grigio chiaro
const smallestRadius = radius * 0.91; // Rendi l'ottagono più piccolo
const smallestShape = new THREE.Shape();
for (let i = 0; i < 8; i++) {
    const angle = i * exteriorAngle;
    const x = smallestRadius * Math.cos(angle);
    const y = smallestRadius * Math.sin(angle);

    if (i === 0) {
        smallestShape.moveTo(x, y);
    } else {
        smallestShape.lineTo(x, y);
    }
}
smallestShape.closePath();

// Parametri per l'estrusione dell'ottagono più piccolo con maggiore profondità
const extrudeSettingsSmallest = {
    steps: 2,
    depth: 0.2, // Aumenta la profondità per rendere l'ottagono più piccolo più spesso
    bevelEnabled: false, // Disabilita lo smussamento per mantenere bordi netti
};

// Creazione della geometria estrusa per lo smallestShape con maggiore profondità
const smallestExtrudeGeometry = new THREE.ExtrudeGeometry(smallestShape, extrudeSettingsSmallest);

// Creazione del materiale per l'ottagono più piccolo (grigio chiarissimo)
const smallestExtrudeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });

// Creazione del mesh per l'ottagono più piccolo estruso con maggiore profondità
const smallestExtrudeMesh = new THREE.Mesh(smallestExtrudeGeometry, smallestExtrudeMaterial);

// Posiziona l'ottagono più piccolo al centro dell'ottagono più grande
smallestExtrudeMesh.position.z = -0.17 // Regola questa posizione se necessario per l'effetto visivo desiderato

// Aggiunta del nuovo ottagono più piccolo e con maggiore profondità al gruppo
group.add(smallestExtrudeMesh);



// Parametri per le barre
const barWidth = textWidth + 0.4; // Slightly wider than the text width
const barHeight = 0.05; // Thickness of the bars
const barDepth = 0.05; // Depth of the bars, assuming a relatively flat shape

// Material for the bars (you can reuse the text material or create a new one)
// colore delle barre (akhterColorMetalBar)
const barMaterial = new THREE.MeshBasicMaterial({ color: 0x839782 });

// Upper bar
const upperBarGeometry = new THREE.BoxGeometry(barWidth+0.3, barHeight, barDepth+0.05);
const upperBarMesh = new THREE.Mesh(upperBarGeometry, barMaterial);
upperBarMesh.position.x = textMesh.position.x + 0.62; // Adjust this value to position the bar above the text
upperBarMesh.position.y = textMesh.position.y + 0.20; // Adjust this value to position the bar above the text
upperBarMesh.rotation.z = -Math.PI / 8; // Annulla la rotazione del gruppo/ottagono
group.add(upperBarMesh);

// Lower bar
const lowerBarGeometry = new THREE.BoxGeometry(barWidth+0.3, barHeight, barDepth+0.05);
const lowerBarMesh = new THREE.Mesh(lowerBarGeometry, barMaterial);
lowerBarMesh.position.x = textMesh.position.x + 0.37; // Adjust this value to position the bar below the text
lowerBarMesh.position.y = textMesh.position.y - 0.44; // Adjust this value to position the bar below the text
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
trapezoidShape.moveTo(-upperWidth / 1.88, trapezoidHeight / 2.2);
trapezoidShape.lineTo(upperWidth / 1.88, trapezoidHeight / 2.2);
trapezoidShape.lineTo(lowerWidth / 1.88, -trapezoidHeight / 2.2);
trapezoidShape.lineTo(-lowerWidth / 1.88, -trapezoidHeight / 2.2);
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

const akhterColorMetalBar = 0x839782; // Colore personalizzato per le barre metalliche


const trapezoid2 = createTrapezoid(0.165, 0.4, 0, 1.24*upperWidth, 1.22*lowerWidth, 0.9*barHeight, 0.05, akhterColorMetalBar);
group.add(trapezoid2);

const trapezoid3 = createTrapezoid(0.23, 0.57, 0, 0.94*upperWidth, 0.94*lowerWidth, 0.8*barHeight, 0.05, akhterColorMetalBar);
group.add(trapezoid3);

const trapezoid4 = createTrapezoid(0.27, 0.64, 0, 0.82*upperWidth, 0.82*lowerWidth, 0.7*barHeight, 0.05, akhterColorMetalBar);
group.add(trapezoid4);

const trapezoid5 = createTrapezoid(0.29, 0.71, 0, 0.7*upperWidth, 0.71*lowerWidth, 0.6*barHeight, 0.05, akhterColorMetalBar);
group.add(trapezoid5);

const trapezoid6 = createTrapezoid(0.32, 0.78, 0, 0.59*upperWidth, 0.60*lowerWidth, 0.5*barHeight, 0.05, akhterColorMetalBar);
group.add(trapezoid6);

const primoTrapezioDalBasso = createTrapezoid(-0.182, -0.435, 0, 1.31*upperWidth, 1.13*lowerWidth, 1*barHeight, 0.05, akhterColorMetalBar);
group.add(primoTrapezioDalBasso);

// -----------------------------------------------------------------------------secondo trapezio dal basso

const secondoTrapezioDalBassoShape = new THREE.Shape();

// Puoi riutilizzare le stesse dimensioni o fare leggere modifiche
secondoTrapezioDalBassoShape.moveTo(-upperWidth / 1.75, trapezoidHeight / 2);
secondoTrapezioDalBassoShape.lineTo(upperWidth / 1.75, trapezoidHeight / 2);
secondoTrapezioDalBassoShape.lineTo(lowerWidth / 2.05, -trapezoidHeight / 2);
secondoTrapezioDalBassoShape.lineTo(-lowerWidth / 2.05, -trapezoidHeight / 2);
secondoTrapezioDalBassoShape.closePath();

const secondoTrapezioDalBassoGeometry = new THREE.ExtrudeGeometry(secondoTrapezioDalBassoShape, extrudeSettings);

const secondoTrapezioDalBassoMesh = new THREE.Mesh(secondoTrapezioDalBassoGeometry, barMaterial);

// Posizionamento del secondo trapezio dal basso un po' più in basso
// Modifica il valore di .y per regolare la distanza dal primo trapezio dal basso

secondoTrapezioDalBassoMesh.position.set(-0.22, -0.53, 0); // Aggiusta .y in base al layout desiderato
secondoTrapezioDalBassoMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il secondo trapezio dal basso al gruppo
group.add(secondoTrapezioDalBassoMesh);
// -----------------------------------------------------------------------------secondo trapezio dal basso FINE

// -----------------------------------------------------------------------------terzo trapezio dal basso

const terzoTrapezioDalBassoShape = new THREE.Shape();

// Puoi riutilizzare le stesse dimensioni o fare leggere modifiche
terzoTrapezioDalBassoShape.moveTo(-upperWidth / 2.02, trapezoidHeight / 3.1);
terzoTrapezioDalBassoShape.lineTo(upperWidth / 2.02, trapezoidHeight / 3.1);
terzoTrapezioDalBassoShape.lineTo(lowerWidth / 2.33, -trapezoidHeight / 3.1);
terzoTrapezioDalBassoShape.lineTo(-lowerWidth / 2.33, -trapezoidHeight / 3.1);
terzoTrapezioDalBassoShape.closePath();

const terzoTrapezioDalBassoGeometry = new THREE.ExtrudeGeometry(terzoTrapezioDalBassoShape, extrudeSettings);

const terzoTrapezioDalBassoMesh = new THREE.Mesh(terzoTrapezioDalBassoGeometry, barMaterial);

// Posizionamento del terzo trapezio dal basso un po' più in basso
// Modifica il valore di .y per regolare la distanza dal secondo trapezio dal basso

terzoTrapezioDalBassoMesh.position.set(-0.26, -0.60, 0); // Aggiusta .y in base al layout desiderato
terzoTrapezioDalBassoMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il terzo trapezio dal basso al gruppo
group.add(terzoTrapezioDalBassoMesh);
// -----------------------------------------------------------------------------terzo trapezio dal basso FINE

// -----------------------------------------------------------------------------quarto trapezio dal basso

const quartoTrapezioDalBassoShape = new THREE.Shape();

// Puoi riutilizzare le stesse dimensioni o fare leggere modifiche
quartoTrapezioDalBassoShape.moveTo(-upperWidth / 2.3, trapezoidHeight / 3.5);
quartoTrapezioDalBassoShape.lineTo(upperWidth / 2.3, trapezoidHeight / 3.5);
quartoTrapezioDalBassoShape.lineTo(lowerWidth / 2.65, -trapezoidHeight / 3.5);
quartoTrapezioDalBassoShape.lineTo(-lowerWidth / 2.65, -trapezoidHeight / 3.5);
quartoTrapezioDalBassoShape.closePath();

const quartoTrapezioDalBassoGeometry = new THREE.ExtrudeGeometry(quartoTrapezioDalBassoShape, extrudeSettings);

const quartoTrapezioDalBassoMesh = new THREE.Mesh(quartoTrapezioDalBassoGeometry, barMaterial);

// Posizionamento del quarto trapezio dal basso un po' più in basso
// Modifica il valore di .y per regolare la distanza dal terzo trapezio dal basso

quartoTrapezioDalBassoMesh.position.set(-0.27, -0.66, 0); // Aggiusta .y in base al layout desiderato
quartoTrapezioDalBassoMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il quarto trapezio dal basso al gruppo
group.add(quartoTrapezioDalBassoMesh);
// -----------------------------------------------------------------------------quarto trapezio dal basso FINE

// -----------------------------------------------------------------------------quinto trapezio dal basso

const quintoTrapezioDalBassoShape = new THREE.Shape();

// Puoi riutilizzare le stesse dimensioni o fare leggere modifiche
quintoTrapezioDalBassoShape.moveTo(-upperWidth / 2.6, trapezoidHeight / 4.5);
quintoTrapezioDalBassoShape.lineTo(upperWidth / 2.6, trapezoidHeight / 4.5);
quintoTrapezioDalBassoShape.lineTo(lowerWidth / 3, -trapezoidHeight / 4.5);
quintoTrapezioDalBassoShape.lineTo(-lowerWidth / 3, -trapezoidHeight / 4.5);
quintoTrapezioDalBassoShape.closePath();

const quintoTrapezioDalBassoGeometry = new THREE.ExtrudeGeometry(quintoTrapezioDalBassoShape, extrudeSettings);

const quintoTrapezioDalBassoMesh = new THREE.Mesh(quintoTrapezioDalBassoGeometry, barMaterial);

// Posizionamento del quinto trapezio dal basso un po' più in basso
// Modifica il valore di .y per regolare la distanza dal quarto trapezio dal basso

quintoTrapezioDalBassoMesh.position.set(-0.30, -0.71, 0); // Aggiusta .y in base al layout desiderato
quintoTrapezioDalBassoMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il quinto trapezio dal basso al gruppo
group.add(quintoTrapezioDalBassoMesh);
// -----------------------------------------------------------------------------quinto trapezio dal basso FINE

// -----------------------------------------------------------------------------sesto trapezio dal basso

const sestoTrapezioDalBassoShape = new THREE.Shape();

// Puoi riutilizzare le stesse dimensioni o fare leggere modifiche
sestoTrapezioDalBassoShape.moveTo(-upperWidth / 2.95, trapezoidHeight / 5.5);
sestoTrapezioDalBassoShape.lineTo(upperWidth / 2.95, trapezoidHeight / 5.5);
sestoTrapezioDalBassoShape.lineTo(lowerWidth / 3.35, -trapezoidHeight / 5.5);
sestoTrapezioDalBassoShape.lineTo(-lowerWidth / 3.35, -trapezoidHeight / 5.5);
sestoTrapezioDalBassoShape.closePath();

const sestoTrapezioDalBassoGeometry = new THREE.ExtrudeGeometry(sestoTrapezioDalBassoShape, extrudeSettings);

const sestoTrapezioDalBassoMesh = new THREE.Mesh(sestoTrapezioDalBassoGeometry, barMaterial);

// Posizionamento del sesto trapezio dal basso un po' più in basso
// Modifica il valore di .y per regolare la distanza dal quinto trapezio dal basso

sestoTrapezioDalBassoMesh.position.set(-0.32, -0.76, 0); // Aggiusta .y in base al layout desiderato
sestoTrapezioDalBassoMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

// Aggiungi il sesto trapezio dal basso al gruppo
group.add(sestoTrapezioDalBassoMesh);
// -----------------------------------------------------------------------------sesto trapezio dal basso FINE




    

            // Ruota il gruppo per allineare l'ottagono
    group.rotation.z = Math.PI / 8;
    
    scene.add(group); // Aggiunge il gruppo alla scena
});

function createTrapezoid(positionX, positionY, positionZ, upperWidth, lowerWidth, height, depth, color) {
    // Calcola l'offset da ciascun lato per la differenza di larghezza
    const widthDifference = (lowerWidth - upperWidth) / 2;
    const trapezoidShape = new THREE.Shape();

    // Punti per il trapezio, partendo dall'angolo in alto a sinistra e procedendo in senso orario
    trapezoidShape.moveTo(-upperWidth / 2, height / 2);
    trapezoidShape.lineTo(upperWidth / 2, height / 2);
    trapezoidShape.lineTo(lowerWidth / 2, -height / 2);
    trapezoidShape.lineTo(-lowerWidth / 2, -height / 2);
    trapezoidShape.closePath();

    // Parametri per l'estrusione
    const extrudeSettings = {
        steps: 2,
        depth: depth, // Usa il parametro depth
        bevelEnabled: false, // Nessun smussamento per mantenere la forma netta
    };

    // Crea la geometria dell'estrusione e il mesh
    const trapezoidGeometry = new THREE.ExtrudeGeometry(trapezoidShape, extrudeSettings);
    const trapezoidMaterial = new THREE.MeshBasicMaterial({ color: color });
    const trapezoidMesh = new THREE.Mesh(trapezoidGeometry, trapezoidMaterial);

    // Posizionamento e rotazione
    trapezoidMesh.position.set(positionX, positionY, positionZ);
    trapezoidMesh.rotation.z = -Math.PI / 8; // Ruota per allineare orizzontalmente

    return trapezoidMesh;
}

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

