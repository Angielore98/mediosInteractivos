var mic;
var miS;
var amplitud;
var tempo;

function preload(){
  sound = loadSound('musica/ht1.mp3');
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  mic = new p5.AudioIn()
  mic.start();
 amplitud = new p5.Amplitude();
 tempo = millis();
  var cnv = createCanvas(windowWidth,windowHeight);
cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
  start=millis()
 
}
function draw(){
  
 fill(0,200,mouseX+10)
  micLevel = mic.getLevel();
  ellipse((width/2)+(width/3), constrain(height/2-micLevel*height/2*5, 0, height/2), constrain(height/2-micLevel*height/2*5, 0, height/2), 10);
  
  background(0)
   miS.setVolume(map(mouseY, windowHeight, 0, 0.0, 1.0));

  fill(0)
  rect(0,400,width,height)
  
  var spectrum = fft.analyze();
  noStroke();
  fill(255,0,0); // spectrum es color rojo
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height/4 + map(spectrum[i], 0, 255, height/4, 0);
    rect(x, (height/2)+300, width / spectrum.length, h )
  }

  var waveform = fft.waveform();

  noFill();
  beginShape();
  stroke(0,0,255); // waveform es azul
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, height/2+(height/3), height);
    vertex(x,y);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

//se pausa el sonido si se hace clic sobre el canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }

}