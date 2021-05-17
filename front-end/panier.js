fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {   
            countBasket();   
            clearBasket();      
            console.log(data);
            console.log(localStorage);
            retrieveCameras();
        })
    } else {
        console.log("ERREUR");
    }
})

