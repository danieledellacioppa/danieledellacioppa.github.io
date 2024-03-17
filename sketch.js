function setup() {
    // Seleziona l'elemento DOM dove vuoi inserire il canvas
    let canvasDiv = document.getElementById('header11-3');
    // Crea un canvas p5.js che si adatta alla dimensione del div
    let cnv = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
    cnv.parent('header11-3'); // Assegna il canvas al div
}

function draw() {
    background(100); // Sfondo grigio
    // Qui puoi aggiungere il tuo disegno minimalista
    // Ad esempio, disegniamo un cerchio che segue il mouse
    fill(255, 204, 0); // Colore giallo
    noStroke(); // Nessun bordo
    ellipse(mouseX, mouseY, 50, 50); // Cerchio che segue il mouse
}
