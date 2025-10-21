/**
 * Sistema de Acessibilidade Simples - WCAG 2.1 AA
 * Experiência Prática IV
 */

// Variáveis globais
let currentFontSize = 1;
let darkMode = false;
let highContrast = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createAccessibilityControls();
    setupKeyboardNavigation();
    loadPreferences();
});

// Criar controles de acessibilidade
function createAccessibilityControls() {
    const controlsHTML = `
        <div class="accessibility-toolbar" role="toolbar" aria-label="Controles de Acessibilidade">
            <button id="toggle-dark-mode" title="Alternar modo escuro">🌙 Modo Escuro</button>
            <button id="toggle-contrast" title="Alternar alto contraste">🔆 Alto Contraste</button>
            <button id="increase-font" title="Aumentar fonte">A+</button>
            <button id="decrease-font" title="Diminuir fonte">A-</button>
        </div>
    `;
    
    // Adicionar após o skip-link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.insertAdjacentHTML('afterend', controlsHTML);
    }
    
    // Event listeners
    document.getElementById('toggle-dark-mode').onclick = toggleDarkMode;
    document.getElementById('toggle-contrast').onclick = toggleHighContrast;
    document.getElementById('increase-font').onclick = increaseFontSize;
    document.getElementById('decrease-font').onclick = decreaseFontSize;
}

// Modo escuro
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
    announceChange(darkMode ? 'Modo escuro ativado' : 'Modo escuro desativado');
}

// Alto contraste
function toggleHighContrast() {
    highContrast = !highContrast;
    document.body.classList.toggle('high-contrast', highContrast);
    localStorage.setItem('highContrast', highContrast);
    announceChange(highContrast ? 'Alto contraste ativado' : 'Alto contraste desativado');
}

// Aumentar fonte
function increaseFontSize() {
    if (currentFontSize < 1.5) {
        currentFontSize += 0.1;
        document.documentElement.style.fontSize = (currentFontSize * 16) + 'px';
        localStorage.setItem('fontSize', currentFontSize);
        announceChange('Fonte aumentada');
    }
}

// Diminuir fonte
function decreaseFontSize() {
    if (currentFontSize > 0.8) {
        currentFontSize -= 0.1;
        document.documentElement.style.fontSize = (currentFontSize * 16) + 'px';
        localStorage.setItem('fontSize', currentFontSize);
        announceChange('Fonte diminuída');
    }
}

// Navegação por teclado
function setupKeyboardNavigation() {
    // Navegação em dropdowns
    const dropdowns = document.querySelectorAll('.nav-dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const menu = this.nextElementSibling;
                if (menu) {
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
    
    // ESC para fechar dropdowns
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openMenus = document.querySelectorAll('.dropdown-menu');
            openMenus.forEach(menu => menu.style.display = 'none');
        }
    });
}

// Anunciar mudanças para leitores de tela
function announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Carregar preferências salvas
function loadPreferences() {
    // Carregar modo escuro
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        darkMode = true;
        document.body.classList.add('dark-mode');
    }
    
    // Carregar alto contraste
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    if (savedHighContrast) {
        highContrast = true;
        document.body.classList.add('high-contrast');
    }
    
    // Carregar tamanho da fonte
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseFloat(savedFontSize);
        document.documentElement.style.fontSize = (currentFontSize * 16) + 'px';
    }
}