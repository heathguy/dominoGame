let doubleInput, doubleButton;
let startingDouble;
let dominoSize;
let dom1;
let handPicked;
let dominoSet;
let handSet;

function setup() {
  createCanvas(630, 600);
  
  dominoSize = 20;
  handPicked = false;
  
  startingDouble = -1;
  doubleInput = createInput();
  
  doubleButton = createButton('submit');
  doubleButton.mousePressed(setStartingDouble);

  greeting = createElement('h2', 'Enter Starting Double');
  greeting.position(20, 5);

  //textAlign(CENTER);
  textSize(50);
  
  //dominoSet = buildDominoSet();
  handSet = [];
  //console.log(dominoSet);
  
  //dom1 = new Domino(8,5);
  dom1 = new Domino(dominoSize, startingDouble, 5);
  dom2 = new Domino(dominoSize, 8, 7);
}

function buildDominoSet() {
  let leftPipNum = startingDouble;
  let rightPipNum = 0;
  let xCoord = 5;
  let yCoord = 5;
  
  let domSet = [];
  for(i=startingDouble; i>=0; i--) {
      //domSet[i] = [];
      for(j=leftPipNum; j>=0; j--) {
        dom = new Domino(dominoSize, leftPipNum, rightPipNum, xCoord, yCoord);
        if(leftPipNum == rightPipNum) {
          xCoord = 5;
          yCoord += dominoSize + 10;
        }
        else {
          xCoord += dominoSize*2 + dominoSize/10 + 5;
        }
        domSet.push(dom);
        rightPipNum = rightPipNum + 1;
      }
      leftPipNum = leftPipNum - 1;
      rightPipNum = 0;
    }
  return domSet;
}

function displayAllDominoes(d) {
  for(let ad of d) {
    ad.displayDom();
  }
}

function displayHandSet(d) {
  let xCoord = 5;
  let yCoord = 500;
  for(let ad of d) {
    ad.displayDom(xCoord,yCoord);
    xCoord += dominoSize*2 + dominoSize/10 + 5;
  }
}

function draw() {
  background(185);
  if(startingDouble < 0) {
    doubleInput.position(20, 65);
    doubleButton.position(doubleInput.x + doubleInput.width, 65);
  }
  else if(!handPicked) {
    doubleInput.remove();
    doubleButton.remove();
    greeting.remove();
    displayAllDominoes(dominoSet);
    displayHandSet(handSet);
  }
  else {
  }
}

function mouseClicked() {
    console.log(mouseX, mouseY);
    let found = false;
    for(let ad of dominoSet) {
      if(ad.checkDominoMouse(mouseX, mouseY)) {
        handSet.push(ad);
        console.log(handSet);
        break;
      }
    }
  }

function setStartingDouble() {
  startingDouble = doubleInput.value();
  dominoSet = buildDominoSet();
  //dom1 = new Domino(dominoSize, startingDouble, 5);
}
