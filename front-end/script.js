/*const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const name4 = document.getElementById("name4");
const name5 = document.getElementById("name5");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const price4 = document.getElementById("price4");
const price5 = document.getElementById("price5");

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {
            img1.src = data[0].imageUrl
            img2.src = data[1].imageUrl
            img3.src = data[2].imageUrl
            img4.src = data[3].imageUrl
            img5.src = data[4].imageUrl
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
            name1.textContent = data[0].name;
            name2.textContent = data[1].name;
            name3.textContent = data[2].name;
            name4.textContent = data[3].name;
            name5.textContent = data[4].name;
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
            price1.textContent = data[0].price;
            price2.textContent = data[1].price;
            price3.textContent = data[2].price;
            price4.textContent = data[3].price;
            price5.textContent = data[4].price;
        })
    } else {
        console.log("ERREUR");
    }
})

img1.addEventListener("click", event => {
    name1.textContent = "J'ai cliqué!"
});*/

const cameras = [];
console.log(cameras);
const createCameras = (cameras) => {
    const camerasWrapper = document.getElementById("cameras");
    cameras[0].forEach(camera => {
        /*var ghost = document.getElementById("ghost");*/
        var cameraWrapper = ghost.cloneNode(true);
        cameraWrapper.style = null;
        /*cameraWrapper.classList = "camera";*/
        var img = cameraWrapper.getElementsByTagName('img').item(0);
        var nameCam = cameraWrapper.getElementsByTagName('h2').item(0);
        var priceCam = cameraWrapper.getElementsByTagName('p').item(0);
        img.setAttribute("src", camera.imageUrl);
        nameCam.textContent = camera.name;
        priceCam.textContent = camera.price;
        camerasWrapper.appendChild(cameraWrapper);
    });
};

fetch("http://localhost:3000/api/cameras")
.then(res => {
    console.log(res);
    if(res.ok){
        res.json().then(data => {            
            cameras.push(data);
            createCameras(cameras);
        })
    } else {
        console.log("ERREUR");
    }
})




