const getPlayer = (startPos) => {
  const pos = startPos;

  const properties = {
    acc: 0,
    vel: 0.0,
    falling: false,
    move: { up: false, down: false, left: false, right: false },
    face: "up",
    collisions: { tL: null, tR: null, bR: null, bL: null },
    move: { up: false, down: false, left: false, right: false },
  };

  addEventListener("keyup", (evt) => {
    if (evt.code == "Space" && properties.falling == false) {
      properties.vel = -properties.vel;
    }

    if (evt.code == "KeyW") properties.move.up = false;
    if (evt.code == "KeyA") properties.move.left = false;
    if (evt.code == "KeyS") properties.move.down = false;
    if (evt.code == "KeyD") properties.move.right = false;
  });

  addEventListener("keydown", (evt) => {
    if (evt.code == "KeyW") properties.move.up = true;
    if (evt.code == "KeyA") properties.move.left = true;
    if (evt.code == "KeyS") properties.move.down = true;
    if (evt.code == "KeyD") properties.move.right = true;
  });

  const update = () => {
    properties.collisions.tL = getTile(pos.x, pos.y);
    properties.collisions.tR = getTile(pos.x + 1, pos.y);
    properties.collisions.bR = getTile(pos.x + 1, pos.y + 1);
    properties.collisions.bL = getTile(pos.x, pos.y + 1);
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
    txt.default(
      `TL: ${properties.collisions.tL} TR: ${properties.collisions.tL}`,
      (pos.x + 0.5) * screenBlockLength,
      (pos.y - 0.3) * screenBlockLength
    );
    txt.default(
      `BL: ${properties.collisions.tL} BR: ${properties.collisions.tL}`,
      (pos.x + 0.5) * screenBlockLength,
      (pos.y + 1.3) * screenBlockLength
    );
  };

  return { update, draw };
};
