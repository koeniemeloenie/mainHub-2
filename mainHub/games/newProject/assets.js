const imagePaths = ["player.png"];

const imageContainers = [];

const loadImage = (index, imagePath, imageContainer) => {
  imageContainer.src = `./images/${imagePath}`;
  imageContainer.onload = () => {
    imageContainers[index] = imageContainer;
    if (index + 1 == imagePaths.length) {
      loop();
    }
  };
};

const loadImages = () => {
  for (let i = 0; i < imagePaths.length; i++) {
    loadImage(i, imagePaths[i], new Image());
  }
};
