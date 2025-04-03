const getPlayer = (startPos) => {
  const pos = startPos;

  const properties = {
    acc: 0,
    vel: 0.05,
    falling: false,
    move: { up: false, down: false, left: false, right: false },
    face: "up",
  };

  addEventListener("keyup", (evt) => {
    if (evt.code == "Space" && properties.falling == false) {
      properties.vel = -properties.vel;
    }
  });

  const update = () => {
    pos.y += properties.vel;
    let val = getTile(pos.x, pos.y + 1);
    if (val == " ") console.log("game over!");
  };

  const draw = () => {
    context.drawImage(
      imageContainers[0],
      pos.x * screenBlockLength,
      pos.y * screenBlockLength,
      screenBlockLength,
      screenBlockLength
    );

    context.strokeStyle = "chartreuse";
    context.lineWidth = 5;
    context.beginPath();
    context.arc(
      pos.x * screenBlockLength,
      pos.y * screenBlockLength + screenBlockLength,
      15,
      0,
      2 * Math.PI
    );

    context.stroke();
  };

  return { update, draw };
};
