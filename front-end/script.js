const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img1.src = data[0].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img2.src = data[1].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img3.src = data[2].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img4.src = data[3].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img5.src = data[4].imageUrl
        })
    } else {
        console.log("ERREUR");
    }
})




console.log("hello world");
