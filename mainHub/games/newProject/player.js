const getPlayer = (startPos) => {
  const pos = startPos;

  const properties = {
    acc: 0,
    vel: 0.0,
    falling: false,
    move: { up: false, down: false, left: false, right: false },
    face: "up",
    collisions: { tL: false, tR: false, bR: false, bL: false },
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
    pos.y += properties.vel;

    if (properties.move.right == true) pos.x += 0.1;
    if (properties.move.up == true) pos.y -= 0.1;
    if (properties.move.down == true) pos.y += 0.1;
    if (properties.move.left == true) pos.x -= 0.1;

    properties.collisions.tL = getTile(pos.x, pos.y);
    properties.collisions.tR = getTile(pos.x + 0, 98, pos.y);
    properties.collisions.bR = getTile(pos.x + 0.98, pos.y + 0, 98);
    properties.collisions.bL = getTile(pos.x, pos.y + 0, 98);

    console.log(properties.collisions.bL);
    if (properties.collisions.bL == "X") {
      console.log(pos.y);
      pos.y = Math.trunc(pos.y);
      console.log(pos.y);
    }
    if (properties.collisions.tR == "X") {
      pos.y = Math.ceil(pos.y);
    }
    if (properties.collisions.bR == "X") {
      pos.y = Math.trunc(pos.y);
    }
    if (properties.collisions.tL == "X") {
      pos.y = Math.ceil(pos.y);
    }

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

    txt.default(
      `TL: ${properties.collisions.tL} TR: ${properties.collisions.tR}`,
      (pos.x + 0.5) * screenBlockLength,
      (pos.y - 0.3) * screenBlockLength
    );
    txt.default(
      `BL: ${properties.collisions.bL} BR: ${properties.collisions.bR}`,
      (pos.x + 0.5) * screenBlockLength,
      (pos.y + 1.3) * screenBlockLength
    );
  };

  return { update, draw };
};
