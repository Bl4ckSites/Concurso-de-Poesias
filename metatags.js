// metatags.js

// Função para adicionar metatags ao documento
function addMetaTags() {
    const metaTags = [
        { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
        { name: "MobileOptimized", content: "320" },
        { name: "HandheldFriendly", content: "true" },
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "Poesias com tema de matrizes brasileiras, selecionadas através de um concurso de poesias feito no colégio." },
        { name: "keywords", content: "poesias, matrizes brasileiras, Roger Bastos, literatura, arte, sentimentos, concursos de poesia" },
        { name: "author", content: "Roger Bastos" },
        { name: "robots", content: "index, follow" },
        { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
        { httpEquiv: "Content-Encoding", content: "gzip" },
        { httpEquiv: "Content-Language", content: "pt-BR" },
        { httpEquiv: "Cache-Control", content: "max-age=3600, public" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-touch-fullscreen", content: "yes" },
        { name: "theme-color", content: "#000000" },
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        { httpEquiv: "x-dns-prefetch-control", content: "on" },
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.name) {
            meta.name = tag.name;
            meta.content = tag.content;
        }
        if (tag.httpEquiv) {
            meta.httpEquiv = tag.httpEquiv;
            meta.content = tag.content;
        }
        document.head.appendChild(meta);
    });
}

// Função para registrar mensagens sobre atividades no site
function logActivity(message) {
    console.log(message); // Aqui você pode usar alert() ou outro método para exibir a mensagem
}

// Função para vibrar o dispositivo
function vibrateDevice() {
    if (navigator.vibrate) {
        navigator.vibrate(20); // Vibra por 20 milissegundos
    }
}

// Chame a função para adicionar as metatags
addMetaTags();

// Exemplo de uso da função logActivity
logActivity("As metatags foram adicionadas ao documento.");

// Adiciona um ouvinte de evento para vibrar o dispositivo ao clicar na página
document.addEventListener('click', function() {
    vibrateDevice();
});