function setup() {
    createCanvas(1000, 1000);
    background("black")
  }
  
  function draw() {
  
    stroke("white");
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 30);
    }
  }
  