const inputDistance = document.getElementById("input-distance");
const inputAge = document.getElementById("input-age");

function submitButton() {
    // Converto gli input in numero
    let distance = parseInt(inputDistance.value);
    let age = parseInt(inputAge.value);
    let price = 0;

    if (!isNaN(distance) && !isNaN(age)) {
        // Calcolo prezzo
        price = distance * 0.21;

        // Se minorenne
        if (age < 18) {
            price = (price * 20) / 100;
        }
        // Se over-65
        else if (age >= 65) {
            price = (price * 40) / 100;
        }

        // output
        console.log(price);
    }
}
