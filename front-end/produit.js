/*let ids = [];
console.log(window.location);

for (let i = 0; i < ids.length; i++){
    console.log(ids[0][i]._id);
};

const createIds = (ids) => {
    ids[0].forEach(id => {
        console.log(ids[0][0]._id);
    });
}


fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
        ids.push(data);
        createIds(ids);
        console.log(data[0]._id);
        })
    } else {
        console.log("ERREUR");
    }
})*/

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

const createProduct = (product) => {
    console.log(product);
};

ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    const imgCamera = document.getElementById("imgCamera");
    const nameCamera = document.getElementById("nameCamera");
    const descriptionCamera = document.getElementById('descriptionCamera');
    const priceCamera = document.getElementById('priceCamera');
    const lense1 = document.getElementById('lense1');
    const lense2 = document.getElementById('lense2');

    /*const lensesType = [];
    const real_lenses = document.getElementById("real_lenses");
    lensesType[0].forEach(lense => {
        var ghost = document.getElementById("ghost");
        var lenseWrapper = ghost.cloneNode(true);
        lenseWrapper.style = null;
        var option = document.getElementsByTagName('option').item(0);
        lense.textContent = lense.lenses;
        real_lenses.appendChild(lenseWrapper);
    });*/


    if(productId !== "") {
        console.log(productId);
        fetch("http://localhost:3000/api/cameras/"+productId)
            .then(res => {
                console.log(productId);
                if(res.ok){
                    res.json().then(data => {
                        console.log(data);
                        createProduct(data);
                        /*lensesType.push(data);*/
                        imgCamera.src = data.imageUrl;
                        nameCamera.textContent = data.name;
                        descriptionCamera.textContent = data.description;
                        priceCamera.textContent = data.price;
                        lense1.textContent = data.lenses[0];
                        lense2.textContent = data.lenses[1];
                    })
                } else {
                    console.log("ERREUR");
                }
        })
    }
});


