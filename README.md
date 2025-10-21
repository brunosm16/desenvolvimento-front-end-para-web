# Experiência Prática I - Desenvolvimento Front-End Para Web
## Instituto Esperança Solidária - Plataforma para ONGs

### 📋 Resumo da Entrega

Este projeto atende às especificações da **Experiência Prática I**, focando na aplicação dos fundamentos de HTML5 para criar uma base estrutural sólida para uma plataforma completa de ONGs.

### 🎯 Objetivos Atendidos

- ✅ **Estrutura HTML5 Semântica Completa**: Implementação de 3 páginas com estrutura semântica avançada
- ✅ **Hierarquia de Títulos**: Aplicação lógica e consistente em todas as páginas
- ✅ **Formulários Complexos**: Sistema completo de cadastro com validações HTML5 nativas
- ✅ **Validação Nativa**: Atributos HTML5 para validação de campos
- ✅ **Agrupamento Lógico**: Uso de fieldsets e organização estrutural
- ✅ **Máscaras de Input**: Patterns HTML5 para CPF, telefone e CEP

### 📁 Estrutura do Projeto

```
desenvolvimento-front-end-para-web/
├── index.html              # Página inicial da organização
├── projetos.html           # Projetos sociais, voluntariado e doações
├── cadastro.html           # Formulário de cadastro de voluntários
├── assets/
│   ├── images/             # Imagens otimizadas
│   │   └── README.md       # Documentação das imagens
│   ├── css/               # (Preparado para futuras entregas)
│   └── js/                # (Preparado para futuras entregas)
└── README.md              # Este arquivo
```

### 📄 Páginas Implementadas

#### 1. **index.html** - Página Inicial
- **Conteúdo**: Informações sobre a organização, missão, visão, valores
- **Seções**: Hero, Sobre, Impacto, Equipe, Contato
- **Elementos Semânticos**: header, nav, main, section, article, aside, footer
- **Imagens**: Logo, hero, missão, visão, valores, equipe, impacto

#### 2. **projetos.html** - Projetos Sociais
- **Conteúdo**: Projetos em andamento, voluntariado, formas de doação
- **Seções**: Projetos ativos, áreas de voluntariado, doações, transparência
- **Elementos Avançados**: details/summary, figure/figcaption, address
- **Imagens**: Banner, projetos, voluntários, doações, certificações

#### 3. **cadastro.html** - Formulário de Cadastro
- **Formulário Completo**: Dados pessoais, endereço, experiência, disponibilidade
- **Campos Obrigatórios**: Nome, e-mail, CPF, telefone, data nascimento, endereço
- **Validações HTML5**: 
  - Email: `type="email"`
  - CPF: `pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"`
  - Telefone: `pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"`
  - CEP: `pattern="[0-9]{5}-[0-9]{3}"`
  - Data: `type="date"` com min/max
- **Agrupamento**: Fieldsets lógicos para diferentes seções
- **Acessibilidade**: Labels, ARIA, títulos descritivos

### 🔧 Recursos Técnicos Implementados

#### **HTML5 Semântico**
- Uso correto de elementos semânticos (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Hierarquia de títulos (h1-h6) consistente e lógica
- Estrutura de conteúdo bem organizada

#### **Formulários Avançados**
- **Tipos de Input Específicos**: email, tel, date, text, textarea, select, checkbox
- **Validação Nativa**: required, pattern, min, max, minlength, maxlength
- **Máscaras HTML5**: Patterns regex para CPF, telefone, CEP
- **Agrupamento**: Fieldsets com legends descritivos
- **Acessibilidade**: Labels associados, aria-describedby, titles

#### **Multimídia e Imagens**
- Referências para imagens em múltiplos formatos (JPG, PNG)
- Elementos `figure` e `figcaption` para contexto
- Atributos `alt` descritivos para acessibilidade
- Organização em diretório específico

#### **Acessibilidade**
- Estrutura semântica adequada
- Labels associados aos inputs
- ARIA attributes onde necessário
- Títulos descritivos em campos de formulário

### 📋 Checklist de Conformidade

- ✅ **3 páginas HTML** com estrutura semântica completa
- ✅ **Hierarquia de títulos** lógica e consistente
- ✅ **Imagens** referenciadas em cada página
- ✅ **Formulário complexo** com todos os campos solicitados:
  - ✅ Nome Completo
  - ✅ E-mail  
  - ✅ CPF (com máscara)
  - ✅ Telefone (com máscara)
  - ✅ Data de Nascimento
  - ✅ Endereço completo
  - ✅ CEP (com máscara)
  - ✅ Cidade e Estado
- ✅ **Validação nativa HTML5** em campos obrigatórios
- ✅ **Agrupamento lógico** com fieldsets
- ✅ **Máscaras de input** para CPF, telefone, CEP
- ✅ **Estrutura de pastas** organizada
- ✅ **Arquivos HTML** prontos para validação W3C

### 👥 Personas Atendidas

O projeto contempla as personas definidas:
- **Administrador da ONG**: Gestão de informações institucionais
- **Voluntário**: Descoberta de oportunidades e cadastro
- **Doador/Apoiador**: Conhecimento de projetos e formas de contribuição
- **Visitante**: Acesso a informações gerais da organização

### 📊 Impacto Social

A plataforma desenvolvida simula uma solução real para o terceiro setor brasileiro, abordando:
- Presença digital profissional para ONGs
- Captação e gestão de voluntários
- Transparência na aplicação de recursos
- Facilidade de doações e engajamento

---

**Desenvolvido para:** Disciplina de Desenvolvimento Front-End Para Web  
**Foco:** Experiência Prática I - Fundamentos da Web e Estruturação de Interfaces
**Data:** Outubro 2025