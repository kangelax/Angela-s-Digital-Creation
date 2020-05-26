let weather;
let a = 0;
let interval = 1000;
let timeOfLastSwitch = 0;

let upper, lower;
let upperHue = 360;
let lowerHue = 234;

let xspacing = 15; // Distance between each horizontal location
let waveWidth; // Width of entire wave
let windTheta = 0.0; // Start angle at 0
let waveTheta = 0.0; // Start angle at 0
let amplitude = 25; // Height of wave
let period = 1000.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function preload() {
  weather = loadJSON("MarineWeather.json");
}

function setup() {
  //set up a canvas that's size depends on the browser size
  createCanvas(windowWidth, windowHeight);
  
  //air & water temperature colour setting 
  colorMode(HSB);
  upper = color(upperHue, 100, 65);
  lower = color(lowerHue, 100, 31);
  
  waveWidth = width + 16;
  dx = (TWO_PI/period) * xspacing;
  yvalues = new Array(floor(waveWidth/xspacing));
}

function draw() {
  //air & water temperature rectangle
  setGradient(0, 0, windowWidth, windowHeight, upper, lower, 1);
  
  //rest elements
  elements();
  
  //set timer
  if (millis() - timeOfLastSwitch > interval) {
    a += 1;
    timeOfLastSwitch = millis();
  }
  
  //check if array has reached max
  if (a == 24) {
    a = 0;
  }
}

//linear gradient for air & water temperature rectangle
function setGradient(x, y, w, h, upper, lower, axis) {
  noFill();
  //RGB colour mode because HSB returns rainbow gradient
  colorMode(RGB);
  
  if (axis == 1) {
    //top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1.3);
      let c = lerpColor(upper, lower, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

//sine wave calculation representing wind speed
function calcWindWave() {
  //wind speed wave calculation
  //change amplitude using windSpeed
  //Increment theta (try different values for 'angular velocity' here)
  windTheta += (weather.hours[a].windSpeed / 100);

  //For every windTheta value, calculate a y value with sine function
  let windT = windTheta;
  let wsAmplitude;
  
  wsAmplitude = weather.hours[a].windSpeed * amplitude;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(windT) * wsAmplitude;
    windT += dx;
  }
}

//sine wave calculation representing wave height
function calcWaveWave() {
  //wave height wave calculation
  //change amplitude using waveHeight
  //Increment theta (try different values for 'angular velocity' here)
  waveTheta += (weather.hours[a].waveHeight / 100);
  
  // For every waveTheta value, calculate a y value with sine function
  let waveT = waveTheta;
  let whAmplitude;
  
  whAmplitude = weather.hours[a].waveHeight * amplitude;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(waveT) * whAmplitude;
    waveT += dx;
  }
}

//wind speed sine wave render
function renderWindWave() {
  fill(0, 0, 100);
  //A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 3, 3);
  }
}

//wave height sine wave render
function renderWaveWave() {
  fill(0, 0, 100);
  //A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 - yvalues[x], 3, 3);
  }
}

function elements() {
  //rest colour mode to HSB
  noStroke();
  colorMode(HSB);

  let night = color(50, 100, 10);
  let riseSet = color(40, 100, 100);
  let midDay = color(50, 4, 100);
  
  let daytime = [];
  //daytime colour setting
  daytime[0] = night;
  daytime[1] = lerpColor(night, riseSet, 0.167);
  daytime[2] = lerpColor(daytime[1], riseSet, 0.167);
  daytime[3] = lerpColor(daytime[2], riseSet, 0.167);
  daytime[4] = lerpColor(daytime[3], riseSet, 0.167);
  daytime[5] = lerpColor(daytime[4], riseSet, 0.167);
  daytime[6] = riseSet; //sunrise
  daytime[7] = lerpColor(daytime[6], midDay, 0.167);
  daytime[8] = lerpColor(daytime[7], midDay, 0.167);
  daytime[9] = lerpColor(daytime[8], midDay, 0.167);
  daytime[10] = lerpColor(daytime[9], midDay, 0.167);
  daytime[11] = lerpColor(daytime[10], midDay, 0.167);
  daytime[12] = midDay; //mid day
  daytime[13] = lerpColor(daytime[11], riseSet, 0.167);
  daytime[14] = lerpColor(daytime[12], riseSet, 0.167);
  daytime[15] = lerpColor(daytime[13], riseSet, 0.167);
  daytime[16] = lerpColor(daytime[14], riseSet, 0.167);
  daytime[17] = lerpColor(daytime[15], riseSet, 0.167);
  daytime[18] = riseSet; //sunset
  daytime[19] = lerpColor(daytime[18], night, 0.167);
  daytime[20] = lerpColor(daytime[19], night, 0.167);
  daytime[21] = lerpColor(daytime[20], night, 0.167);
  daytime[22] = lerpColor(daytime[21], night, 0.167);
  daytime[23] = lerpColor(daytime[22], night, 0.167);
  
  //air & water temperature colour transition
  upper =  color(upperHue - (weather.hours[a].airTemperature - 27) * 50, 100, 65);
  lower = color(lowerHue - (weather.hours[a].waterTemperature - 28) * 30, 100, 31);
  
  //translucent circles with random sizes to form on random locations
  let humidityCircle = (weather.hours[a].humidity - 60);
  for (let hc = 0; hc < humidityCircle; hc++) {
    fill(0, 0, 100, 0.2);
    circle(random(windowWidth), random(windowHeight/2), random((windowWidth/18)+15));
  }
  
  calcWindWave();
  renderWindWave();
      
  calcWaveWave();
  renderWaveWave();
  
  fill(daytime[a]);
  circle(windowWidth/2, windowHeight/2, windowHeight/3.5);
}
