const particles = [];
const meteor = getMeteor();

for (let i = 0; i < 5000; i++) {
  const variable = Math.random() * 100;

  if (variable < 97) {
    particles.push(getParticle(1));
  }
  if (variable > 97) {
    particles.push(getParticle(Math.random() * 2 + 1));
  }
}

let phase = 0;
let tElapsed = 0;
let oldTimeStamp = 0;
let tInterval = 0;
let treshold = getRandomNumber(1000, 0, 1);
let activateMeteor = false;

const animate = (newTimeStamp) => {
  // Background stuff
  tInterval = newTimeStamp - oldTimeStamp;
  tElapsed += tInterval;

  oldTimeStamp = newTimeStamp;

  if (tElapsed > treshold) {
    phase++;
    tElapsed = 0;

    treshold = phases[phase].duration;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < updates.length; i++) updates[i]();

  requestAnimationFrame(animate);
};

const updates = [];

const update1 = () => {
  for (let i = 0; i < 500; i++) {
    particles[i].update();
    particles[i].draw();
  }

  if (activateMeteor) {
    meteor.update();
    meteor.draw();
  }

  // Ship stuff
  mainPlayer.update();
  mainPlayer.draw();
};

updates.push(update1);
