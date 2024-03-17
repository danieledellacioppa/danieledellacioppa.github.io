function setup() {
    let canvasDiv = document.getElementById('header11-3');
    let cnv = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
    cnv.parent('header11-3');
}

function draw() {
    background(100);
    // Disegna un elemento cliccabile
    fill(155, 204, 0); // Giallo
    ellipse(width / 2, height / 2, 300, 300); // Cerchio al centro

    // Disegna un elemento cliccabile
    fill(255, 204, 0); // Giallo
    noStroke();
    ellipse(mouseX,mouseY, 100, 100); // Cerchio al centro

}

function mousePressed() {
    // Calcola la distanza tra il punto di clic e il centro del cerchio
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    // Se il clic è all'interno del cerchio...
    if (d < 50) {
        // ...esegui un'azione, ad esempio apri un link
        window.open("https://esempio.com", "_blank");
    }
}

