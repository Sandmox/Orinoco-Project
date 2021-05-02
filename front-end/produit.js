




fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
        
        })
    } else {
        console.log("ERREUR");
    }
})