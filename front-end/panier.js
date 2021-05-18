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

fetch("http://localhost:3000/api/cameras")
.then(res => {
    if(res.ok){
        res.json().then(data => {   
            countBasket();   
            clearBasket();      
            retrieveCameras();
            displayTotalPrice();
        })
    } else {
        console.log("ERREUR");
    }
})

