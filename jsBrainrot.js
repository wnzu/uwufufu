let arrayBrain = [["tralalero tralala", "tt"], ["bombombini gusini", "bb"], ["bombardilo crocodilo", "bc"], ["bobrito bondito", "images"], ["capibarnia", "capi"], ["bicus de bicus", "piccione"],
["boneca ambalabu", "boneca"], ["brr brr patapim", "patapim"], ["garamararam", "Garam"], ["chimpanzini bananini", "bananini"], ["tung tung sahur", "tung"], ["u din din din", "din"]];

let home = document.getElementById("titolo");

home.addEventListener("click", (e) => {
    document.body.classList.add('fade-out'); // Aggiunge la classe per il fade-out
    setTimeout(function () {
        window.location.href = 'uwufufu.html'; // Cambia pagina dopo l'animazione
    }, 500); // Tempo in millisecondi (deve essere uguale alla transizione CSS)
});

// -------------------------------------------------

let titolo = document.getElementById("cambia");

//-------------------------------------------------
let imgRound = [];

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

    let opzioni = [8, 16];
    opzioni.forEach(num => {
        let option = document.createElement("option");
        option.value = num;
        option.textContent = num;
        selettore.appendChild(option);
    });




    selettore.addEventListener("change", () => {

        let numeroScelte = parseInt(selettore.value);

        let copia = arrayBrain;

        // Funzione per mischiare
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(copia); // Mischia l’array
        imgRound = copia.slice(0, numeroScelte); // Prende i primi X

        let body = document.getElementById('container');

        body.innerHTML = ""; // Pulisce

        imgRound.forEach(brain => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.classList.add("film");
            div.classList.add("contFilm");


            img.src = 'images2/' + brain[1] + '.webp';

            div.appendChild(img);
            body.appendChild(div);
        });
    });

    let bottoneInizia = document.createElement("button");
    bottoneInizia.classList.add("bottonePlay");
    bottoneInizia.textContent = "inizia!";

    bottoneInizia.addEventListener("click", () => {

        localStorage.setItem("imgRound", JSON.stringify(imgRound));
        localStorage.setItem("numeroFilm", imgRound.length);
        window.location.href = "giocoBrainrot.html";


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

