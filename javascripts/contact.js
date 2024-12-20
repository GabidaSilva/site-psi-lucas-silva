// Função para validar o telefone
function validaTelefone(telefone) {
    const numero = telefone.replace(/\D/g, '');

    if (numero.length < 10 || numero.length > 11) {
        return false;
    }

    if (numero.length === 11 && numero.substring(2, 3) !== '9') {
        return false;
    }

    let textoFormatado;
    if (numero.length === 11) {
        textoFormatado = `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7)}`;
    } else {
        textoFormatado = `(${numero.substring(0, 2)}) ${numero.substring(2, 6)}-${numero.substring(6)}`;
    }

    return textoFormatado;
}

// Função para enviar o formulário
function enviarFormulario(form) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const resultadoTelefone = validaTelefone(phone);
    if (!resultadoTelefone) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Exibir mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    
    // Preencher a mensagem com o nome do usuário
    successMessage.innerHTML = `Obrigado por entrar em contato, ${name}!` + `<br>` + ` Retornarei seu contato em breve.`;
    
    // Ocultar o formulário e mostrar a mensagem
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    // Recarregar o formulário após 2 segundos
    setTimeout(() => {
        form.reset();
        successMessage.classList.add('hidden');
        form.classList.remove('hidden');
    }, 2000);
}

// Configuração dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    // Aplicar validação ao campo de telefone
    document.getElementById('phone').addEventListener('input', function () {
        const resultado = validaTelefone(this.value);
        if (resultado) {
            this.value = resultado;
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Número de telefone inválido');
        }
    });

    // Manipulador de envio do formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        enviarFormulario(this);
    });
});
