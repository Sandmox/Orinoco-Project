// Afficher le prix total de la commande

function displayTotalPrice () {
    let totalPrice = document.getElementById('totalPrice');
    myCommand = JSON.parse(localStorage.getItem('basket'));
    let arrayPrice = [];
    myCommand.forEach(cam => {
        arrayPrice.push(cam.price);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let priceToPay = arrayPrice.reduce(reducer);
    totalPrice.textContent = priceToPay ;
}

displayTotalPrice();

// Afficher l'identifiant de commande 

function orderNumber () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomNumber2 = Math.floor(Math.random() * 1000) + 1;
    const orderId = document.getElementById("orderId");
    orderId.textContent = randomCharacter + "-" + randomNumber + "-" + randomCharacter2 + "-" + randomNumber2;
};

orderNumber();




