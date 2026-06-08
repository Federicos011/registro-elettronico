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
function aggiungiAvviso() {
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
    
            alert("Benvenuto Federico");
        }
    
        else if (
            utente === "Genitori" &&
            password === "1234"
        ) {
    
            ruolo = "genitore";
    
            document.getElementById("login").style.display = "none";
            document.getElementById("registro").style.display = "block";
    
            alert("Benvenuti Alessio e Nives");
        }
    
        else {
    
            alert("Utente o password errati");
    
        }
    }