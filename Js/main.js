async function buscarVersiculo() {
    let versiculo = document.querySelector('versiculo').value;
    let resultadoDiv = document.querySelector('resultado').value;

    if (!versiculo) {
        resultadoDiv.textContent = 'Por favor, insira um versículo.';
        return;
    }

    try {
        let resposta = await fetch(`https://www.abibliadigital.com.br/api/verses/:version/:abbrev/:chapter/:number`);
        if (!resposta.ok) {
            throw new Error('Erro na busca do versículo.');
        }

        let dados = await resposta.json();
        if (dados.text) {
            resultadoDiv.textContent = `${dados.reference}: ${dados.text}`;
        } else {
            resultadoDiv.textContent = 'Versículo não encontrado.';
        }
    } catch (error) {
        resultadoDiv.textContent = 'Erro ao acessar a API.';
    }
}



