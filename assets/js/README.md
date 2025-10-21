# Experiência Prática III - JavaScript Interativo ✅

## 📋 Sobre a Implementação

Esta é a **Experiência Prática III** da disciplina de **Desenvolvimento Front-End Para Web**, implementando JavaScript para tornar a interface dinâmica e interativa com manipulação do DOM e validação de formulários.

## 🎯 Objetivos Atendidos

### ✅ **Manipulação do DOM**
- **JavaScript Básico**: Funcionalidades simples e práticas
- **Interatividade**: Click em cards, navegação suave, menu mobile
- **Elementos Dinâmicos**: Criação e manipulação de elementos via JavaScript

### ✅ **Funcionalidades Específicas**
- **Validação de Formulários**: Sistema de verificação com avisos ao usuário
- **Feedback Visual**: Estados de erro e sucesso em tempo real
- **Navegação Suave**: Scroll suave para âncoras internas
- **Botão "Voltar ao Topo"**: Aparece dinamicamente durante scroll

## 📁 Estrutura JavaScript Modular

```
assets/js/
├── main.js              ✅ Funcionalidades principais
└── form-validation.js   ✅ Sistema de validação de formulários
```

### 🎯 **main.js** - Funcionalidades Principais
- **Menu Mobile**: Controle CSS + JavaScript para melhor UX
- **Navegação Suave**: Scroll suave para links internos
- **Cards Interativos**: Click nos cards de projetos com feedback
- **Botão Voltar ao Topo**: Criado dinamicamente via JavaScript

### 🎯 **form-validation.js** - Validação de Formulários
- **Validação em Tempo Real**: Durante digitação e ao sair do campo
- **Múltiplas Validações**: E-mail, CPF, telefone, CEP, data de nascimento
- **Feedback Visual**: Estados de erro/sucesso com mensagens claras
- **Máscaras de Input**: Formatação automática para CPF, telefone, CEP
- **Validação de Consistência**: Idade, confirmação de senha

## 🛠️ Funcionalidades Implementadas

### **1. Manipulação DOM Básica**
```javascript
// Criação dinâmica de elementos
const button = document.createElement('button');
document.body.appendChild(button);

// Modificação de estilos via JavaScript
element.style.display = 'block';
element.classList.add('active');
```

### **2. Eventos e Interatividade**
```javascript
// Event listeners para interação
card.addEventListener('click', function() {
    alert('Projeto clicado!');
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
});
```

### **3. Validação de Formulários**
```javascript
// Validação em tempo real
input.addEventListener('blur', function() {
    validateField(this);
});

// Feedback visual imediato
field.classList.add('error');
showFieldError(field, 'Mensagem de erro');
```

### **4. Funcionalidades de UX**
```javascript
// Botão voltar ao topo dinâmico
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        showBackToTopButton();
    }
});
```

## 🎨 Estilos JavaScript

### **Validação Visual de Campos**
- **Campo Válido**: Borda verde + ícone de sucesso
- **Campo Inválido**: Borda vermelha + mensagem de erro
- **Mensagens Contextuais**: Explicam exatamente o problema

### **Estados Dinâmicos**
- **Loading States**: Feedback durante processamento
- **Hover Effects**: Melhorados com JavaScript
- **Focus Management**: Foco automático em campos com erro

## 📋 Validações Implementadas

### **E-mail**
- Formato válido com regex
- Validação em tempo real

### **CPF**
- Máscara automática: xxx.xxx.xxx-xx
- Validação do algoritmo do CPF
- Verificação de dígitos verificadores

### **Telefone**
- Máscara automática: (xx) xxxxx-xxxx
- Suporte para celular e fixo

### **CEP**
- Máscara automática: xxxxx-xxx
- Validação de formato

### **Data de Nascimento**
- Validação de idade (16 a 120 anos)
- Formato de data válido

### **Confirmação de Senha**
- Verifica se as senhas coincidem
- Validação cruzada entre campos

## 🚀 Como Funciona

### **1. Inicialização Automática**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Todas as funcionalidades são inicializadas automaticamente
    initFormValidation();
    initMobileMenu();
    initSmoothScroll();
});
```

### **2. Feedback Imediato**
- **Durante Digitação**: Validação com delay para melhor UX
- **Ao Sair do Campo**: Validação completa imediata
- **No Envio**: Validação de todo o formulário

### **3. Experiência do Usuário**
- **Mensagens Claras**: Explicam exatamente o que corrigir
- **Estados Visuais**: Verde para sucesso, vermelho para erro
- **Foco Inteligente**: Vai automaticamente para campos com erro

## 📱 Responsividade

- **Menu Mobile**: Funciona em conjunto com CSS checkbox hack
- **Touch Events**: Otimizado para dispositivos móveis
- **Viewport Adaptation**: Ajustes automáticos para diferentes telas

## 🎯 Resultado Final

**Sistema JavaScript simples, funcional e educativo que demonstra:**

✅ **Manipulação DOM**: Criação e modificação de elementos  
✅ **Event Handling**: Captura e processamento de eventos  
✅ **Validação de Dados**: Sistema robusto de verificação  
✅ **Feedback Visual**: Estados claros para o usuário  
✅ **Código Limpo**: Organizado e bem documentado  
✅ **Performance**: Leve e eficiente  

**Perfeito para demonstrar conhecimento de JavaScript fundamentals sem over-engineering!**

---

**Implementado para:** Experiência Prática III - Desenvolvimento Front-End Para Web  
**Foco:** JavaScript DOM + Validação de Formulários  
**Data:** Outubro 2025