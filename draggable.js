// Click and Drag an object
// This class I use is based on the example from p5.js (Daniel Shiffman) <http://www.shiffman.net>
class Draggable {
    constructor(x, y, w, h,img) {
      this.dragging = false; 
      this.rollover = false; 
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offsetX = 0;
      this.offsetY = 0;
      this.img = img;
    }
  
    over() {
      // Is mouse over object
      if (mouseX > this.x-this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y-this.h/2 && mouseY < this.y + this.h/2) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }
  
    update() {
    // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    show() {
      stroke(255);
      if (this.dragging) {
        fill(100);
        cursor(HAND);
      } 
      else if (this.rollover) {
        fill(100);
        cursor(HAND);
      } 
      else {
        fill(200);
        cursor(ARROW);
      }
      
      if (this.img == "none"){
        ellipse(this.x, this.y, this.w, this.h);
      }
      else{
        image(this.img,this.x,this.y,this.w,this.h);
      }
    }
  
    pressed() {
  // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
    this.dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    this.offsetX = this.x - mouseX;
    this.offsetY = this.y - mouseY;
  }
    }
  
    released() {
      // Quit dragging
      this.dragging = false;
    }
  }