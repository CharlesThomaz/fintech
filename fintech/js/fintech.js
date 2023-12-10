function calcularRendimento() {
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const periodo = parseFloat(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(periodo)) {
        document.getElementById('resultado').value = 'Preencha todos os campos corretamente';
        return;
    }

    const rendimento = capital * (1 + taxa / 100) ** periodo - capital;
    document.getElementById('resultado').value = `Rendimento total: ${rendimento.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById('capital').value = '';
    document.getElementById('taxa').value = '';
    document.getElementById('periodo').value = '';
    document.getElementById('resultado').value = '';
}
