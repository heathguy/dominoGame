class Domino {
  constructor(tileSize, leftSide, rightSide, upperX, upperY) {
    this.left = leftSide;
    this.right = rightSide;
    this.dSize = tileSize;
    this.upperXcoord = upperX;
    this.upperYcoord = upperY;
    this.selected = false;
    
    textSize(this.dSize/2);
    textAlign(CENTER, CENTER);
  }
  
  checkDominoMouse(mX,mY) {
    let found = false;
   if( (mX >= this.upperXcoord && mX <= this.upperXcoord + this.dSize*2) && (mY >= this.upperYcoord && mY <= this.upperYcoord + this.dSize) ){
     
     if(this.selected) {
       this.selected = false;
     }
     else {
       this.selected = true;
     }
     found = true
   }
    return found;
  }
  
  flip() {
    return new Domino(this.tileSize, this.rightSide, this.leftSide, upperX, upperY);
  }
  
  displayDom(x=this.upperXcoord,y=this.upperYcoord) {
    //let x = this.upperXcoord;
    //let y = this.upperYcoord;
    let fillColor = 255;
    if(this.selected) {
      fillColor = 125;
    }
    // draw left side first
    // top-left = 10, top-right = 0, bottom-right = 0, bottom-left = 10.
    fill(fillColor);
    rect(x, y, this.dSize, this.dSize, 10, 0, 0, 10);
    fill(0);
    text(this.left, x+this.dSize/2, y+this.dSize/2);
    
    //translate(this.dSize,0);
    
    // draw center bar
    rect(x+this.dSize, y, this.dSize/10, this.dSize);
    
    //translate(this.dSize/10,0);
    
    // draw left side first
    // top-left = 10, top-right = 0, bottom-right = 0, bottom-left = 10.
    fill(fillColor);
    rect(x+this.dSize+this.dSize/10, y, this.dSize, this.dSize, 0, 10, 10, 0);
    fill(0);
    text(this.right, x+this.dSize/2+this.dSize, y+this.dSize/2);
    
    //translate(this.dSize+this.dSize/10,0);
  }
}
