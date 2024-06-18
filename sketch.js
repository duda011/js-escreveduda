function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
     fill("red");
  
    if(mouseispressed){
      rect(mouseX, mousey,  20, 35);
    }
  
  }