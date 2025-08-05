// Preloader mais suave
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500);
    }, 2500);
});

// Spotlight melhorado
const inicioSection = document.querySelector('html');
const spotlight = document.createElement('div');
spotlight.classList.add('spotlight');
document.body.appendChild(spotlight);

let spotlightTimeout;
document.addEventListener('mousemove', (e) => {
    clearTimeout(spotlightTimeout);
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
    spotlight.style.opacity = '0.7';
    
    spotlightTimeout = setTimeout(() => {
        spotlight.style.opacity = '0';
    }, 1000);
});

document.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
});

// Navegação suave
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Atualiza a classe ativa após a rolagem
            setTimeout(() => {
                document.querySelectorAll('nav ul li').forEach(item => {
                    item.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }, 1000);
        }
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Verifica a posição de rolagem para destacar a seção ativa
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Efeitos de digitação
function setupTypewriterEffects() {
    const elements = document.querySelectorAll('.glitch-text, .timeline-content h3');
    
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let i = 0;
                const speed = 30 + Math.random() * 70;
                
                function typeWriter() {
                    if (i < text.length) {
                        el.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    }
                }
                
                typeWriter();
                observer.unobserve(el);
            }
        });
        
        observer.observe(el);
    });
}

// Matriz de código melhorada
function createCodeMatrix() {
    const matrixContainer = document.querySelector('.code-matrix');
    if (!matrixContainer) return;
    
    matrixContainer.innerHTML = '';
    
    // Cria caracteres aleatórios que caem
    for (let i = 0; i < 30; i++) {
        const char = document.createElement('div');
        char.textContent = String.fromCharCode(48 + Math.random() * 74);
        char.style.position = 'absolute';
        char.style.left = `${Math.random() * 100}%`;
        char.style.top = '-20px';
        char.style.color = `rgba(219, 21, 21, ${0.5 + Math.random() * 0.5})`;
        char.style.fontSize = `${12 + Math.random() * 8}px`;
        char.style.fontFamily = '"IBM Plex Mono", monospace';
        char.style.animation = `code-rain ${2 + Math.random() * 3}s linear infinite`;
        char.style.animationDelay = `${Math.random() * 2}s`;
        
        matrixContainer.appendChild(char);
    }
}

// Inicializa quando a página carrega
window.addEventListener('load', () => {
    setTimeout(() => {
        setupTypewriterEffects();
        createCodeMatrix();
        
        // Efeito de digitação para o texto heroico
        const glitchText = document.querySelector('.glitch-text');
        if (glitchText) {
            const originalText = glitchText.textContent;
            glitchText.textContent = '';
            
            let i = 0;
            const typing = setInterval(() => {
                if (i < originalText.length) {
                    glitchText.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }
    }, 3500);
});

// Animação para elementos quando entram na viewport
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.philosophy-card, .timeline-item').forEach(el => {
    animateOnScroll.observe(el);
});