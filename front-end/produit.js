function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();
    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            callbackFunc();
        }
        });
    }
}

ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    
    const createProduct = (data) => {
        console.log(data);
        const imgCamera = document.getElementById("imgCamera");
        const nameCamera = document.getElementById("nameCamera");
        const descriptionCamera = document.getElementById('descriptionCamera');
        const priceCamera = document.getElementById('priceCamera');
        const wrapperLenses = document.getElementById("wrapperLences");
        const numberOfProducts = document.getElementsByTagName("i").item(0);
        
        imgCamera.src = data.imageUrl;
        nameCamera.textContent = data.name;
        descriptionCamera.textContent = data.description;
        priceCamera.textContent = data.price;

        //Ajouter formulaire proposant le choix des objectis pour chaque caméra
        data.lenses.forEach(lense => {
            const option = document.createElement('option');
            option.textContent = lense;
            wrapperLenses.appendChild(option);                
        });

        //Incrémenter le nombre de produits ajoutés au panier
        var x = 1;
        const addBasket = document.getElementById("addBasketButton");
        
        let basket = JSON.parse(localStorage.getItem('basket'));
        console.log(basket);
        if (basket === null){
            basket = [];
        }
        //localStorage.setItem('orders', monobjet_json);
        
        addBasket.addEventListener("click", () => {
            //addToBasket();
            basket.push(data);
            localStorage.setItem('basket', JSON.stringify(basket));
            basket = JSON.parse(localStorage.getItem('basket'));
            countBasket();
            /*localStorage.setItem(JSON.stringify("camera"), JSON.stringify(data));
            let monobjet = localStorage.getItem('\"camera\"');
            console.log(localStorage);
            console.log(monobjet);
            let monObjet = JSON.parse(monobjet);
            console.log(monObjet);
            console.log(monObjet.price);*/

            //numberOfProducts.textContent = x;
            //x++;
            },false);   
    };

    

    if(productId !== "") {
        fetch("http://localhost:3000/api/cameras/"+productId)
            .then(res => {
                console.log(productId);
                if(res.ok){
                    res.json().then(data => {
                        createProduct(data); 
                        countBasket();
                    })
                } else {
                    console.log("ERREUR");
                }
        })
    }
});




