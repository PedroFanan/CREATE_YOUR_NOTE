function calcularImpostos() {
    let precoUnitario = parseFloat(document.getElementById('precoUnitario').value);
    let taxaImposto = 0.1; // Exemplo: taxa de imposto de 10%
    
    // Cálculo do imposto
    let imposto = precoUnitario * taxaImposto;

    // Adiciona o imposto ao total
    let total = precoUnitario + imposto;

    document.getElementById('total').value = total.toFixed(2);
}

function gerarNotaFiscal() {
    let tomador = document.getElementById('tomador').value;
    let endereco = document.getElementById('endereco').value;
    let cnpjCpf = document.getElementById('cnpjCpf').value;
    let inscricaoMunicipal = document.getElementById('inscricaoMunicipal').value;
    let dataEmissao = document.getElementById('dataEmissao').value;
    let descricaoServicos = document.getElementById('descricaoServicos').value;
    let total = parseFloat(document.getElementById('total').value);

    let totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    let notaFiscal = `
    <h2>Nota Fiscal de Serviço</h2>
    <p><strong>Tomador do Serviço:</strong> ${tomador}</p>
    <p><strong>Endereço do Tomador:</strong> ${endereco}</p>
    <p><strong>CNPJ/CPF do Tomador:</strong> ${cnpjCpf}</p>
    <p><strong>Inscrição Municipal do Tomador:</strong> ${inscricaoMunicipal}</p>
    <p><strong>Data de Emissão:</strong> ${dataEmissao}</p>
    <p><strong>Descrição dos Serviços:</strong> ${descricaoServicos}</p>
    <p><strong>Total:</strong>${totalFormatado}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}