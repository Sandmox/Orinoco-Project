const img = document.getElementById("img");

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img.src = data[0].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})




console.log("hello world");
