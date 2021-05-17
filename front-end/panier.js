fetch("http://localhost:3000/api/cameras")
.then(res => {
    if(res.ok){
        res.json().then(data => {   
            countBasket();   
            clearBasket();      
            retrieveCameras();
        })
    } else {
        console.log("ERREUR");
    }
})

