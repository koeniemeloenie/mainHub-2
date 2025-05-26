const { canvas, context } = getDefaultSetup();

const lvl1 = levels[1];
const getTile = (xInc, yInc) => {
  const xAbs = Math.trunc(xInc);
  const yAbs = Math.trunc(yInc);

  if (xInc >= lvl1[0].length || xInc <= 0 || yInc <= 0 || yInc > lvl1.length)
    return " ";
  const tile = lvl1[yAbs][xAbs];
  return tile;
  // console.log(tile);
};

let screenBlockLength = innerHeight / lvl1.length;

let offsetX = 0;

const drawmap = () => {
  for (let y = 0; y < lvl1.length; y++) {
    // rows
    for (let x = 0; x < lvl1[y].length; x++) {
      // columns
      switch (lvl1[y][x]) {
        case "X":
          context.beginPath();
          context.lineWidth = 1;
          context.fillStyle = "darkred";
          context.strokeStyle = "darkred";
          context.rect(
            x * screenBlockLength + offsetX,
            y * screenBlockLength,
            screenBlockLength,
            screenBlockLength
          );
          context.fill();
          context.stroke();
          break;
        case ".":
          //
          break;
      }
    }
  }
};

const playerPos = getStartPos("S");

const loop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  offsetX -= 0;

  player.update();

  drawmap();
  player.draw();

  requestAnimationFrame(loop);
};

const player = getPlayer(playerPos);
loadImages();
