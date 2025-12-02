let spriteSheet;
let playerX;
let playerY;
let spriteWidth = 450 / 7;
let spriteHeight = 88;
let currentFrameIndex = 0;
let moveSpeed = 5;

function preload() {
  spriteSheet = loadImage('WALK/all0.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = windowWidth / 2 - spriteWidth / 2;
  playerY = windowHeight / 2 - spriteHeight / 2;
}

function draw() {
  background('#e6ccb2');
  
  // 處理左右移動
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= moveSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += moveSpeed;
  }
  
  // 顯示精靈圖
  let frameX = currentFrameIndex * spriteWidth;
  image(spriteSheet, playerX, playerY, spriteWidth, spriteHeight, frameX, 0, spriteWidth, spriteHeight);
  
  // 更新幀索引（循環動畫）
  currentFrameIndex = (currentFrameIndex + 1) % 7;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
