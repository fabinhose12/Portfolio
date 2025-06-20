
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
    // FUNCIONALIDADE 2: HEADER DINÂMICO AO ROLAR
    // ======================================================
    const body = document.body;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    // ======================================================
    // FUNCIONALIDADE 3: ROLAGEM SUAVE (SMOOTH SCROLL)
    // ======================================================
    const allInternalLinks = document.querySelectorAll('a[href^="#"]'); // Pega TODOS os links internos
    if (allInternalLinks.length > 0) {
        allInternalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ======================================================
    // FUNCIONALIDADE 4: SCROLL SPY (MENU ATIVO CONFORME A ROLAGEM)
    // ======================================================
    const sections = document.querySelectorAll('section[id]');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav-links a');

    if (sections.length > 0 && desktopNavLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -50% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    desktopNavLinks.forEach(link => {
                        link.classList.remove('active-link');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active-link');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // ======================================================
    // FUNCIONALIDADE 5: ANIMAÇÃO AO ROLAR (FADE-IN)
    // ======================================================
    const animatedElements = document.querySelectorAll('.fade-in-element');
    if (animatedElements.length > 0) {
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
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
            fadeInObserver.observe(element);
        });
    }

    // ======================================================
    // FUNCIONALIDADE 6: LÓGICA DO MENU MOBILE
    // ======================================================
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const mobileMenu = document.getElementById('mobile-nav');

    if (menuToggleButton && mobileMenu) {
        const closeMenuButton = mobileMenu.querySelector('.close-menu-button');
        const mobileMenuLinks = mobileMenu.querySelectorAll('nav a');

        menuToggleButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

});