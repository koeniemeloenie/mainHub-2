const getEnemy = (
  imageID,
  enemySpeed = 1,
  enemyStartPos = 100,
  enemyExtraPos = 1
) => {
  let sinusWaarde = 0;

  const properties = {
    x: enemyStartPos * enemyExtraPos,
    y: -128,
    width: 128,
    height: 128,
    speed: enemySpeed,
  };

  const draw = () => {
    context.drawImage(
      imageContainers[imageID],
      properties.x,
      properties.y,
      properties.width,
      properties.height
    );
  };

  return {
    draw,
    update,
  };
};

const enemies = [];

const phases = {
  1: {
    enemyCount: 3,
    duration: 999999999,
    imgIDS: [2, 2, 2],
    updates: [],
  },
  2: { enemyCount: 10, duration: 15000 },
};

const prePhase1 = {
  1: () => {
    activateMeteor = true;
    makeEnemies();
  },
};

const makeEnemies = () => {
  const marginX = canvas.width / 10;

  const enemyIntervalWidth = (canvas.width - marginX) / enemies.length;

  const startX = marginX / 2;

  const startPos = startX + i * enemyIntervalWidth;

  for (i = 0; i < phases[phase].enemyCount; i++) {
    const enemy = getEnemy(phases[phase].imgIDS[i], 1, startPos);
    const initiateUpdate = phases[phase].updates[i];

    const moveDown = createMoveDown(enemy);

    updates.push(moveDown);

    enemies.push();
  }
};

const createMoveDown = (enemy) => {
  return () => {
    enemy.properties.y += enemy.properties.enemySpeed;

    if (enemies.length === 0) treshold = 0;
  };
};
