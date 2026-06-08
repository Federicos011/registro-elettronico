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