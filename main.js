const form = document.getElementById('form-cadastro');


form.addEventListener('submit', function(e) {
    e.preventDefault();
});


let linhas = '';


adicionaLinha();
atualizaTabela();


function adicionaLinha() {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelefoneCadastro = document.getElementById('telefone-cadastro');


    let linha = '<tr>';
    linha += `<td>${inputNomeCadastro.value}</td>`;
    linha += `<td>${inputTelefoneCadastro.value}</td>`;
    linha += '</tr>';


    linhas += linha;


    inputNomeCadastro.value = '';
    inputNTelefoneCadastro.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}