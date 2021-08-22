function setup() {
  createCanvas (700, 600);
}

function draw() {
  //background
  background(0, 0, 0);
  
  let time1 = map(mouseY, 0, 600, 0, 255);
  let time2 = map(mouseY, 0, 600, 100, 0);
  let time3 = map(mouseY, 0, 600, 100, 50);
  //sky strip 1
  noStroke();
  fill(9, 32, 95, 200);
  rect(0, 0, 700, 50);
  fill(248, 197, 195, time1);
  rect(0, 0, 700, 50);
  
  //sky strip 2
  noStroke();
  fill(9, 66, 130, 200);
  rect(0, 50, 700, 50);
  fill(253, 207, 205, time1);
  rect(0, 50, 700, 50);
  
  //sky strip 3
  noStroke();
  fill(9, 87, 159, 200);
  rect(0, 100, 700, 50);
  fill(253, 217, 207, time1);
  rect(0, 100, 700, 50);
  
  //sky strip 4
  noStroke();
  fill(9, 108, 182, 200);
  rect(0, 150, 700, 50);
  fill(254, 227, 209, time1);
  rect(0, 150, 700, 50);
  
  //sky strip 5
  noStroke();
  fill(9, 143, 223, 200);
  rect(0, 200, 700, 50);
  fill(255, 237, 210, time1);
  rect(0, 200, 700, 50);
  
  //sky strip 6
  noStroke();
  fill(3, 165, 249, 200);
  rect(0, 250, 700, 50);
  fill(255, 247, 216, time1);
  rect(0, 250, 700, 50);
  
   //stars
  noStroke();
  if (mouseY < 150) {
    for (var i = 0; i < 5; i++) {
      fill(255, 239, 81);
      ellipse(random(700), random(300), 2, 2);
    }
  }
  
  //sun
  noStroke();
  if (mouseY < 1000) {
    fill(255, 228, 122);
    let sunHeight1 = map(mouseY, 0, height, 480, 155, true);
    ellipse(500-sunHeight1, sunHeight1, 150, 150);
  }
  if (mouseY < 600) { 
    fill(255, 244, 206);
    let sunHeight2 = map(height-mouseY, 0, height, 480, 155, true);
    ellipse(190+sunHeight2, sunHeight2, 150, 150);
  }
  
  //cloud1
  noStroke();
  let cloudColour = map(mouseY, 0, height, 30, 0);
  let x1 = map(mouseX, 0, width, 100, 250, true);
  fill(255-cloudColour, 255-cloudColour/2, 255-cloudColour/5);
  arc(x1, 100, 70, 70, radians(180), radians(0), CHORD);
  arc(x1-40, 100, 40, 40, radians(180), radians(0), CHORD);
  arc(x1+40, 100, 50, 50, radians(180), radians(0), CHORD);
  
  //cloud2
  let x2 = map(mouseX, 0, width, 180, 200, true);
  arc(x2, 200, 50, 50, radians(180), radians(0), CHORD);
  arc(x2-25, 200, 30, 30, radians(180), radians(0), CHORD);
  arc(x2+25, 200, 25, 25, radians(180), radians(0), CHORD);
  
  //cloud3
  let x3 = map(mouseX, width, 0, 450, 580, true);
  arc(x3, 150, 120, 120, radians(180), radians(0), CHORD);
  arc(x3-60, 150, 70, 70, radians(180), radians(0), CHORD);
  arc(x3+60, 150, 45, 45, radians(180), radians(0), CHORD);
  
  //water
  //night
  fill(0, 0, 64);
  rect (0, 300, 700, 600);
  //day
  fill(125, 180, 225, mouseY);
  rect (0, 300, 700, 600);

  //water lines
  let waterLine = map(mouseY, 0, 600, 0, 150);
  fill(255, 255, 255, time3);
  rect(210-waterLine/2, 330, 80, 2);
  rect(590-waterLine, 326, 80, 2);
  rect(511-waterLine, 385, 80, 2);
  rect(165-waterLine/2, 407, 80, 2);
  rect(617-waterLine, 435, 80, 2);
  rect(558-waterLine, 475, 80, 2);
  rect(128-waterLine/10, 489, 80, 2);
  
//night water highlight
  noStroke();
  fill(255, 255, 255, time2);
  beginShape();
  curveVertex(315, 300);
  curveVertex(313, 300);
  curveVertex(307, 308);
  curveVertex(312, 320);
  curveVertex(300, 337);
  curveVertex(313, 359);
  curveVertex(291, 377);
  curveVertex(305, 404);
  curveVertex(275, 436);
  curveVertex(300, 468);
  curveVertex(260, 497);
  curveVertex(291, 521);
  curveVertex(250, 550);
  curveVertex(269, 576);
  curveVertex(206, 584);
  curveVertex(185, 600);
  curveVertex(520, 600);
  curveVertex(454, 564);
  curveVertex(475, 535);
  curveVertex(433, 509);
  curveVertex(460, 479);
  curveVertex(421, 453);
  curveVertex(439, 427);
  curveVertex(409, 405);
  curveVertex(419, 376);
  curveVertex(400, 353);
  curveVertex(408, 329);
  curveVertex(388, 313);
  curveVertex(397, 302);
  curveVertex(386, 300);
  endShape(CLOSE);
  
  //boat
  let boatX = map(mouseY, height, 0, 700, 100, true);
  let boatY = map(mouseX, 0, width, 300, 360, true);
  fill(5, 94, 140);
  beginShape();
  vertex(boatX+10, boatY+30);
  vertex(boatX+150, boatY+30);
  vertex(boatX+130, boatY+70);
  vertex(boatX+30, boatY+70);
  endShape(CLOSE);
  
  //mountain left
  let mountainColour = map(mouseY, 0, height, 0, 50);
  beginShape();
  noStroke();
  fill(15, 58+mountainColour, 30+mountainColour/2);
  vertex(0, 276);
  vertex(27, 328);
  vertex(54, 399);
  vertex(117, 426);
  vertex(168, 499);
  vertex(206, 520);
  vertex(283, 541);
  vertex(357, 600);
  vertex(0, 600);
  endShape(CLOSE);
  
  //mountain right
  beginShape();
  noStroke();
  fill(15, 58+mountainColour, 30+mountainColour/2);
  vertex(700, 356);
  vertex(633, 444);
  vertex(618, 482);
  vertex(513, 532);
  vertex(494, 564);
  vertex(427, 600);
  vertex(700, 600);
  endShape(CLOSE);
  
} //close draw()  

//find exact coordinates
function mousePressed(){
    print ("mouseX=", mouseX, "mouseY=", mouseY);
}
