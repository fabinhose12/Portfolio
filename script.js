
document.addEventListener('DOMContentLoaded', function() {

    console.log("Portfólio de Fabio Echenique - Scripts iniciados.");


    const projectLinks = document.querySelectorAll('.project-link');
    if (projectLinks.length > 0) {
        projectLinks.forEach(link => {
            const video = link.querySelector('video');
            if (video) {
                link.addEventListener('mouseenter', () => video.play());
                link.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0;
                });
            }
        });
    }

    console.log("Procurando por links de navegação para rolagem suave...");
    const internalLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
  
    console.log(`- Encontrados ${internalLinks.length} links para rolagem suave.`);

    if (internalLinks.length > 0) {
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
               
                e.preventDefault();

                const targetId = this.getAttribute('href');
                console.log(`- Link clicado! Tentando rolar para: ${targetId}`);
                
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                 
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`- Alvo não encontrado para o ID: ${targetId}`);
                }
            });
        });
    }

    const body = document.body;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

// ======================================================
const sections = document.querySelectorAll('section[id]'); 
const navLinks = document.querySelectorAll('.nav-links a');


const observerOptions = {
    rootMargin: '-100px 0px -50% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    });
}, observerOptions);


sections.forEach(section => {
    observer.observe(section);
});
   


const animatedElements = document.querySelectorAll('.fade-in-element');

if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
              
                entry.target.classList.add('is-visible');
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

 
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
}); 