let ruolo = "";

// LOGIN

function accedi() {

    let utente =
        document.getElementById("utente").value;

    let password =
        document.getElementById("password").value;

    if (
        utente === "maestro Fede" &&
        password === "Federico"
    ) {

        ruolo = "docente";

        document.getElementById("login").style.display =
            "none";

        document.getElementById("registro").style.display =
            "block";

        alert("Benvenuto Federico");
    }

    else if (
        utente === "Genitori" &&
        password === "1234"
    ) {

        ruolo = "genitore";

        document.getElementById("login").style.display =
            "none";

        document.getElementById("registro").style.display =
            "block";
nascondiPulsantiDocente();
        alert("Benvenuti Alessio e Nives");
    }

    else {

        alert("Utente o password errati");

    }
}

// VOTI

function aggiungiVoto() {

    let materia = prompt("Materia:");
    let voto = prompt("Voto:");

    if (materia && voto) {

        let lista =
            document.getElementById("lista-voti");

        let li =
            document.createElement("li");

        li.textContent =
            materia + ": " + voto;

        lista.appendChild(li);
        localStorage.setItem("lista-voti", lista.innerHTML);
    }
}

function eliminaUltimoVoto() {

    let lista =
        document.getElementById("lista-voti");

    if (lista.lastElementChild) {

        lista.removeChild(
            lista.lastElementChild
        );
    }
}

function calcolaMediaVoti() {

    let lista =
        document.getElementById("lista-voti");

    let voti =
        lista.getElementsByTagName("li");

    let somma = 0;
    let numero = 0;

    for (let i = 0; i < voti.length; i++) {

        let testo =
            voti[i].textContent;

        let parti =
            testo.split(":");

        let voto =
            parseFloat(parti[1]);

        if (!isNaN(voto)) {

            somma += voto;
            numero++;

        }
    }

    if (numero === 0) {

        alert("Nessun voto presente");
        return;

    }

    let media =
        somma / numero;

    document.getElementById(
        "media-voti"
    ).textContent =
        "Media voti: " +
        media.toFixed(2);
}
window.onload = function() {

    let votiSalvati =
        localStorage.getItem("lista-voti");

    if (votiSalvati) {

        document.getElementById(
            "lista-voti"
        ).innerHTML = votiSalvati;

    }
};
// ASSENZE

function aggiungiAssenza() {

    let elementoAssenze =
        document.getElementById("assenze");

    if (!elementoAssenze) {
        return;
    }

    let numero =
        parseInt(elementoAssenze.textContent) || 0;

    numero++;

    elementoAssenze.textContent =
        numero + " assenze";

    localStorage.setItem(
        "assenze",
        elementoAssenze.textContent
    );
}

// AVVISI

function aggiungiAvviso() {

    let testo =
        prompt("Scrivi l'avviso:");

    if (testo) {

        let lista =
            document.getElementById(
                "lista-avvisi"
            );

        let li =
            document.createElement("li");

        li.textContent = testo;

        lista.appendChild(li);

        localStorage.setItem(
            "lista-avvisi",
            lista.innerHTML
        );
    }
}

function eliminaPrimoAvviso() {

    let lista =
        document.getElementById(
            "lista-avvisi"
        );

    if (lista.firstElementChild) {

        lista.removeChild(
            lista.firstElementChild
        );

        localStorage.setItem(
            "lista-avvisi",
            lista.innerHTML
        );
    }
}

// NOTE DISCIPLINARI

function aggiungiNota() {

    let testo =
        prompt(
            "Scrivi la nota disciplinare:"
        );

    if (testo) {

        let lista =
            document.getElementById(
                "lista-note"
            );

        let li =
            document.createElement("li");

        li.textContent = testo;

        lista.appendChild(li);

        localStorage.setItem(
            "lista-note",
            lista.innerHTML
        );
    }
}

function eliminaUltimaNota() {

    let lista =
        document.getElementById(
            "lista-note"
        );

    if (lista.lastElementChild) {

        lista.removeChild(
            lista.lastElementChild
        );

        localStorage.setItem(
            "lista-note",
            lista.innerHTML
        );
    }
}
function nascondiPulsantiDocente() {

    let pulsanti =
        document.getElementsByTagName("button");

    for (let i = 0; i < pulsanti.length; i++) {

        if (
            pulsanti[i].textContent.includes("Aggiungi") ||
            pulsanti[i].textContent.includes("Elimina") ||
            pulsanti[i].textContent.includes("Conferma") ||
            pulsanti[i].textContent.includes("Annulla")
        ) {

            pulsanti[i].style.display = "none";

        }
    }
}