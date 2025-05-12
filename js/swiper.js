const projects = [
    {
      id: 1,
      nom: 'WeWantAll',
      description: "Création d'un site vitrine pour une marque de vetements",
      techno: "Symfony, CSS, HTML, Twig, SQL, UIkit",
      link: "https://github.com/BakiBacci/WWA"
    },
    {
      id: 2,
      nom: 'Portfolio de Julio',
      description: "Création d'un portfolio pour un ami artiste",
      techno: "Framework Vue.js ",
      link: "https://github.com/BakiBacci/Julio-"
    },
    {
      id: 3,
      nom: 'lumi-design',
      description: "Création d'un site vitrine pour un marque de luminaires",
      techno: "Framework Symfony",
      link: "https://github.com/BakiBacci/lumi_design"
    }
   


  ];





const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });



  
  const swiperWrapper = document.querySelector('.swiper-wrapper');
projects.forEach(project => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <div class="slide-content">
      <h3>${project.nom}</h3>
      <p>${project.description}</p>
      <p><strong>Technologies :</strong> ${project.techno}</p>
      <a href="${project.link}" target="_blank" class="project-link">Voir le projet</a>
    </div>
  `;
  swiperWrapper.appendChild(slide);
});

