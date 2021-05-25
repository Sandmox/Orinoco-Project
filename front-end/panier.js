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
            console.log(data);
        })
    } else {
        console.log("ERREUR");
    }
})

//----------------------------------UTILISATION DE LA METHODE POST-----------------------------//

// Création de l'objet "contact"
function ContactInfo (firstName, lastName, address, city, email){
    this.firstName = firstName,
    this.lastName = lastName,
    this.address = address,
    this.city = city,
    this.email = email};

let contact = new ContactInfo(document.getElementById('firstName').value,document.getElementById('lastName').value,document.getElementById('address').value,document.getElementById('city').value,document.getElementById('email').value);

console.log(contact);

// Création de l'array "products"
let monobjet = localStorage.getItem('basket');
let monObjet = JSON.parse(monobjet);
let products = [];

monObjet.forEach(element => {
    products.push(element._id)
});

console.log(products);

// Exécution de la requête POST
let toSend = {contact, products}
console.log(toSend);

function send(){   
fetch("http://localhost:3000/api/cameras/order", {
  method: "POST",
  headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
  },
  body: JSON.stringify(toSend),
})
.then(function(res) {
    if (res.ok) {return res.json()}
})
.then(function(value){
    console.log(value)
    return value;
})
.catch(function(error){})
} ;

send();

let payButton = document.getElementById('payButton');
payButton.addEventListener("submit", () => {
send()}
    );