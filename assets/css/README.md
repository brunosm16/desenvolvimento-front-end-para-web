# Documentação Técnica CSS - Experiência Prática II

## 📋 Estrutura CSS Modular

### 🎨 Design System (design-system.css)
**15+ Cores Organizadas:**
- **Primárias**: 5 tons de azul esperança (#0066cc)
- **Secundárias**: 3 tons de verde solidariedade (#00b366)  
- **Apoio**: Laranja energia + Roxo inovação
- **Neutras**: 10 tons de cinza (50-900)
- **Status**: Success, Warning, Error, Info

**10 Tamanhos de Fonte:**
- xs (12px) → 6xl (60px) com escala harmônica
- 3 famílias: Inter (sans), Playfair Display (serif), JetBrains Mono

**Sistema de Espaçamento:**
- Base 8px: 0, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

### 🏗️ Base Styles (base.css)
**Reset CSS Personalizado:**
- Box-sizing border-box global
- Smooth scroll nativo
- Fonte antialiasing otimizado

**Grid System 12 Colunas:**
- Classes responsivas: .grid-cols-{1-12}
- Breakpoints: sm, md, lg, xl
- Gap system modular

**Utilitários Flexbox:**
- .flex, .flex-col, .items-center, .justify-between, etc.

### 🧩 Componentes (components.css)
**Sistema de Botões:**
- 4 variantes: primary, secondary, outline, tertiary
- 3 tamanhos: sm, base, lg  
- Estados completos: hover, focus, active, disabled
- Animações de micro-interação

**Cards Responsivos:**
- .card base com hover effects
- .projeto-card especializado
- .meta-item para estatísticas
- Shadows e transitions profissionais

**Sistema de Badges:**
- 5 categorias de status
- Cores coordenadas com design system

**Formulários Estilizados:**
- Validação visual nativa HTML5
- Estados focus com outline accessibility
- Fieldsets e legends estilizados
- Checkboxes customizados

### 🧭 Navegação (navigation.css)
**Menu Desktop:**
- Navegação horizontal com dropdown
- Hover effects e active states
- Underlining animations

**Menu Mobile (CSS Puro):**
- **Checkbox Hack**: Input invisível controla estado do menu
- Hambúrguer animado (3 barras → X) sem JavaScript
- Slide-in menu com backdrop usando CSS transitions
- Labels como botões para controle do checkbox
- 100% CSS - sem dependência de JavaScript

**Acessibilidade:**
- Skip links para navegação por teclado
- ARIA labels adequados
- Focus management

### 📐 Layouts (layouts.css)
**Layout de Página:**
- CSS Grid: header → main → aside → footer
- Responsivo: mobile stack, desktop sidebar

**Seção Hero:**
- Gradient background avançado  
- Grid 2 colunas responsivo
- Call-to-action buttons

**Grid de Projetos:**
- Auto-fit minmax(350px, 1fr)
- Cards com hover transforms
- Fallback para mobile < 400px

**Estatísticas:**
- Grid responsivo com auto-fit
- Hover animations translateY(-4px)
- Box-shadows escalonados

### 👥 Footer (footer.css)
**Layout Complexo:**
- Grid 4 colunas → 1 coluna mobile
- Newsletter integrada
- Social media links estilizados
- Informações de contato organizadas

### 📱 Responsividade Completa

**6 Breakpoints Definidos:**
- xs: 480px (Extra small)
- sm: 640px (Small devices)  
- md: 768px (Medium/tablets)
- lg: 1024px (Large/laptops)
- xl: 1280px (Extra large)
- 2xl: 1536px (Ultra wide)

**Mobile-First Approach:**
- Base styles para mobile
- Progressive enhancement
- Performance otimizada

## 🎯 Recursos Técnicos Avançados

### Animações CSS:
- Keyframes: fadeInUp, pulse
- Transitions consistentes (150ms, 250ms, 350ms)
- Transform effects em hover
- Smooth scroll behavior

### Performance:
- CSS minificado via imports
- Variáveis CSS para reutilização
- Seletores otimizados
- Print styles incluídos

### Acessibilidade:
- Contraste adequado (WCAG 2.1 AA)
- Focus indicators visíveis
- Skip navigation
- Screen reader friendly

### Estados Interativos:
- :hover com feedback visual
- :focus com outline accessibility
- :active para pressed states  
- :disabled com visual feedback

### 🔧 Como Usar

1. **Importação Principal:**
   ```html
   <link rel="stylesheet" href="assets/css/style.css">
   ```

2. **Menu Mobile CSS-Only:**
   ```html
   <!-- Checkbox invisível -->
   <input type="checkbox" id="mobile-menu-toggle" class="mobile-menu-toggle-checkbox">
   
   <!-- Label como botão hambúrguer -->
   <label for="mobile-menu-toggle" class="menu-toggle">
     <span class="hamburger"></span>
   </label>
   
   <!-- Menu que aparece quando checkbox marcado -->
   <div class="mobile-menu">...</div>
   ```

3. **Classes Utilitárias:**
   ```html
   <div class="container grid grid-cols-2 gap-6">
   <button class="btn btn-primary btn-lg">
   <div class="card hover-effect">
   ```

4. **Componentes:**
   ```html
   <div class="projeto-card">
   <span class="badge badge-primary">
   <div class="alert alert-success">
   ```

Esta estrutura CSS modular garante manutenibilidade, escalabilidade e performance otimizada para a plataforma do Instituto Esperança Solidária.