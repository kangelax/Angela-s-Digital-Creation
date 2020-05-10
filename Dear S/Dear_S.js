let song, intro, fft, ellipseSize, soundSpectrum;

function preload() {
  song = loadSound('R.LUM.R_Lonely.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Setup a new FFT instance
  fft = new p5.FFT(0.4,1024); //(smoothing, bins)
  song.amp(0.7);
  
  textSize(windowWidth/50);
  fill(0);
  textAlign(CENTER);
  intro = text('Tap to play or pause music. Circle sizes vary on bass, randomly generated while music plays.', windowWidth/2, windowHeight/2);
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

    // get the latest "amplitude" or "energy" value from the audio analysis, returned in range from 0 to 1
    var myDataValue = getNewSoundData("bass"); // requesting the "amplitude data for the "bass" frequency.
    
    fill(255, 189, 202, 100);
    noStroke();
    ellipseSize = 200 * myDataValue;
    ellipse(random(width), random(height), ellipseSize, ellipseSize);
  }
}


// -------------------------  Sound Setup ------------------------------

function getNewSoundData(freqType) {
  return map(fft.getEnergy(freqType), 0, 255, 0, 1); //get energy from frequency, scaled from 0 to 1
}
