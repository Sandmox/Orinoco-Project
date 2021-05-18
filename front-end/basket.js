function getBasket(){
    let basket = JSON.parse(localStorage.getItem('basket'));
       if (basket === null){
           return basket = [];
        } else {
            return basket;
        }
};

/*function addToBasket(){
    let basket = JSON.parse(localStorage.getItem('basket'));
    if (basket === null){
        basket = [];
    }
    basket.push(data);
    localStorage.setItem('basket', JSON.stringify(basket));
    basket = JSON.parse(localStorage.getItem('basket'));
};*/

function countBasket(){
    const numberOfProducts = document.getElementsByTagName("i").item(0);
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket === null){
        numberOfProducts.textContent = 0;
    }else{
        numberOfProducts.textContent = basket.length;
    }
};

function retrieveCameras () {
    let monobjet = localStorage.getItem('basket');
    let monObjet = JSON.parse(monobjet);
    monObjet.forEach(element => {
        const camerasWrapper = document.getElementById("cameras2");
        var ghost2 = document.getElementById("ghost2");
        var cameraWrapper = ghost2.cloneNode(true);
        cameraWrapper.style = null;
        var img = cameraWrapper.getElementsByTagName('img').item(0);
        var nameCam = cameraWrapper.getElementsByTagName('h2').item(0);
        var priceCam = cameraWrapper.getElementsByTagName('p').item(0);
        var link = cameraWrapper.getElementsByTagName('a').item(0);
        img.setAttribute("src", element.imageUrl);
        var productId = element._id;
        link.setAttribute("href", "./produit.html?id="+productId);
        nameCam.textContent = element.name;
        priceCam.textContent = element.price;
        camerasWrapper.appendChild(cameraWrapper);
    });
}

// Vider le panier
function clearBasket (){
    const emptyBasket = document.getElementById('emptyBasket');
    emptyBasket.addEventListener("click", () => {
    localStorage.clear();
}, false);
}
      

