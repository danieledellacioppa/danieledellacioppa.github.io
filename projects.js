// Array dei progetti
const projects = [
    {
      nome: "Progetto 1",
      descrizione: "Descrizione del Progetto 1.",
      imageUrl: "https://danieledellacioppa.github.io/assets/images/esempio1.png",
      url: "http://linkalprogetto1.com"
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
                  <img src="${project.imageUrl}" alt="${project.nome}" class="card-img-top project-image">
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
  
  