const cameras = [];
const createCameras = (cameras) => {
    const camerasWrapper = document.getElementById("lenses");
    cameras[0].forEach(camera => {
        console.log(cameras[0][0].lenses);
        var ghost = document.getElementById("ghost");
        var cameraWrapper = ghost.cloneNode(true);
        cameraWrapper.style = null;
        cameraWrapper.classList = "camera";
        var nameCam = cameraWrapper.getElementsByTagName('option').item(0);
        nameCam.textContent = camera.lenses[0];
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