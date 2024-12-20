// Espera o DOM estar carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a galeria de vídeos pelo ID
    const videoGallery = document.getElementById("video-gallery");

    // Dados dos vídeos (pode ser expandido ou alterado no futuro)
    const videos = [
        {
            src: "assets/video1.mp4",
            description: "Introdução à Terapia Comportamental",
        },
        {
            src: "assets/video2.mp4",
            description: "Autoconhecimento e Psicanálise",
        },
        {
            src: "assets/video3.mp4",
            description: "Tema do vídeo 3",
        },
        {
            src: "assets/video4.mp4",
            description: "Tema do vídeo 4",
        },
        {
            src: "assets/video5.mp4",
            description: "Tema do vídeo 4",
        },
    ];

    // Função para criar elementos de vídeo dinamicamente
    videos.forEach(video => {
        // Cria um container para o vídeo
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        // Adiciona o conteúdo ao container
        videoItem.innerHTML = `
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Seu navegador não suporta o vídeo.
            </video>
            <p>${video.description}</p>
        `;

        // Adiciona o container do vídeo à galeria
        videoGallery.appendChild(videoItem);
    });
});
