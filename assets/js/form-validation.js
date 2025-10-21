/**
 * Validação de Formulários Simples - Experiência Prática III
 * Desenvolvimento Front-End Para Web
 * Sistema básico de verificação de consistência de dados
 */

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    initFormValidation();
});

/**
 * Inicializa validação de formulários
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Adiciona validação em tempo real nos campos
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Validação ao sair do campo
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Validação durante digitação (para alguns campos)
            if (input.type === 'email' || input.name === 'cpf' || input.name === 'telefone') {
                input.addEventListener('input', function() {
                    clearTimeout(this.validationTimeout);
                    this.validationTimeout = setTimeout(() => {
                        validateField(this);
                    }, 500);
                });
            }
        });
        
        // Validação no envio do formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
    
    console.log('✅ Validação de formulários ativada');
}

/**
 * Valida um campo individual
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let message = '';
    
    // Remove erros anteriores
    clearFieldError(field);
    
    // Campos obrigatórios
    if (field.required && !value) {
        isValid = false;
        message = 'Este campo é obrigatório';
    }
    
    // Validações específicas por tipo/nome
    if (value && isValid) {
        switch (fieldName) {
            case 'email':
                if (!isValidEmail(value)) {
                    isValid = false;
                    message = 'Digite um e-mail válido';
                }
                break;
                
            case 'cpf':
                if (!isValidCPF(value)) {
                    isValid = false;
                    message = 'Digite um CPF válido (xxx.xxx.xxx-xx)';
                }
                break;
                
            case 'telefone':
                if (!isValidPhone(value)) {
                    isValid = false;
                    message = 'Digite um telefone válido ((xx) xxxxx-xxxx)';
                }
                break;
                
            case 'cep':
                if (!isValidCEP(value)) {
                    isValid = false;
                    message = 'Digite um CEP válido (xxxxx-xxx)';
                }
                break;
                
            case 'data_nascimento':
                if (!isValidDate(value) || !isValidAge(value)) {
                    isValid = false;
                    message = 'Digite uma data válida (idade entre 16 e 120 anos)';
                }
                break;
        }
    }
    
    // Validação de confirmação de senha
    if (fieldName === 'confirmar_senha') {
        const senhaField = document.querySelector('input[name="senha"]');
        if (senhaField && value !== senhaField.value) {
            isValid = false;
            message = 'As senhas não coincidem';
        }
    }
    
    // Mostra erro ou sucesso
    if (!isValid) {
        showFieldError(field, message);
    } else if (value) {
        showFieldSuccess(field);
    }
    
    return isValid;
}

/**
 * Manipula envio do formulário
 */
function handleFormSubmit(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    let isFormValid = true;
    let firstErrorField = null;
    
    // Valida todos os campos
    inputs.forEach(input => {
        const isValid = validateField(input);
        if (!isValid && !firstErrorField) {
            firstErrorField = input;
            isFormValid = false;
        } else if (!isValid) {
            isFormValid = false;
        }
    });
    
    // Remove mensagens antigas
    removeFormMessages(form);
    
    if (isFormValid) {
        showFormSuccess(form);
        
        // Simula envio do formulário
        setTimeout(() => {
            form.reset();
            clearAllFieldStyles(form);
            removeFormMessages(form);
            alert('Cadastro realizado com sucesso! Entraremos em contato em breve.');
        }, 2000);
        
    } else {
        showFormError(form);
        
        // Foca no primeiro campo com erro
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }
}

/**
 * Mostra erro em um campo
 */
function showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');
    
    // Cria mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    
    // Insere após o campo
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

/**
 * Mostra sucesso em um campo
 */
function showFieldSuccess(field) {
    field.classList.add('success');
    field.classList.remove('error');
}

/**
 * Limpa erro de um campo
 */
function clearFieldError(field) {
    field.classList.remove('error', 'success');
    
    // Remove mensagem de erro existente
    const errorMsg = field.parentNode.querySelector('.field-error');
    if (errorMsg) {
        errorMsg.remove();
    }
}

/**
 * Mostra mensagem de sucesso do formulário
 */
function showFormSuccess(form) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message success';
    messageDiv.innerHTML = `
        <strong>✅ Sucesso!</strong> Seus dados foram enviados. Aguarde nosso contato.
    `;
    
    form.insertBefore(messageDiv, form.firstChild);
}

/**
 * Mostra mensagem de erro do formulário
 */
function showFormError(form) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message error';
    messageDiv.innerHTML = `
        <strong>❌ Erro!</strong> Por favor, corrija os campos destacados em vermelho.
    `;
    
    form.insertBefore(messageDiv, form.firstChild);
}

/**
 * Remove mensagens do formulário
 */
function removeFormMessages(form) {
    const messages = form.querySelectorAll('.form-message');
    messages.forEach(msg => msg.remove());
}

/**
 * Limpa estilos de todos os campos
 */
function clearAllFieldStyles(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        clearFieldError(input);
    });
}

// Funções de validação específicas

/**
 * Valida e-mail
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valida CPF
 */
function isValidCPF(cpf) {
    // Remove pontos e traços
    const cleanCPF = cpf.replace(/\D/g, '');
    
    // Verifica se tem 11 dígitos
    if (cleanCPF.length !== 11) return false;
    
    // Verifica se não são todos iguais
    if (/^(\d)\1+$/.test(cleanCPF)) return false;
    
    // Validação do algoritmo
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCPF[i]) * (10 - i);
    }
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanCPF[i]) * (11 - i);
    }
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;
    
    return firstDigit === parseInt(cleanCPF[9]) && secondDigit === parseInt(cleanCPF[10]);
}

/**
 * Valida telefone
 */
function isValidPhone(phone) {
    // Formato: (xx) xxxxx-xxxx ou (xx) xxxx-xxxx
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regex.test(phone);
}

/**
 * Valida CEP
 */
function isValidCEP(cep) {
    // Formato: xxxxx-xxx
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
}

/**
 * Valida data
 */
function isValidDate(date) {
    const dateObj = new Date(date);
    return !isNaN(dateObj.getTime());
}

/**
 * Valida idade (16 a 120 anos)
 */
function isValidAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age >= 16 && age <= 120;
}