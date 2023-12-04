const form = document.getElementById('form-cadastro');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelefoneCadastro = document.getElementById('telefone-cadastro');

    let linha = '<tr>';
    linha += `<td>${inputNomeCadastro.value}</td>`;
    linha += `<td>${inputTelefoneCadastro.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeCadastro.value = '';
    inputTelefoneCadastro.value = '';
});