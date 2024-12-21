document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById("services-section");

    const servicesData = [
        {
            img: "assets/img1.jpeg",
            title: "Psicoterapia com Foco em Psicanálise",
            description: "Sou especialista em Análise Aplicada do Comportamento, que denota que ocomportamento é condicionado por com quem convivemos e por onde vivemos. Já a atuação com Psicanálise, implica que tudo que falamos significa muito e como nos comportamos também entregam as bases de nossa construção. Somos reféns de nossos discursos, ao mesmo ponto, que são as palavras que nos libertam e nos curam.A terapia com psicanálise é profunda, cheia de caminhos, mas sempre traz algo para a luz."
        },
        {
            img: "assets/img7.jpeg",
            title: "Terapia de Casais",
            description: "Um encontro com a saúde da relação, juntos em uma triangulação, investigamos a construção do afeto e do relacionamento.Vamos de encontro direto com os incômodos e inseguranças. Mediarei uma possibilidade de diálogo assertivo e resolutivo entre os envolvidos, por um período de 2 horas."
        },
        {
            img: "assets/img10.jpeg",
            title: "Terapia Individual",
            description: "Aqui o encontro é com você mesmo, trabalhando em conjunto, iremos rever como você foi construído e reorganizar o que já não faz mais tanto sentido, ou o que gera incômodo.O processo não é apenas de autoconhecimento, e também de autocuidado. Trabalharemos no mínimo 1 hora por semana."
        }
        
    ];

    servicesData.forEach(services=> {
        
        const card = document.createElement("article");
        card.className = "card";
        
        card.innerHTML = `
            <img src="${services.img}" alt="Imagem de ${services.title}">
            <h3 class="card-title">${services.title}</h3>
            <p>${services.description}</p>
        `;
        
        servicesSection.appendChild(card);
    });
});