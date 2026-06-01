let listaVoti = document.getElementById("lista-voti");

function aggiungiVoto() {
    let materia = prompt("Materia:");
    let voto = prompt("Voto:");

    if (materia && voto) {
        let li = document.createElement("li");
        li.textContent = materia + ": " + voto;
        listaVoti.appendChild(li);
    }
}

function eliminaUltimoVoto() {
    if (listaVoti.lastElementChild) {
        listaVoti.removeChild(listaVoti.lastElementChild);
    }
}
function calcolaMediaVoti() {
    let lista = document.getElementById("lista-voti");
    let voti = lista.getElementsByTagName("li");

    let somma = 0;
    let numeroVoti = 0;

    for (let i = 0; i < voti.length; i++) {
        let testo = voti[i].textContent;

        let parti = testo.split(":");
        let voto = parseFloat(parti[1]);

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

    document.getElementById("media-voti").textContent =
        "Media voti: " + media.toFixed(2);
}
function aggiungiAssenza() {
    let elementoAssenze = document.getElementById("assenze");

    if (!elementoAssenze) {
        alert("Elemento assenze non trovato!");
        return;
    }

    let numero = parseInt(elementoAssenze.textContent) || 0;
    numero++;

    elementoAssenze.textContent = numero + " assenze";
}
function aggiungiAvviso() {
    let testoAvviso = prompt("Scrivi l'avviso:");

    if (testoAvviso) {
        let listaAvvisi = document.getElementById("lista-avvisi");

        let li = document.createElement("li");
        li.textContent = testoAvviso;

        listaAvvisi.appendChild(li);
    }
}
function eliminaPrimoAvviso() {
    let listaAvvisi = document.getElementById("lista-avvisi");

    if (listaAvvisi.firstElementChild) {
        listaAvvisi.removeChild(listaAvvisi.firstElementChild);
    }
}
function aggiungiNota() {
    let testoNota = prompt("Scrivi la nota disciplinare:");

    if (testoNota) {
        let listaNote = document.getElementById("lista-note");

        let li = document.createElement("li");
        li.textContent = testoNota;

        listaNote.appendChild(li);
    }
}
function eliminaUltimaNota() {
    let listaNote = document.getElementById("lista-note");

    if (listaNote.lastElementChild) {
        listaNote.removeChild(listaNote.lastElementChild);
    }
}
function aggiungiDisponibilita() {
    let data = prompt("Data:");
    let ora = prompt("Ora:");

    if (data && ora) {
        let lista = document.getElementById("lista-ricevimenti");

        let li = document.createElement("li");
        li.textContent =
            data + " - Ore " + ora + " | Stato: Libero";

        lista.appendChild(li);
    }
}

function prenotaRicevimento() {
    let lista = document.getElementById("lista-ricevimenti");

    if (!lista.firstElementChild) {
        alert("Nessuna disponibilità presente");
        return;
    }

    let genitore = prompt("Nome del genitore:");
    let motivo = prompt("Motivo del colloquio:");

    lista.firstElementChild.textContent +=
        " | Genitore: " + genitore +
        " | Motivo: " + motivo +
        " | Stato: Prenotato";
}

function confermaRicevimento() {
    let lista = document.getElementById("lista-ricevimenti");

    if (lista.firstElementChild) {
        lista.firstElementChild.textContent =
            lista.firstElementChild.textContent.replace(
                "Stato: Prenotato",
                "Stato: Confermato"
            );
    }
}

function annullaRicevimento() {
    let lista = document.getElementById("lista-ricevimenti");

    if (lista.firstElementChild) {
        lista.firstElementChild.textContent =
            lista.firstElementChild.textContent.replace(
                "Stato: Prenotato",
                "Stato: Annullato"
            );
    }
}
function aggiungiVotoScrutinio() {
    let materia = prompt("Materia:");
    let voto = prompt("Voto scrutinio:");

    if (materia && voto) {
        let lista = document.getElementById("lista-scrutinio");

        let li = document.createElement("li");
        li.textContent = materia + ": " + voto;

        lista.appendChild(li);
    }
}

function eliminaUltimoVotoScrutinio() {
    let lista = document.getElementById("lista-scrutinio");

    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

function calcolaScrutinioFinale() {
    let lista = document.getElementById("lista-scrutinio");
    let voti = lista.getElementsByTagName("li");

    let somma = 0;
    let numeroVoti = 0;

    for (let i = 0; i < voti.length; i++) {
        let testo = voti[i].textContent;
        let parti = testo.split(":");
        let voto = parseFloat(parti[1]);

        if (!isNaN(voto)) {
            somma += voto;
            numeroVoti++;
        }
    }

    if (numeroVoti === 0) {
        alert("Nessun voto di scrutinio presente");
        return;
    }

    let media = somma / numeroVoti;

    document.getElementById("media-scrutinio").textContent =
        "Media scrutinio: " + media.toFixed(2);

    if (media >= 6) {
        document.getElementById("esito-finale").textContent =
            "Esito finale: Ammesso";
    } else {
        document.getElementById("esito-finale").textContent =
            "Esito finale: Non ammesso";
    }
}
function salvaDati() {
    localStorage.setItem("pagina", document.body.innerHTML);
}

function caricaDati() {
    let dati = localStorage.getItem("pagina");

    if (dati) {
        document.body.innerHTML = dati;
    }
}

window.onload = caricaDati;
let ruolo = "";

function accedi() {

    let utente = document.getElementById("utente").value;
    let password = document.getElementById("password").value;

    if (
        utente === "maestro Fede" &&
        password === "Federico"
    ) {

        ruolo = "docente";

        document.getElementById("login").style.display = "none";
        document.getElementById("registro").style.display = "block";

        alert("Benvenuto Maestro Fede");
    }

    else if (
        utente === "Genitori" &&
        password === "1234"
    ) {

        ruolo = "genitore";

        document.getElementById("login").style.display = "none";
        document.getElementById("registro").style.display = "block";

        nascondiPulsantiDocente();

        alert("Benvenuti Genitori");
    }

    else {

        alert("Utente o password errati");

    }
}

function nascondiPulsantiDocente() {

    let pulsanti = document.getElementsByTagName("button");

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
function calcolaEsitoFinale() {

    let lista = document.getElementById("lista-scrutinio");

    let voti = lista.getElementsByTagName("li");

    let somma = 0;
    let numeroVoti = 0;

    for (let i = 0; i < voti.length; i++) {

        let testo = voti[i].textContent;

        let parti = testo.split(":");

        let voto = parseFloat(parti[1]);

        if (!isNaN(voto)) {
            somma += voto;
            numeroVoti++;
        }
    }

    if (numeroVoti === 0) {

        alert("Inserisci prima i voti di scrutinio");

        return;
    }

    let media = somma / numeroVoti;

    if (media >= 6) {

        document.getElementById("esito-finale").textContent =
            "Esito finale: Ammesso";

    } else {

        document.getElementById("esito-finale").textContent =
            "Esito finale: Non ammesso";

    }
}
localStorage.setItem("voti", listaVoti.innerHTML);
window.onload = function() {
    let votiSalvati = localStorage.getItem("voti");

    if (votiSalvati) {
        document.getElementById("lista-voti").innerHTML = votiSalvati;
    }
}
localStorage.setItem(
    "assenze",
    document.getElementById("lista-assenze").innerHTML
);
let assenzeSalvate = localStorage.getItem("assenze");

if (assenzeSalvate) {
    document.getElementById("lista-assenze").innerHTML =
        assenzeSalvate;
}
localStorage.setItem(
    "avvisi",
    document.getElementById("lista-avvisi").innerHTML
);
let avvisiSalvati = localStorage.getItem("avvisi");

if (avvisiSalvati) {
    document.getElementById("lista-avvisi").innerHTML =
        avvisiSalvati;
}
localStorage.setItem(
    "note",
    document.getElementById("lista-note").innerHTML
);
let noteSalvate = localStorage.getItem("note");

if (noteSalvate) {
    document.getElementById("lista-note").innerHTML =
        noteSalvate;
}localStorage.setItem(
    "ricevimenti",
    document.getElementById("lista-ricevimenti").innerHTML
);
let ricevimentiSalvati =
    localStorage.getItem("ricevimenti");

if (ricevimentiSalvati) {
    document.getElementById("lista-ricevimenti").innerHTML =
        ricevimentiSalvati;
}