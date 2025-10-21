#!/usr/bin/env node

/**
 * Build Simples para Produção - Experiência Prática IV
 */

const fs = require('fs');
const path = require('path');

console.log('🏗️  Iniciando build para produção...\n');

// Criar diretório build
if (fs.existsSync('build')) {
    fs.rmSync('build', { recursive: true });
}
fs.mkdirSync('build', { recursive: true });

// Função simples para minificar CSS
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
        .replace(/\s+/g, ' ') // Remove espaços extras
        .replace(/\s*([{}:;,>])\s*/g, '$1') // Remove espaços ao redor de caracteres
        .trim();
}

// Função simples para minificar JS
function minifyJS(js) {
    return js
        .replace(/\/\/.*$/gm, '') // Remove comentários de linha
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários de bloco
        .replace(/\s+/g, ' ') // Remove espaços extras
        .replace(/\s*([{}();,=])\s*/g, '$1') // Remove espaços ao redor de caracteres
        .trim();
}

// Função simples para minificar HTML
function minifyHTML(html) {
    return html
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comentários
        .replace(/>\s+</g, '><') // Remove espaços entre tags
        .replace(/\s+/g, ' ') // Remove espaços extras
        .trim();
}

// Processar CSS
console.log('🎨 Processando CSS...');
fs.mkdirSync('build/assets/css', { recursive: true });

const cssFiles = [
    'assets/css/design-system.css',
    'assets/css/base.css', 
    'assets/css/components.css',
    'assets/css/navigation.css',
    'assets/css/layouts.css',
    'assets/css/footer.css',
    'assets/css/accessibility.css'
];

let allCSS = '';
cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        allCSS += content + '\n';
        console.log(`✅ ${file}`);
    }
});

const minifiedCSS = minifyCSS(allCSS);
fs.writeFileSync('build/assets/css/style.min.css', minifiedCSS);
console.log('✅ CSS unificado: style.min.css\n');

// Processar JavaScript
console.log('🚀 Processando JavaScript...');
fs.mkdirSync('build/assets/js', { recursive: true });

const jsFiles = [
    'assets/js/main.js',
    'assets/js/form-validation.js',
    'assets/js/accessibility.js'
];

let allJS = '';
jsFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        allJS += content + '\n';
        console.log(`✅ ${file}`);
    }
});

const minifiedJS = minifyJS(allJS);
fs.writeFileSync('build/assets/js/app.min.js', minifiedJS);
console.log('✅ JavaScript unificado: app.min.js\n');

// Processar HTML
console.log('📄 Processando HTML...');
const htmlFiles = ['index.html', 'cadastro.html', 'projetos.html'];

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        // Substituir CSS
        html = html.replace(
            '<link rel="stylesheet" href="assets/css/style.css">',
            '<link rel="stylesheet" href="assets/css/style.min.css">'
        );
        
        // Substituir JS
        html = html.replace(
            /<script src="assets\/js\/main\.js"><\/script>\s*<script src="assets\/js\/form-validation\.js"><\/script>\s*<script src="assets\/js\/accessibility\.js"><\/script>/g,
            '<script src="assets/js/app.min.js"></script>'
        );
        
        const minifiedHTML = minifyHTML(html);
        fs.writeFileSync(`build/${file}`, minifiedHTML);
        console.log(`✅ ${file}`);
    }
});

// Copiar imagens
console.log('\n🖼️  Copiando imagens...');
if (fs.existsSync('assets/images')) {
    fs.mkdirSync('build/assets/images', { recursive: true });
    const images = fs.readdirSync('assets/images');
    images.forEach(image => {
        fs.copyFileSync(
            `assets/images/${image}`,
            `build/assets/images/${image}`
        );
        console.log(`✅ ${image}`);
    });
} else {
    console.log('⚠️  Pasta de imagens não encontrada');
}

// Relatório
console.log('\n📊 Relatório de Build:');

const originalSize = getDirectorySize('.');
const buildSize = getDirectorySize('build');
const reduction = ((originalSize - buildSize) / originalSize * 100).toFixed(1);

console.log(`📈 Tamanho original: ${(originalSize / 1024).toFixed(1)} KB`);
console.log(`📉 Tamanho otimizado: ${(buildSize / 1024).toFixed(1)} KB`);
console.log(`🎯 Redução: ${reduction}%`);

console.log('\n🎉 Build concluído com sucesso!');
console.log('📁 Arquivos otimizados em: ./build/');

function getDirectorySize(dir) {
    let size = 0;
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (file === 'build' || file === '.git' || file === 'node_modules') return;
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                size += getDirectorySize(filePath);
            } else {
                size += stat.size;
            }
        });
    } catch (e) {
        // Ignorar erros
    }
    return size;
}