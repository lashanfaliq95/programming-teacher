var game;
var model;
var emitter;
var G;
var controller;
var mediaManager;

window.onload = function () {
  var isMobile = navigator.userAgent.indexOf('Mobile');
  if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf('Tablet');
  }

  if (isMobile === -1) {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-content',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          debug: false,
        },
      },
      scene: [SceneLoad, SceneTitle, SceneMain, SceneOver],
    };
  } else {
    var config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'game-content',
      scene: [SceneLoad, SceneTitle, SceneMain, SceneOver],
    };
  }

  G = new Constants();
  model = new Model();
  model.isMobile = isMobile;
  game = new Phaser.Game(config);
};
