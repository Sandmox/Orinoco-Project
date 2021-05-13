// Vider le panier & retour à la page d'accueil
/*const emptyBasket = document.getElementById('emptyBasket');
emptyBasket.addEventListener("click", () => {
    localStorage.clear();
    window.location = "file:///Users/Alex/Desktop/Orinoco/front-end/index.html"
}, false);*/

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {            
            console.log(data);
            console.log(localStorage);
            //localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data));
            /*console.log(localStorage);
            let monobjet = localStorage.getItem('\"camera\"');
            console.log(monobjet);
            let monObjet = JSON.parse(monobjet);
            console.log(monObjet);
            console.log(localStorage.key(0));*/
        })
    } else {
        console.log("ERREUR");
    }
})

