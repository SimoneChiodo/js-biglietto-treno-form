//Card Info
const infoCard = document.getElementById("info-card");
const inputName = document.getElementById("input-name");
const inputDistance = document.getElementById("input-distance");
const inputAge = document.getElementById("input-age");

//Card Biglietto
const ticketCard = document.getElementById("ticket-card");
const showName = document.getElementById("ticket-name");
const showDiscount = document.getElementById("ticket-discount");
const showWagon = document.getElementById("ticket-wagon");
const showCodeCP = document.getElementById("ticket-codeCP");
const showPrice = document.getElementById("ticket-price");

function generateButton() {
    // Converto e dichiaro le variabili necessarie
    let name = inputName.value;
    let distance = parseInt(inputDistance.value);
    let age = inputAge.value;
    let price = 0;
    let discountAmount = "Biglietto Standard";

    //Se commetto un errore non vedo più la card
    ticketCard.style.display = "none";

    // Se l'input Nome è errato
    if (name === "") {
        alert('La sezione "Nome Cognome" non deve essere vuota!');
        return;
    }
    if (!name.includes(" ")) {
        alert('La sezione "Nome Cognome" deve contenere 2 parole!');
        return;
    }
    // Se l'input Distanza è errato
    if (isNaN(distance)) {
        alert('La sezione "Km da percorrere" contiene un valore errato!');
        return;
    }
    // Se l'input Età è vuoto
    if (age === "") {
        alert('La sezione "Fascia d\'età" non ha alcun valore selezionato!');
        return;
    }
    // Se l'input Età è errato
    if (age !== "Minorenne" && age !== "Adulto" && age !== "Over 65") {
        alert('La sezione "Fascia d\'età" contiene un valore errato!');
        return;
    }

    // Calcolo prezzo
    price = distance * 0.21;

    // Se minorenne
    if (age === "Minorenne") {
        price = (price * 20) / 100;
        discountAmount = "Biglietto Giovani";
    }
    // Se over-65
    else if (age === "Over 65") {
        price = (price * 40) / 100;
        discountAmount = "Biglietto Anziani";
    }

    //Scrivo i dati all'interno della Card Biglietto
    showName.textContent = name;
    showDiscount.textContent = discountAmount;
    showWagon.textContent = generateNumber(0, 13);
    showCodeCP.textContent = generateNumber(10000, 99999);
    showPrice.textContent = price.toFixed(2) + " €";

    //Mostro la Card Biglietto
    ticketCard.style.display = "block";
}

function hiddenButton() {
    //Nascondo la Card Biglietto
    ticketCard.style.display = "none";
}

//Funzione generatrice di numeri
function generateNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
