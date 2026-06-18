
script.js
// ===========================
// Curiosidades aleatórias
// ===========================
function mostrarFato() {
    const fatos = [
        "O agro sustentável ajuda a combater a desertificação do solo 🌾.",
        "Plantar diferentes culturas juntas aumenta a biodiversidade 🐝.",
        "O uso consciente de água na agricultura reduz desperdícios 💧.",
        "Agricultura sustentável pode aumentar a produtividade a longo prazo 📈.",
        "O agro sustentável reduz a emissão de gases poluentes 🌍."
    ];

    // Gera um número aleatório entre 0 e o tamanho do array
    const indice = Math.floor(Math.random() * fatos.length);
    document.getElementById("fato").textContent = fatos[indice];
}

// ===========================
// Formulário de contato
// ===========================
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Mensagem de agradecimento
    document.getElementById("resposta").textContent = `Obrigado, ${nome}! Recebemos sua mensagem. 📧`;
   
    // Limpa o formulário
    this.reset();
});
