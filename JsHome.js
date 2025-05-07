let immagini = document.querySelectorAll("img[data-url]"); // Seleziona tutte le immagini che hanno un attributo data-url

immagini.forEach(img => {

    img.addEventListener("mouseenter", () => {
        document.body.style.cursor = 'pointer';
    });

    img.addEventListener("click", (e) => {
        e.preventDefault(); // Evita il cambio immediato di pagina
        let url = img.getAttribute("data-url");
        document.body.classList.add("fade-out"); // Aggiunge la classe per il fade

        setTimeout(() => {
            window.location.href = url; // Cambia pagina dopo l'animazione
        }, 500); // Tempo in millisecondi (deve essere uguale alla transizione css)
    });

});