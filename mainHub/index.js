function navigateTo() {
  console.log(
    window.devicePixelRatio,
    window.screen.height * window.devicePixelRatio,
    window.screen.width * window.devicePixelRatio
  );
  // window.location.href = 'https://koeniemeloenie.github.io/paintIt/';
  window.open("games/paintIt/index.html", "paintIt-popUp");
}
function navigateToTwo() {
  console.log(
    window.devicePixelRatio,
    window.screen.height * window.devicePixelRatio,
    window.screen.width * window.devicePixelRatio
  );

  window.open("games/developingGame/index.html", "developingGame-popUp");
}
function navigateToThree() {
  console.log(
    window.devicePixelRatio,
    window.screen.height * window.devicePixelRatio,
    window.screen.width * window.devicePixelRatio
  );

  window.open("games/newProject/index.html", "gravity-switch    -popUp");
}
