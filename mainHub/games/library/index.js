const txt = {
  default: (msg = "hello world", x = innerWidth / 2, y = innerHeight / 2) => {
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "black";
    context.font = "bold 20px timesnewroman";
    context.beginPath();
    context.fillText(msg, x, y);
    // console.log(msg);
  },
};

const getCanvas = () => {
  const canvas = document.createElement("canvas");

  return canvas;
};

const setCanvasToDiv = (canvas, id) => {
  const container = document.getElementById(id);
  container.appendChild(canvas);
};

const setCanvasSize = (canvas, width, height) => {
  canvas.width = width;
  canvas.height = height;
};

const getContext = (canvas) => {
  return canvas.getContext("2d");
};

const setCanvasBackgroundColor = (canvas, backgroundColor) => {
  canvas.style.backgroundColor = backgroundColor;
};

const getDefaultSetup = () => {
  const canvas = getCanvas();
  const context = canvas.getContext("2d");
  setCanvasToDiv(canvas, "container");
  setCanvasSize(canvas, innerWidth, innerHeight);
  setCanvasBackgroundColor(canvas, "lightskyblue");

  return {
    canvas,
    context,
  };
};

const getStartPos = (askedString) => {
  let y = -1;
  let x = -1;

  for (let j = 0; j < lvl1.length; j++) {
    if (y != -1) break;
    for (let i = 0; i < lvl1[j].length; i++) {
      if (lvl1[j][i] == askedString) {
        y = j;
        x = i;
        break;
      }
    }
  }

  return { x, y };
};

// const getTile = (xInc, yInc) => {
//   const xAbs = Math.abs(xInc);
//   const yAbs = Math.abs(yInc);
// };
