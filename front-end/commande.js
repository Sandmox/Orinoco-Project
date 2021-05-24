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

/*function orderNumber () {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomNumber2 = Math.floor(Math.random() * 1000) + 1;
    const orderId = document.getElementById("orderId");
    orderId.textContent = randomCharacter + "-" + randomNumber + "-" + randomCharacter2 + "-" + randomNumber2;
};

orderNumber();*/
const testSubmit = document.getElementById('submit');
const myForm = document.getElementById("myForm");
console.log(myForm);
console.log(testSubmit);

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

// Mise en place de la requête POST
let toSend = {contact, products}
console.log(toSend)

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
}) ;


/*function send(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: document.getElementById("value").value})
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        document
          .getElementById("result")
          .innerText = value.postData.text;
    });
  }
  
  document
    .getElementById("testForm")
    .addEventListener("submit", send);*/