let listaVoti = document.getElementById("lista-voti");

function aggiungiVoto() {
    let materia = prompt("Materia:");
    let voto = prompt("Voto:");

    if (materia && voto) {
        let li = document.createElement("li");
        li.textContent = materia + ": " + voto;

        listaVoti.appendChild(li);

        localStorage.setItem(
            "voti",
            listaVoti.innerHTML
        );
    }
}

function eliminaUltimoVoto() {

    if (listaVoti.lastElementChild) {

        listaVoti.removeChild(
            listaVoti.lastElementChild
        );

        localStorage.setItem(
            "voti",
            listaVoti.innerHTML
        );
    }
}

function calcolaMediaVoti() {

    let lista =
        document.getElementById("lista-voti");

    let voti =
        lista.getElementsByTagName("li");

    let somma = 0;
    let numeroVoti = 0;

    for (let i = 0; i < voti.length; i++) {

        let testo = voti[i].textContent;

        let parti = testo.split(":");

        let voto =
            parseFloat(parti[1]);

        if (!isNaN(voto)) {

            somma += voto;
            numeroVoti++;

        }
    }

    if (numeroVoti === 0) {

        alert("Nessun voto presente");
        return;

    }

    let media = somma / numeroVoti;

    document.getElementById(
        "media-voti"
    ).textContent =
        "Media voti: " +
        media.toFixed(2);
}

function aggiungiAssenza() {

    let elementoAssenze =
        document.getElementById(
            "assenze"
        );

    if (!elementoAssenze) {

        alert(
            "Elemento assenze non trovato!"
        );

        return;
    }

    let numero =
        parseInt(
            elementoAssenze.textContent
        ) || 0;

    numero++;

    elementoAssenze.textContent =
        numero + " assenze";
}
function aggiungiAvviso()
