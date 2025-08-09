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
    link.addEventListener('click', function (e) {
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

// Configuração dos cards flip
function setupSpecialtyCards() {
    const cards = document.querySelectorAll('.arsenal-card');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Impede que o clique se propague para o documento
            e.stopPropagation();

            // Verifica se o clique foi em um link dentro do card
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                return;
            }

            // Fecha outros cartões abertos
            cards.forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('flipped')) {
                    otherCard.classList.remove('flipped');
                }
            });

            // Alterna o estado do cartão clicado
            this.classList.toggle('flipped');
        });
    });

    // Fecha cartões ao clicar fora
    document.addEventListener('click', function () {
        cards.forEach(card => {
            card.classList.remove('flipped');
        });
    });
}

// Inicializa quando a página carrega
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        setupSpecialtyCards();
    }, 500);
});

// Inicializa quando a página carrega
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        setupSpecialtyCards();
    }, 500);
});

// Inicializa quando a página carrega
window.addEventListener('load', () => {
    setTimeout(() => {
        setupSpecialtyCards();
    }, 3500);
});

// Adicione esta função junto com as outras
function animateCaseCards() {
    const caseCards = document.querySelectorAll('.case-card');

    const caseObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 150 * index);
            }
        });
    }, { threshold: 0.1 });

    caseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        caseObserver.observe(card);
    });
}

// E atualize o event listener de load para incluir a nova função
window.addEventListener('load', () => {
    setTimeout(() => {
        setupTypewriterEffects();
        createCodeMatrix();
        setupSpecialtyCards();
        animateCaseCards();

        // ... restante do código existente ...
    }, 3500);
});

document.addEventListener('DOMContentLoaded', function () {
    // Animação para os itens do currículo
    const resumeItems = document.querySelectorAll('.resume-item, .skill-item, .language-item');

    const resumeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100 * index);
            }
        });
    }, { threshold: 0.1 });

    resumeItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        resumeObserver.observe(item);
    });
});

// Atualize o event listener de load para incluir a nova função
window.addEventListener('load', () => {
    setTimeout(() => {
        setupTypewriterEffects();
        createCodeMatrix();
        setupSpecialtyCards();
        animateCaseCards();

        // Adicione esta linha para animar os itens do currículo
        document.querySelectorAll('.resume-item, .skill-item, .language-item').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 3500);
});

// Anima as barras de habilidade quando entram na viewport
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-level');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('style').match(/\d+/)[0];
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = `${level}%`;
                    entry.target.setAttribute('data-level', `${level}%`);
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
};

// Adicione ao evento load
window.addEventListener('load', () => {
    setTimeout(() => {
        animateSkillBars();
    }, 3500);
});

// Efeito de digitação para o título do currículo
const animateResumeTitle = () => {
    const title = document.querySelector('.resume-title h1');
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';

    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
};

document.addEventListener('DOMContentLoaded', animateResumeTitle);

// Anima as barras de proficiência de idiomas
function animateLanguageBars() {
    const proficiencyBars = document.querySelectorAll('.proficiency-bar');

    proficiencyBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const levelElement = bar.querySelector('.proficiency-level');

        // Reset para animação
        levelElement.style.width = '0';

        setTimeout(() => {
            levelElement.style.width = `${level}%`;
        }, 100);
    });
}

// Observador de interseção para animar quando a seção é visualizada
const languageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateLanguageBars();
            languageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Ativa quando a página carrega
window.addEventListener('load', () => {
    const languagesSection = document.querySelector('.languages-container');
    if (languagesSection) {
        languageObserver.observe(languagesSection);
    }
});

// Efeito de hover nos cartões de idioma
function setupLanguageCards() {
    const languageCards = document.querySelectorAll('.language-card');

    languageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const flag = card.querySelector('.language-flag');
            flag.style.transform = 'scale(1.2) rotate(5deg)';
            flag.style.filter = 'drop-shadow(0 0 8px rgba(219, 21, 21, 0.7))';
        });

        card.addEventListener('mouseleave', () => {
            const flag = card.querySelector('.language-flag');
            flag.style.transform = 'scale(1) rotate(0)';
            flag.style.filter = 'drop-shadow(0 0 5px rgba(219, 21, 21, 0.5))';
        });
    });
}

document.addEventListener('DOMContentLoaded', setupLanguageCards);

// Formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de envio
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria elemento de sucesso
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✓</div>
            <h3>Mensagem Enviada!</h3>
            <p>Obrigado, ${nome}. Retornarei em breve para ${email}.</p>
        </div>
    `;

    // Substitui o formulário pela mensagem
    const formContainer = document.querySelector('.contato-form');
    formContainer.innerHTML = '';
    formContainer.appendChild(successMsg);

    // Animação
    setTimeout(() => {
        successMsg.style.opacity = '1';
        successMsg.style.transform = 'translateY(0)';
    }, 10);

    // Você pode adicionar aqui o código real para enviar o formulário
    // Ex: usando Fetch API para enviar para um servidor
});

// Adicione este estilo para a mensagem de sucesso
const successStyle = document.createElement('style');
successStyle.textContent = `
.success-message {
    background: rgba(15, 15, 15, 0.9);
    padding: 40px;
    border-radius: 10px;
    border-left: 3px solid #2ecc71;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.success-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.success-icon {
    font-size: 3rem;
    color: #2ecc71;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(46, 204, 113, 0.1);
    border: 2px solid #2ecc71;
}

.success-message h3 {
    font-family: "IBM Plex Mono", monospace;
    color: white;
    margin-bottom: 10px;
    font-size: 1.5rem;
}

.success-message p {
    color: #ccc;
    font-family: "IBM Plex Sans", sans-serif;
    line-height: 1.6;
}
`;
document.head.appendChild(successStyle);