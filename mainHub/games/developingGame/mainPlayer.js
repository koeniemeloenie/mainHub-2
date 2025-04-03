let mainPlayer;

const createMainPlayer = () => {
    const properties = {
        x: 0,
        y: canvas.height / 8 * 5,
        width: 128,
        height: 128,
        img: imageContainers[0],
        left: false,
        right: false,
    }


    const update = () => {
        if(properties.left){
            properties.x -= 10;
        }
        if(properties.right){
            console.log("nooit")
            properties.x += 10;
        }
    } 

    const draw = () => {
        context.drawImage(properties.img, properties.x, properties.y, properties.width, properties.height);
    }

    const move = (key) => {
        if(key == "KeyA")properties.left = true;
        else if(key == "KeyD")properties.right = true;
    }

    const stop = (key) => {
        if(key == "KeyA")properties.left = false;
        else if(key == "KeyD")properties.right = false;
    }
    
    return{
        update,
        draw,
        move,
        stop,
    }
}

//imageStuff
const imagePaths = [
    "smuppie.webp",
    "minion.png",
    "minion2.png",
    "shuttle.png",
]

const imageContainers = [
]

const loadImage = (index, imagePath, imageContainer) => {
    imageContainer.src = `./images/${imagePath}`
    imageContainer.onload = () => {
        imageContainers[index] = imageContainer;
        if(index +1 == imagePaths.length){
            console.log(imageContainers)
            activateCanvas();
        }
    }
}

for (let i = 0; i < imagePaths.length; i++) {
    loadImage(i, imagePaths[i], new Image());
}

// const imageProperties = {
//     loaded: 4,
//     count: 0,
// }

// shipProperties.img.src = "./images/minion.png"
// shipProperties.img.onload = () => {
//     imageProperties.count += 1;
    
//     if( imageProperties.count == imageProperties.loaded){
//         activateCanvas();
//     }
// }
// shipProperties.img.src = "./images/smuppie.webp"
// shipProperties.img.onload = () => {
//     imageProperties.count += 1;
    
//     if( imageProperties.count == imageProperties.loaded){
//         activateCanvas();
//     }
// }
// shipProperties.img.src = "./images/minion2.png"
// shipProperties.img.onload = () => {
//     imageProperties.count += 1;
    
//     if( imageProperties.count == imageProperties.loaded){
//         activateCanvas();
//     }
// }
// shipProperties.img.src = "./images/shuttle.png"
// shipProperties.img.onload = () => {
//     imageProperties.count += 1;
    
//     if( imageProperties.count == imageProperties.loaded){
//         activateCanvas();
//     }
// }
