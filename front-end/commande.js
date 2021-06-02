// Afficher le prix total de la commande

function displayTotalPrice () {
    let totalPrice = document.getElementById('totalPrice');
    myCommand = JSON.parse(localStorage.getItem('basket'));
    let arrayPrice = [];
    myCommand.forEach(cam => {
        arrayPrice.push(cam.price);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let priceToPay = arrayPrice.reduce(reducer) + " €";
    totalPrice.textContent = priceToPay;
}

displayTotalPrice();

// Afficher le numéro de commande

function getOrderId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderId = urlParams.get('id');
    const displayOrderId = document.getElementById('orderId');
    displayOrderId.textContent = orderId;
};

getOrderId();

const backHome = document.getElementById("backHome");
backHome.addEventListener("click", (e) => {
    localStorage.clear();
});

