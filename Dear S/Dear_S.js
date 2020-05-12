let song, intro, fft, ellipseSize, soundSpectrum;
let timer = 13;

function preload() {
  song = loadSound('R.LUM.R_Lonely.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Setup a new FFT instance
  fft = new p5.FFT(0.4, 1024); //(smoothing, bins)
  song.amp(0.7);
  
  textSize(windowWidth/50);
  fill(0);
  textAlign(CENTER);
  intro = text('Tap to play or pause music. Circle sizes vary on bass, randomly generated while music plays.', windowWidth/2, windowHeight/2);
  
  fade = 0;
}

function mouseClicked() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause();
  } else {
    song.loop();
  }
}

function draw() {
  if (song.isPlaying()) {
    soundSpectrum = fft.analyze();
    
    let myDataValue = getNewSoundData("bass"); // requesting the "amplitude data for the "bass" frequency.
    let fade = 100;
    
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      remove();
    }
    
    fill(255, 189, 202, fade);
    noStroke();
    radius = 200 * myDataValue;
    circle(random(width), random(height), radius);
  }
}

// -------------------------  Sound Setup -------------------------------

function getNewSoundData(freqType) {
  return map(fft.getEnergy(freqType), 0, 255, 0, 1); //get energy from frequency, scaled from 0 to 1
}
