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

    const whatsappNumber = "5548999975421";

    const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${resultadoTelefone}%0AMensagem: ${message}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, '_blank');

    const successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = `Obrigado por entrar em contato, ${name}!<br>Você será redirecionado para o WhatsApp para enviar sua mensagem.`;
    
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
        form.reset();
        successMessage.classList.add('hidden');
        form.classList.remove('hidden');
    }, 5000);
}
