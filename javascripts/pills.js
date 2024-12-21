
document.addEventListener("DOMContentLoaded", function () {
    
    const videoGallery = document.getElementById("video-gallery");

    const videos = [
        {
            src: "assets/video1.mp4",
            description: "Sentimentos Vs Comportamentos",
        },
        {
            src: "assets/video2.mp4",
            description: "Dê Limites",
        },
        {
            src: "assets/video3.mp4",
            description: "Respeito",
        },
        {
            src: "assets/video4.mp4",
            description: "Autoamor",
        },
        {
            src: "assets/video5.mp4",
            description: "Se Faça Feliz",
        },
        {
            src: "assets/protocolo.mp4",
            description: "Posso Te Ajudar?",
        },
        {
            src: "assets/AgradarAQuem.mp4",
            description: "Agradar a Quem?",
        },
        {
            src: "assets/FacaTerapia.mp4",
            description: "Faça Terapia",
        },
        
    ];

    videos.forEach(video => {
        
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        videoItem.innerHTML = `
            <video class="rounded-video" controls>
                <source src="${video.src}" type="video/mp4">
            Seu navegador não suporta o vídeo.
            </video>
            <p>${video.description}</p>
        `;

        videoGallery.appendChild(videoItem);
    });
});
