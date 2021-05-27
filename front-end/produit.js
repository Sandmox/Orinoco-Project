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
        const imgCamera = document.getElementById("imgCamera");
        const nameCamera = document.getElementById("nameCamera");
        const descriptionCamera = document.getElementById('descriptionCamera');
        const priceCamera = document.getElementById('priceCamera');
        const wrapperLenses = document.getElementById("wrapperLences");
        const numberOfProducts = document.getElementsByTagName("i").item(0);
        
        imgCamera.src = data.imageUrl;
        nameCamera.textContent = data.name;
        descriptionCamera.textContent = data.description;
        priceCamera.textContent = data.price + " €";

        //Ajouter formulaire proposant le choix des objectifs pour chaque caméra
        data.lenses.forEach(lense => {
            const option = document.createElement('option');
            option.textContent = lense;
            wrapperLenses.appendChild(option);                
        });

        //Incrémenter le nombre de produits ajoutés au panier
        var x = 1;
        const addBasket = document.getElementById("addBasketButton");
        
        let basket = JSON.parse(localStorage.getItem('basket'));
        if (basket === null){
            basket = [];
        }
        
        addBasket.addEventListener("click", () => {
            const addCameras = document.getElementById("number");
            for (let i = 1; i <= addCameras.value; i++){
                basket.push(data);
            };
            localStorage.setItem('basket', JSON.stringify(basket));
            basket = JSON.parse(localStorage.getItem('basket'));
            countBasket();
            },false);   
    };

    if(productId !== "") {
        fetch("http://localhost:3000/api/cameras/"+productId)
            .then(res => {
                if(res.ok){
                    res.json().then(data => {
                        createProduct(data); 
                        countBasket();
                        console.log(data);
                    })
                } else {
                    console.log("ERREUR");
                }
        })
    }
});




