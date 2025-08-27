// Seleciona o formulário e a div de resultado
const form = document.getElementById('formCadastro');
const resultado = document.getElementById('resultado');

// Adiciona um evento ao clicar em "Enviar"
form.addEventListener('submit', function(e) {
  e.preventDefault(); // impede que a página recarregue

  // Captura os valores do formulário
  const nome = document.getElementById('nome').value;
  const tel = document.getElementById('tel').value;
  const genero = form.querySelector('input[name="genero"]:checked');
  const cidade = document.getElementById('cidade').value;

  // Verifica se o usuário selecionou um gênero
  const generoValor = genero ? genero.value : "Não selecionado";

  // Mostra os dados na página
  resultado.innerHTML = `
    <h2>Dados enviados:</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Telefone:</strong> ${tel}</p>
    <p><strong>Gênero:</strong> ${generoValor}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
  `;

  // Limpa o formulário
  form.reset();
});