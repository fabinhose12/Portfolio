// Aguarda o HTML da página ser completamente carregado antes de executar qualquer script.
document.addEventListener('DOMContentLoaded', function() {

    console.log("Portfólio de Fabio Echenique - Scripts iniciados.");

    // ======================================================
    // FUNCIONALIDADE 1: PLAYER DE VÍDEO NOS PROJETOS
    // ======================================================
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

    // ======================================================
    // FUNCIONALIDADE 2: ROLAGEM SUAVE (SMOOTH SCROLL)
    // ======================================================
    console.log("Procurando por links de navegação para rolagem suave...");
    const internalLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    // Esta linha nos dirá quantos links o script encontrou.
    console.log(`- Encontrados ${internalLinks.length} links para rolagem suave.`);

    if (internalLinks.length > 0) {
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Previne o comportamento padrão de pular instantaneamente
                e.preventDefault();

                const targetId = this.getAttribute('href');
                console.log(`- Link clicado! Tentando rolar para: ${targetId}`);
                
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Rola suavemente até o elemento
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`- Alvo não encontrado para o ID: ${targetId}`);
                }
            });
        });
    }

    // ======================================================
    // FUNCIONALIDADE 3: HEADER DINÂMICO AO ROLAR
    // ======================================================
    const body = document.body;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
// Adicione este bloco de código dentro do seu listener DOMContentLoaded

// ======================================================
// FUNCIONALIDADE 5: SCROLL SPY (MENU ATIVO CONFORME A ROLAGEM)
// ======================================================
const sections = document.querySelectorAll('section[id]'); // Pega todas as seções que têm um ID
const navLinks = document.querySelectorAll('.nav-links a');

// Opções para o Intersection Observer:
// O link se tornará ativo quando a seção estiver a 100px do topo da tela
// e deixará de ser ativo quando sair da área visível.
const observerOptions = {
    root: null, // Observa em relação à viewport
    rootMargin: '-100px 0px -50% 0px', // [top, right, bottom, left]
    threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se a seção está visível na tela (de acordo com o rootMargin)
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            // Remove a classe ativa de todos os links
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            
            // Adiciona a classe ativa ao link correspondente à seção visível
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }
    });
}, observerOptions);

// Diz ao observer para "vigiar" cada uma das seções
sections.forEach(section => {
    observer.observe(section);
});
    // Adicione este bloco dentro do seu listener DOMContentLoaded

// ======================================================
// FUNCIONALIDADE 6: ANIMAÇÃO AO ROLAR (FADE-IN)
// ======================================================
const animatedElements = document.querySelectorAll('.fade-in-element');

if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está na tela
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação CSS
                entry.target.classList.add('is-visible');
                // Opcional: para de observar o elemento depois que a animação acontece
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    // Diz ao observer para vigiar cada um dos nossos elementos
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
}); // Fim do 'DOMContentLoaded'