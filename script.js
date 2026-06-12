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
// ASSENZE

function aggiungiAssenza() {

    let elementoAssenze =
        document.getElementById("assenze");

    if (!elementoAssenze) return;

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
            document.getElementById("lista-avvisi");

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
        document.getElementById("lista-avvisi");

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

// NOTE

function aggiungiNota() {

    let testo =
        prompt("Scrivi la nota disciplinare:");

    if (testo) {

        let lista =
            document.getElementById("lista-note");

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
        document.getElementById("lista-note");

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
// =========================
// RICEVIMENTO DOCENTI
// =========================

function aggiungiDisponibilita() {

    let data = prompt("Data:");
    let ora = prompt("Ora:");

    if (data && ora) {

        let lista =
            document.getElementById(
                "lista-ricevimenti"
            );

        let li =
            document.createElement("li");

        li.textContent =
            data +
            " - Ore " +
            ora +
            " | Stato: Libero";

        lista.appendChild(li);

        localStorage.setItem(
            "ricevimenti",
            lista.innerHTML
        );
    }
}

function prenotaRicevimento() {

    let lista =
        document.getElementById(
            "lista-ricevimenti"
        );

    if (!lista.firstElementChild) {

        alert(
            "Nessuna disponibilità presente"
        );

        return;
    }

    let genitore =
        prompt("Nome del genitore:");

    let motivo =
        prompt("Motivo del colloquio:");

    lista.firstElementChild.textContent +=
        " | Genitore: " +
        genitore +
        " | Motivo: " +
        motivo +
        " | Stato: Prenotato";

    localStorage.setItem(
        "ricevimenti",
        lista.innerHTML
    );
}

function confermaRicevimento() {

    let lista =
        document.getElementById(
            "lista-ricevimenti"
        );

    if (lista.firstElementChild) {

        lista.firstElementChild.textContent =
            lista.firstElementChild.textContent.replace(
                "Stato: Prenotato",
                "Stato: Confermato"
            );

        localStorage.setItem(
            "ricevimenti",
            lista.innerHTML
        );
    }
}

function annullaRicevimento() {

    let lista =
        document.getElementById(
            "lista-ricevimenti"
        );

    if (lista.firstElementChild) {

        lista.firstElementChild.textContent =
            lista.firstElementChild.textContent.replace(
                "Stato: Prenotato",
                "Stato: Annullato"
            );

        localStorage.setItem(
            "ricevimenti",
            lista.innerHTML
        );
    }
}

// =========================
// VOTI SCRUTINIO
// =========================

function aggiungiVotoScrutinio() {

    let materia =
        prompt("Materia:");

    let voto =
        prompt("Voto scrutinio:");

    if (materia && voto) {

        let lista =
            document.getElementById(
                "lista-scrutinio"
            );

        let li =
            document.createElement("li");

        li.textContent =
            materia + ": " + voto;

        lista.appendChild(li);

        localStorage.setItem(
            "scrutinio",
            lista.innerHTML
        );
    }
}

function eliminaUltimoVotoScrutinio() {

    let lista =
        document.getElementById(
            "lista-scrutinio"
        );

    if (lista.lastElementChild) {

        lista.removeChild(
            lista.lastElementChild
        );

        localStorage.setItem(
            "scrutinio",
            lista.innerHTML
        );
    }
}

function calcolaScrutinioFinale() {

    let lista =
        document.getElementById(
            "lista-scrutinio"
        );

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

        alert(
            "Nessun voto di scrutinio"
        );

        return;
    }

    let media =
        somma / numero;

    document.getElementById(
        "media-scrutinio"
    ).textContent =
        "Media scrutinio: " +
        media.toFixed(2);

    if (media >= 6) {

        document.getElementById(
            "esito-finale"
        ).textContent =
            "Esito finale: Ammesso";

    } else {

        document.getElementById(
            "esito-finale"
        ).textContent =
            "Esito finale: Non ammesso";
    }

    localStorage.setItem(
        "mediaScrutinio",
        document.getElementById(
            "media-scrutinio"
        ).textContent
    );

    localStorage.setItem(
        "esitoFinale",
        document.getElementById(
            "esito-finale"
        ).textContent
     ); }

     

window.onload = function() {

    let votiSalvati =
        localStorage.getItem("lista-voti");

    if (votiSalvati) {
        document.getElementById(
            "lista-voti"
        ).innerHTML = votiSalvati;
    }

    let ricevimentiSalvati =
        localStorage.getItem("ricevimenti");

    if (ricevimentiSalvati) {
        document.getElementById(
            "lista-ricevimenti"
        ).innerHTML = ricevimentiSalvati;
    }

    let scrutinioSalvato =
        localStorage.getItem("scrutinio");

    if (scrutinioSalvato) {
        document.getElementById(
            "lista-scrutinio"
        ).innerHTML = scrutinioSalvato;
    }

    let mediaScrutinio =
        localStorage.getItem("mediaScrutinio");

    if (mediaScrutinio) {
        document.getElementById(
            "media-scrutinio"
        ).textContent = mediaScrutinio;
    }

    let esitoFinale =
        localStorage.getItem("esitoFinale");

    if (esitoFinale) {
        document.getElementById(
            "esito-finale"
        ).textContent = esitoFinale;
    }

    let assenzeSalvate =
        localStorage.getItem("assenze");

    if (assenzeSalvate) {
        document.getElementById(
            "assenze"
        ).textContent = assenzeSalvate;
    }

    let avvisiSalvati =
        localStorage.getItem("lista-avvisi");

    if (avvisiSalvati) {
        document.getElementById(
            "lista-avvisi"
        ).innerHTML = avvisiSalvati;
    }

    let noteSalvate =
        localStorage.getItem("lista-note");

    if (noteSalvate) {
        document.getElementById(
            "lista-note"
        ).innerHTML = noteSalvate;
    }
};
// =========================
// ESPORTA BACKUP
// =========================

function esportaDati() {

    let dati = {

        voti:
            localStorage.getItem("lista-voti"),

        assenze:
            localStorage.getItem("assenze"),

        avvisi:
            localStorage.getItem("lista-avvisi"),

        note:
            localStorage.getItem("lista-note"),

        ricevimenti:
            localStorage.getItem("ricevimenti"),

        scrutinio:
            localStorage.getItem("scrutinio"),

        mediaScrutinio:
            localStorage.getItem("mediaScrutinio"),

        esitoFinale:
            localStorage.getItem("esitoFinale")
    };

    let testo =
        JSON.stringify(dati, null, 2);

    let blob =
        new Blob(
            [testo],
            { type: "application/json" }
        );

    let link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "backup-registro.json";

    link.click();

    alert("Backup esportato con successo");
}

// =========================
// IMPORTA BACKUP
// =========================

function importaDati(event) {

    let file =
        event.target.files[0];

    if (!file) return;

    let reader =
        new FileReader();

    reader.onload =
        function(e) {

        let dati =
            JSON.parse(
                e.target.result
            );

        if (dati.voti)
            localStorage.setItem(
                "lista-voti",
                dati.voti
            );

        if (dati.assenze)
            localStorage.setItem(
                "assenze",
                dati.assenze
            );

        if (dati.avvisi)
            localStorage.setItem(
                "lista-avvisi",
                dati.avvisi
            );

        if (dati.note)
            localStorage.setItem(
                "lista-note",
                dati.note
            );

        if (dati.ricevimenti)
            localStorage.setItem(
                "ricevimenti",
                dati.ricevimenti
            );

        if (dati.scrutinio)
            localStorage.setItem(
                "scrutinio",
                dati.scrutinio
            );

        if (dati.mediaScrutinio)
            localStorage.setItem(
                "mediaScrutinio",
                dati.mediaScrutinio
            );

        if (dati.esitoFinale)
            localStorage.setItem(
                "esitoFinale",
                dati.esitoFinale
            );

        alert(
            "Backup importato con successo. Aggiorna la pagina."
        );
    };

    reader.readAsText(file);
}

// =========================
// CANCELLA TUTTO
// =========================

function cancellaDati() {

    let conferma =
        confirm(
            "Vuoi davvero cancellare tutti i dati?"
        );

    if (!conferma) return;

    localStorage.clear();

    alert(
        "Tutti i dati sono stati cancellati. Aggiorna la pagina."
    );
}