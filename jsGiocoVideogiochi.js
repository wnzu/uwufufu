let arrayVideogiochi = [[]];

let categoriaSelezionata = null;
let home = document.getElementById("titolo");

home.addEventListener("click", (e) => {
    document.body.classList.add('fade-out'); // Aggiunge la classe per il fade-out
    setTimeout(function () {
        window.location.href = 'uwufufu.html'; // Cambia pagina dopo l'animazione
    }, 500); // Tempo in millisecondi (deve essere uguale alla transizione CSS)
});

// -------------------------------------------------

let select = document.getElementById('filmTypeSelect');
let titolo = document.getElementById("cambia");


select.addEventListener('change', () => {
    categoriaSelezionata = select.value;

    // if (categoriaSelezionata) {
    //     titolo.textContent = "Miglior film " + categoriaSelezionata;
    // } else {
    //     titolo.textContent = "Miglior film";
    // }

    switch (categoriaSelezionata) {

        case "": titolo.textContent = "Miglior film";
            break;

        case "Action": titolo.textContent = "Miglior film d'azione";
            break;

        case "Comedy": titolo.textContent = "Miglior film comico";
            break;

        case "Drama": titolo.textContent = "Miglior film drammatico";
            break;

        case "Horror": titolo.textContent = "Miglior film horror";
            break;

        case "Romance": titolo.textContent = "Miglior film romantico";
            break;

        case "Sci-Fi": titolo.textContent = "Miglior film di fantascienza";
            break;

        case "Animation": titolo.textContent = "Miglior film d'animazione";
            break;

        case "Family": titolo.textContent = "Miglior film per famiglie";
            break;

        case "Mystery": titolo.textContent = "Miglior film di mistero";
            break;

        case "Sport": titolo.textContent = "Miglior film sullo sport";
            break;

        case "Biography": titolo.textContent = "Miglior film biografico";
            break;

        case "Fantasy": titolo.textContent = "Miglior film di fantasia";
            break;

        case "Thriller": titolo.textContent = "Miglior film Thriller";
            break;

        case "War": titolo.textContent = "Miglior film di guerra";
            break;

        case "Music": titolo.textContent = "Miglior film sulla musica";
            break;
    }
});

//-------------------------------------------------
let filmInGioco = [];

let scelta = document.getElementById("round");

scelta.addEventListener("click", () => {

    let finestra = document.createElement("div");
    finestra.classList.add("finestra");

    let contenutoFinestra = document.createElement("div");
    contenutoFinestra.classList.add("contFin");


    let p = document.createElement("p");
    p.textContent = "Numero di scelte per round:";


    let selettore = document.createElement("select");
    selettore.classList.add("filmTypeSelect");

    let opzioneNeutra = document.createElement("option");
    opzioneNeutra.value = "";
    opzioneNeutra.disabled = true;
    opzioneNeutra.selected = true;
    opzioneNeutra.textContent = "-- Scegli il numero di film --";
    selettore.appendChild(opzioneNeutra);

    let opzioni = [16, 32, 64, 128, 256];
    opzioni.forEach(num => {
        let option = document.createElement("option");
        option.value = num;
        option.textContent = num;
        selettore.appendChild(option);
    });




    selettore.addEventListener("change", () => {

        let numeroScelte = parseInt(selettore.value);

        let filmDisponibili;
        if (!categoriaSelezionata || categoriaSelezionata === "") {
            filmDisponibili = immaginiFilm; // Nessuna categoria → usa tutti
        } else {
            filmDisponibili = immaginiFilm.filter(film => film[3].includes(categoriaSelezionata));
        }

        // Funzione per mischiare
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(filmDisponibili); // Mischia l’array
        filmInGioco = filmDisponibili.slice(0, numeroScelte); // Prende i primi X

        let body = document.getElementById('container');

        body.innerHTML = ''; // Pulisce

        filmInGioco.forEach(film => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.classList.add("film");
            div.classList.add("contFilm");


            img.src = 'images/' + film[2] + '.jpg';

            div.appendChild(img);
            body.appendChild(div);
        });
    });

    let bottoneInizia = document.createElement("button");
    bottoneInizia.classList.add("bottonePlay");
    bottoneInizia.textContent = "inizia!";

    bottoneInizia.addEventListener("click", () => {

        localStorage.setItem("filmInGioco", JSON.stringify(filmInGioco));
        localStorage.setItem("numeroFilm", filmInGioco.length);
        window.location.href = "giocoFilm.html";


    });


    contenutoFinestra.appendChild(p);
    contenutoFinestra.appendChild(selettore);
    contenutoFinestra.appendChild(bottoneInizia);
    finestra.appendChild(contenutoFinestra);
    document.body.appendChild(finestra);



    finestra.addEventListener("click", (e) => {
        if (e.target == finestra) {
            document.body.removeChild(finestra);
        }
    });


});

