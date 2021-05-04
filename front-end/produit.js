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

    if(productId !== "") {
        console.log(productId);
        fetch("http://localhost:3000/api/cameras/"+productId)
            .then(res => {
                console.log(productId);
                if(res.ok){
                    res.json().then(data => {
                        createProduct(data);
                    })
                } else {
                    console.log("ERREUR");
                }
        })
    }
});
