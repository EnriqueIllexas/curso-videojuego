/*
const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")
const btnDown = document.querySelector("#down")

let canvasSize;
let elementsSize;

const playerPosition = {
    x: undefined,
    y: undefined,
}
window.addEventListener("load",setCanvasSize);
window.addEventListener("resize", setCanvasSize);


function setCanvasSize(){
    let canvasSize;
    if(window.innerHeight > innerWidth){
        canvasSize = window.innerWidth * 0.4;
    }
    else{
        canvasSize = window.innerHeight * 0.59;
    }


    canvas.setAttribute("width", canvasSize)
    canvas.setAttribute("height", canvasSize)

    elementsSize = (canvasSize / 10) - 1;
    startGame();
}
function startGame(){
    //min 17
    
    game.font = elementsSize + "px sans-serif";
    game.textAlign = "end"

    
    const map = maps[0];
    //agarra el primer mapa, lo limpiamos(quitamos los espacios en blanco), el fin del elemento va a ser cuando hayga un salto de linea
    const mapRows = map.trim().split("\n");
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols})

    game.clearRect(0,0,canvasSize, canvasSize);
    
    mapRowCols.forEach((row , rowI)=> {
        row.forEach((col, colI) => {
            const emoji =  emojis[col]
            const posX = elementsSize * (colI + 1) + 15; 
            const posY = elementsSize * (rowI + 1);

            if(col == "O"){
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                  }
            }

            game.fillText(emoji, posX, posY);
            console.log({row, rowI, col, colI})
        });
      });

      movePlayer();
}

function movePlayer(){
    game.fillText(emojis["PLAYER"], playerPosition.x,playerPosition.y);
}

window.addEventListener("keydown", moveByKeys)
btnUp.addEventListener("click", moverUp);
btnLeft.addEventListener("click", moverLeft);
btnRight.addEventListener("click", moverRight);
btnDown.addEventListener("click", moverDown);

function moveByKeys(event){
    if(event.key == "ArrowUp")   moverUp();
    else if(event.key == "w")   moverUp();  
    else if(event.key == "ArrowLeft")moverLeft();
    else if(event.key == "a") moverLeft();
    else if(event.key == "ArrowRight")  moverRight();
    else if(event.key == "d") moverRight();
    else if(event.key == "ArrowDown")  moverDown();
    else if(event.key == "s") moverDown();
    
    
    
}
function moverUp(){
    console.log("mover arriba")
    playerPosition.y -= elementsSize;
    
    startGame();
}
function moverLeft(){
    console.log("mover izquierda")
    playerPosition.x -= elementsSize;
    startGame();
}
function moverRight(){
    console.log("mover derecha")
    playerPosition.x += elementsSize;
    startGame();
}
function moverDown(){
    console.log("mover abajo")
    playerPosition.y += elementsSize;
    startGame();
}
*/
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[0];
  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowCols});
  
  game.clearRect(0,0,canvasSize, canvasSize);
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);

      if (col == 'O') {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      }
      
      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();
}

function movePlayer() {
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}
function moveUp() {
  console.log('Me quiero mover hacia arriba');
  playerPosition.y -= elementsSize;
  startGame();
}
function moveLeft() {
  console.log('Me quiero mover hacia izquierda');
  playerPosition.x -= elementsSize;
  startGame();
}
function moveRight() {
  console.log('Me quiero mover hacia derecha');
  playerPosition.x += elementsSize;
  startGame();
}
function moveDown() {
  console.log('Me quiero mover hacia abajo');
  playerPosition.y += elementsSize;
  startGame();
}

//PA EL DICCIONARIO

//fillRect = crea un rectangulo. Se tienen que inicializar con 4 valores los cuales son : eje x, eje y, largo y ancho
//clearRect = elimina un elemento del canvas
//fillStyle = 
//fillText = Crea un texto ("platzi", 5,5)
/*split = ejem: "hola" lo que hace split es regrear valor a valor y saldria: "h", "0", etc, formando un arreglo bidimensional */
//trim = nos ayuda a limpiar los espacios en blanco al inicio y al final

/*game.fillText(emojis['X'], 100, 100) */
    //    game.font = elementsSize + 'px Verdana';
    //game.textAlign = "";

   /* //game.fillRect(0,50,100,100);
    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'left';
    game.fillText("Platzi",25,25); */
