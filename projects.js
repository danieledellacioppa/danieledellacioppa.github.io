// Array dei progetti
const projects = [
    {
      nome: "Jetpack Reactive Launcher",
      descrizione: "A Super Simple Launcher for Android devices with Jetpack Compose and Reactive Programming.",
      imageUrl: "https://github.com/danieledellacioppa/CLI-Launcher/blob/main/look.png",
      url: "https://github.com/danieledellacioppa/CLI-Launcher"
    },
    {
      nome: "Progetto 2",
      descrizione: "Descrizione del Progetto 2.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/esempio2.png",
      url: "http://linkalprogetto2.com"
    },
    // Altri progetti...
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
                    <a href="${project.url}" class="btn btn-primary">Vedi Progetto</a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

  
  window.addEventListener('load', displayProjects);
  
  