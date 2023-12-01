const form = document.getElementById('form-cadastro');


form.addEventListener('submit', function(e) {
    e.preventDefault();
});

let linhas = '';

adicionaLinha();
atualizaTabela();




function adicionaLinha () {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputNTelefoneCadastro = document.getElementById('telefone-cadastro');
;

let linha = '<tr>';{
        linha += `<td>${inputNomeCadastro.value}</td>`;
        linha += `<td>${inputNTelefoneCadastro.value}</td>`;
        linha +='</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
