const cameras = [];
const createCameras = (cameras) => {
    const camerasWrapper = document.getElementById("cameras");
    cameras[0].forEach(camera => {
        var ghost = document.getElementById("ghost");
        var cameraWrapper = ghost.cloneNode(true);
        cameraWrapper.style = null;
        /*cameraWrapper.classList = "camera";*/
        var img = cameraWrapper.getElementsByTagName('img').item(0);
        var nameCam = cameraWrapper.getElementsByTagName('h2').item(0);
        var priceCam = cameraWrapper.getElementsByTagName('p').item(0);
        var link = cameraWrapper.getElementsByTagName('a').item(0);
        img.setAttribute("src", camera.imageUrl);
        var productId = camera._id;
        link.setAttribute("href", "./produit.html?id="+productId);
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
            console.log(data);          
            cameras.push(data);
            createCameras(cameras);
        })
    } else {
        console.log("ERREUR");
    }
})





