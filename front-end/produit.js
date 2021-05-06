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

        imgCamera.src = data.imageUrl;
        nameCamera.textContent = data.name;
        descriptionCamera.textContent = data.description;
        priceCamera.textContent = data.price;

        data.lenses.forEach(lense => {
            const option = document.createElement('option');
            option.textContent = lense;
            wrapperLenses.appendChild(option);                
        });

        const basket = document.getElementById("basketButton");
        basket.addEventListener("click", () => {
            localStorage.setItem('order', JSON.stringify(data));
            
            
        }, false);

    };

    if(productId !== "") {
        console.log(productId);
        fetch("http://localhost:3000/api/cameras/"+productId)
            .then(res => {
                console.log(productId);
                if(res.ok){
                    res.json().then(data => {
                        console.log(data.lenses);
                        createProduct(data);  
                    })
                } else {
                    console.log("ERREUR");
                }
        })
    }
});




