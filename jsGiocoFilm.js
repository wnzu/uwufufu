let filmInGioco = JSON.parse(localStorage.getItem('filmInGioco')) || []; //prendo tutti i film salvati dalla pagina precedente
let vincitoriRound = []; // serve per tenere le immagini scelte
let numeroFilm = parseInt(localStorage.getItem("numeroFilm"));
let nFilm = numeroFilm;
let matchNumero = 1;

console.log(localStorage.getItem("numeroFilm"));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // scambia gli elementi
    }
}


function startGame() {

    shuffleArray(filmInGioco);

    function mostraSfida() {

        let infoRound = document.getElementById("infoRound");
        if (infoRound) {
            infoRound.textContent = "Round " + nFilm + " Match " + matchNumero;
        }

        if (filmInGioco.length == 0 && vincitoriRound.length == 1) {
            let vincitore = vincitoriRound[0];

            let film1d = document.getElementById("film1");
            let film2d = document.getElementById("film2");
            let versusText = document.querySelector(".versus");
            let arena = document.querySelector(".arena");


            film2d.style.display = "none";
            versusText.style.display = "none";
            infoRound.textContent = "";


            film1d.innerHTML = "";
            film2d.innerHTML = "";

            film1d.classList.add("vinci");
            arena.classList.add("vittoria");

            let imgVincitore = document.createElement('img');
            imgVincitore.src = 'images/' + vincitore[2] + '.jpg';
            imgVincitore.classList.add("imgVinci");

            let titoloVincitore = document.createElement('h2');
            titoloVincitore.textContent = "Il vincitore è: \n" + vincitore[0];
            titoloVincitore.classList.add('titolo-vincitore');


            let bottoneHome = document.createElement('button');
            bottoneHome.textContent = "Torna alla Home";
            bottoneHome.onclick = function () {
                window.location.href = "Film.html";
            };


            let containerVincitore = document.createElement('div');
            containerVincitore.classList.add("container-vincitore");
            containerVincitore.appendChild(titoloVincitore);
            containerVincitore.appendChild(imgVincitore);
            containerVincitore.appendChild(bottoneHome);
            document.body.appendChild(containerVincitore);

            return;
        }



        if (filmInGioco.length == 0) {
            // Se non ci sono più film da mostrare, inizia il prossimo round con i vincitori
            if (vincitoriRound.length > 1) {
                filmInGioco = vincitoriRound;
                vincitoriRound = [];
                nFilm = nFilm / 2;
                matchNumero = 1;
                shuffleArray(filmInGioco); // mescola i vincitori
                mostraSfida(); // inizia un nuovo round con i vincitori
            }
        }



        let film1 = filmInGioco[0];
        let film2 = filmInGioco[1];


        let img1 = document.createElement('img');
        img1.src = 'images/' + film1[2] + '.jpg';

        let img2 = document.createElement('img');
        img2.src = 'images/' + film2[2] + '.jpg';

        let titoloImg1 = document.createElement('div');
        titoloImg1.textContent = film1[0];
        titoloImg1.style.paddingTop = "15px";
        titoloImg1.style.textAlign = 'center'; // Centra il testo

        let titoloImg2 = document.createElement('div');
        titoloImg2.textContent = film2[0];
        titoloImg2.style.paddingTop = "15px";
        titoloImg2.style.textAlign = 'center'; // Centra il testo


        let film1d = document.getElementById("film1");
        let film2d = document.getElementById("film2");

        film1d.style.opacity = '0';
        film2d.style.opacity = '0';

        setTimeout(() => {
            film1d.innerHTML = '';
            film2d.innerHTML = '';


            film1d.appendChild(img1);
            film1d.appendChild(titoloImg1);

            film2d.appendChild(img2);
            film2d.appendChild(titoloImg2);

            film1d.style.opacity = '1';
            film2d.style.opacity = '1';
        }, 50); // bastano pochi millisecondi

        //Aggiungi gli eventi di click per selezionare il vincitore
        img1.onclick = function () {
            vincitoriRound.push(film1); // aggiungi il vincitore
            filmInGioco.shift(); // rimuovi il film scelto
            filmInGioco.shift(); // rimuovi l'altro film
            matchNumero++;
            mostraSfida(); // inizia un nuovo round
        };

        img2.onclick = function () {
            vincitoriRound.push(film2); // aggiungi il vincitore
            filmInGioco.shift(); // rimuovi il film scelto
            filmInGioco.shift(); // rimuovi l'altro film
            matchNumero++;
            mostraSfida(); // inizia un nuovo round
        };



    }

    mostraSfida(); // avvia il primo round
}

startGame();
