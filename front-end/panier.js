const emptyBasket = document.getElementById('emptyBasket');
emptyBasket.addEventListener("click", () => {
    localStorage.clear();
    window.location = "file:///Users/Alex/Desktop/Orinoco/front-end/index.html"
}, false);

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {            
            console.log(data);
        })
    } else {
        console.log("ERREUR");
    }
})