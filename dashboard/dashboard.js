// Variáveis globais
let totalResolvidos = 0;
let metaDiaria = 0;
let diasRestantes = 30;

// Atualiza a exibição dos resultados
function atualizarResultados() {
    document.getElementById('totalResolvidos').textContent = totalResolvidos;
    document.getElementById('metaDiariaAtual').textContent = metaDiaria;
    document.getElementById('diasRestantes').textContent = diasRestantes;
}

// Define a meta diária
function definirMeta() {
    const metaInput = document.getElementById('metaDiaria');
    const novaMeta = parseInt(metaInput.value);

    if (novaMeta > 0) {
        metaDiaria = novaMeta;
        document.getElementById('metaAtual').textContent = `Meta diária definida: ${metaDiaria}`;
        atualizarResultados();
    } else {
        alert('Digite uma meta válida!');
    }
}

// Registra o resultado diário
function registrarResultado() {
    const resultadoInput = document.getElementById('resultadoDiario');
    const resultado = parseInt(resultadoInput.value);

    if (resultado >= 0) {
        totalResolvidos += resultado;
        diasRestantes -= 1;
        atualizarResultados();

        // Verifica se a meta diária foi atingida
        if (resultado >= metaDiaria) {
            alert('Parabéns! Você atingiu a meta diária.');
        } else {
            alert('Continue assim! Amanhã é um novo dia.');
        }

        resultadoInput.value = ''; // Limpa o campo de input
    } else {
        alert('Digite um valor válido!');
    }
}

// Inicializa a exibição
atualizarResultados();