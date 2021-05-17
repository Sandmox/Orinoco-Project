// Vider le panier & retour à la page d'accueil
const emptyBasket = document.getElementById('emptyBasket');
emptyBasket.addEventListener("click", () => {
    localStorage.clear();
}, false);


fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {   
            countBasket();         
            console.log(data);
            console.log(localStorage);
            retrieveCameras();
        })
    } else {
        console.log("ERREUR");
    }
})

