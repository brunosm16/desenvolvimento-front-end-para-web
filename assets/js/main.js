/**
 * JavaScript Simples - Experiência Prática III
 * Desenvolvimento Front-End Para Web
 * Funcionalidades básicas de manipulação DOM
 */

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado!');
    
    // Inicializa funcionalidades simples
    initMobileMenu();
    initSmoothScroll();
    initCardClick();
    
    console.log('Funcionalidades ativadas');
});

/**
 * Funcionalidade do Menu Mobile
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    const body = document.body;

    if (mobileToggle) {
        // Quando o checkbox muda de estado
        mobileToggle.addEventListener('change', function() {
            if (this.checked) {
                // Menu aberto
                body.style.overflow = 'hidden'; // Impede scroll do body
                console.log('📱 Menu mobile aberto');
            } else {
                // Menu fechado
                body.style.overflow = '';
                console.log('📱 Menu mobile fechado');
            }
        });

        // Fecha menu ao clicar no backdrop
        if (backdrop) {
            backdrop.addEventListener('click', function() {
                mobileToggle.checked = false;
                body.style.overflow = '';
            });
        }

        // Fecha menu ao pressionar ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileToggle.checked) {
                mobileToggle.checked = false;
                body.style.overflow = '';
            }
        });
    }
}

/**
 * Navegação Suave (Smooth Scrolling)
 */
function initSmoothScroll() {
    // Seleciona todos os links internos (âncoras)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Fecha o menu mobile se estiver aberto
                const mobileToggle = document.getElementById('mobile-menu-toggle');
                if (mobileToggle && mobileToggle.checked) {
                    mobileToggle.checked = false;
                    document.body.style.overflow = '';
                }
                
                // Scroll suave até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                console.log(`🔗 Navegando para: #${targetId}`);
            }
        });
    });
}

/**
 * Click simples nos cards
 */
function initCardClick() {
    const projectCards = document.querySelectorAll('.projeto-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3')?.textContent || 'Projeto';
            alert(`Você clicou no projeto: ${title}\n\nEm uma aplicação real, isso abriria mais detalhes sobre o projeto.`);
        });
    });
}

// Inicializa funcionalidade simples de "Voltar ao Topo"
window.addEventListener('scroll', function() {
    // Cria botão se não existir
    let backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'back-to-top';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #0066cc;
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            z-index: 100;
        `;
        document.body.appendChild(backToTopBtn);
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Mostra/esconde baseado no scroll
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});