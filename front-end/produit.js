const lense1a = document.getElementById("lense1a");
const lense1b = document.getElementById("lense1b");

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            lense1a.textContent = data[0].lenses[0];
            lense1b.textContent = data[0].lenses[1];
        })
    } else {
        console.log("ERREUR");
    }
})