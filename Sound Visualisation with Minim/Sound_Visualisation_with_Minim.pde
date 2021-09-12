// Project 02 
 
// Note: You Will need the Minim Sound Library added to make this work.
 
//MUSIC  
import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer mySound;
FFT fft;
FFT fftLin;
BeatDetect beat;
BeatListener bl;
Oscil sine;


import drop.*;

SDrop drop;
//MyDropListener m;

float n4, n6, kickSize, snareSize, hatSize, spectrumScale = 4;
float[] buffer;
int bsize = 512;
boolean isLoaded = false;


class BeatListener implements AudioListener {
  private BeatDetect beat;
  private AudioPlayer source;
  
  BeatListener(BeatDetect beat, AudioPlayer source) {
    this.source = source;
    this.source.addListener(this);
    this.beat = beat;
  }
  
  void samples(float[] samps) {
    beat.detect(source.mix);
  }
  
  void samples(float[] sampsL, float[] sampsR) {
    beat.detect(source.mix);
  }
}
 
//MAIN SETUP
void setup () {
  fullScreen();
  noCursor();
  smooth();
  background(255);
  frameRate(24);
 
  //MUSIC | Add mp3 to file
  minim = new Minim(this);
  mySound = minim.loadFile("Fck_Boys.mp3");
  mySound.play();
  
  //Drag and drop mp3 file
  //drop = new SDrop(this);
  //m = new MyDropListener();
  //drop.addDropListener(m);
  
  fft = new FFT(mySound.bufferSize(), mySound.sampleRate());
  beat = new BeatDetect(mySound.bufferSize(), mySound.sampleRate());
  fftLin = new FFT(mySound.bufferSize(), mySound.sampleRate());
  fftLin.linAverages(30);
 
  beat.setSensitivity(300);
  kickSize = snareSize = hatSize = 16;
  bl = new BeatListener(beat, mySound);
  
  sine = new Oscil(600.f, 1.f, Waves.SINE);
  sine.setSampleRate(44100);
  buffer = new float[bsize];
  float[] tmp = new float[1];
  for (int i = 0; i < bsize; i++) {
    sine.tick(tmp);
    buffer[i] = tmp[0];
  }
}

//void dropEvent(DropEvent theDropEvent) {
//}

//class MyDropListener extends drop.DropListener {
  //MyDropListener() {
  //}
  
  //void dropEvent(DropEvent theEvent) {
    //if (theEvent.isFile()) {
      //String myFile = theEvent.toString();
      //mySound = minim.loadFile(myFile);
      //isLoaded = true;
    //}
  //}
//}

void draw () {
  fill(0, 50);  
  noStroke();
  rect(0, 0, width, height);
  translate(width/2, height/2);
  
  //FFT
  fft.forward(mySound.mix);
  for (int f = 0; f < fft.specSize(); f++) {
    float angle = sin(f+n4)*10; 
    
    float x = sin(radians(f))*(1500/angle); 
    float y = cos(radians(f))*(1500/angle);
    
    fill(188, 79, 227, 60); //purple (frequency)
    rect(x, y, mySound.left.get(f)*50, mySound.left.get(f)*50);
  }
  
  for (int i = 0; i < buffer.length; i++) {
    float angle = sin(i+n4)*10; 
    
    float x = cos(radians(i))*(500/angle);
    float y = sin(radians(i))*(500/angle);
    
    fill(245, 142, 185, 70);
    ellipse(x, y, mySound.right.get(i)*30, mySound.right.get(i)*30);
  }
  
 //Beat Listener
 for (int b = 0; b < beat.detectSize(); b++) {
   
   //if (beat.isOnset(b)) {
     float angle = sin(b+n6)*1000;
     
     float x = sin(radians(b))*(angle); 
     float y = cos(radians(b))*(angle);
     
     fill(255, 207, 77, 90);
     rect(x, y, mySound.right.get(b)*100, mySound.left.get(b)*100);
   //}
 }
 
 // FFT Linear
 fftLin.forward(mySound.mix);
 for (int fl = 0; fl < fftLin.specSize(); fl++) {
   float angle = sin(fl+n6)* 300;
   
   float x = cos(radians(fl))*(angle);
   float y = sin(radians(fl))*(angle); 
    
   fill(255, 100); //white
   ellipse(x, y, fftLin.getBand(fl)*spectrumScale/5, fftLin.getBand(fl)*spectrumScale/5);
 }
 
  //for (int i = 0; i < mySound.bufferSize()-1; i++) {
   
  //}
 
  n4 += 0.008;
  n6 += 0.04;
 
}

void keyPressed() {
  if (mySound.isPlaying()) {
    mySound.pause();
  } else if (mySound.position() == mySound.length()) {
    mySound.rewind();
    mySound.play();
  } else {
    mySound.play();
  }
}
