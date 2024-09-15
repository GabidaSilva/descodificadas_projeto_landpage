// Função que será executada quando o formulário for enviado
document.getElementById('formConfirmacao').addEventListener('submit', function(event) {
    // Previne que o formulário seja enviado da forma padrão (sem recarregar a página)
    event.preventDefault();
    
    // Pega os valores inseridos no campo de nome e e-mail
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Simples verificação: se ambos os campos têm valores
   if (nome && email) {
        // Exibe a mensagem de confirmação
        document.getElementById('mensagemConfirmacao').style.display = 'block';

        // Limpa os campos de texto após o envio
        document.getElementById('formConfirmacao').reset();
    } else {
        // Caso os campos não estejam preenchidos, exibe um alerta
        alert('Por favor, preencha todos os campos.');
    }
});

//Observação: fiz o JavaScript com  auxílio do ChatGPT, ainda estou aprendendo.(14/09/2024)
