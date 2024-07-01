// Array dei progetti
const projects = [
    {
      nome: "Jetpack Reactive Launcher",
      descrizione: "A Super Simple Launcher for Android devices with Jetpack Compose and Reactive Programming.",
      imageUrl: "https://github.com/danieledellacioppa/CLI-Launcher/blob/main/look.png?raw=true",
      url: "https://github.com/danieledellacioppa/CLI-Launcher"
    },
    {
      nome: "Android Remote Control",
      descrizione: "Turning an an Android device into an Android Remote Controller.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/remote.png",
      url: "https://github.com/danieledellacioppa/android-remote-control"
    },
    {
      nome: "QRify",
      descrizione: "A simple QR Code Generator and Scanner for Android devices.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/qr.png",
      url: "https://github.com/danieledellacioppa/LINKtoQR"
    },
    {
      nome: "DroidCast-Projector",
      descrizione: "A simple Android app to cast your device screen to another device.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/projector.png",
      url: "https://github.com/danieledellacioppa/DroidCast-Projector",
    },
    {
      nome: "DroidCast-Receiver",
      descrizione: "A simple Android app to receive the screen cast from another device.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/receiver.png",
      url: "https://github.com/danieledellacioppa/DroidCast-Receiver",
    },
  ];
  
  function displayProjects() {
    const projectsGrid = document.querySelector('#projects-grid');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-lg-4 col-md-6 project-card';

        projectCard.innerHTML = `
            <div class="card">
                <div class="image-frame">
                    <img src="${project.imageUrl}" alt="${project.nome}" class="card-img-top project-image">
                </div>
                <div class="card-body">
                    <h5 class="project-title">${project.nome}</h5>
                    <p class="project-description">${project.descrizione}</p>
                    <a href="${project.url}" class="btn btn-primary">Go to Project</a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

  
  window.addEventListener('load', displayProjects);
  
  