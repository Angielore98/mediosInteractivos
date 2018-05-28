



// VARIABLES DE ESTADOS
var estado = 0;
var Intro = 1;
var Nivel1I = 2;
var Nivel1 = 3;
var Nivel2I = 4;
var Nivel2 = 5;
var Perder = 6;
var Instrucciones = 7;
var Instrucciones2 = 8;
var Instrucciones3 = 9;
var Ganar = 10;
//IMAGENES DE FONDO

var minaI;
var tierraI;
var artesaniasI;
var iglesiaI;
var kioscoI;
var casaI;


//IMAGENES DE ESTADO

var PortadaI;
var objetivoI;
var avatarI;
var instruccionesI;
var Nivel1I;
var Nivel2I;
var perderI;

//IMAGENES DE PERSONAJES

var blancoI;
var blancaI; 
var bebebI;
var bebabI;
var ROBINI;

//var españoles;
var blancos = [];
var numblancos = 4;

//var españolas;
var blancas = [];
var numblancas = 4;
//var bebes

var bebesitosb = [];
var numbebesitosb = 0;
var ROBIN = [];
var numROBIN = 1;

//cargo las imagenes para cada especie y area para poder llamarlas después
function preload(){
//IMAGENES DE FONDO
minaI = loadImage('imagenes/MINA.png');
tierraI = loadImage('imagenes/tierra.png');
artesaniasI = loadImage('imagenes/ARTESANIAS.png');
iglesiaI = loadImage('imagenes/iglesia.png');
kioscoI = loadImage('imagenes/KIOSCO.png');
casaI = loadImage('imagenes/CASA.png');

 
  //PERSONAJES
blancoI = loadImage('imagenes/blanco.png');
blancaI = loadImage('imagenes/blanca.png');
bebebI = loadImage('imagenes/bebeb.png');
bebabI = loadImage('imagenes/bebab.png');
ROBINI = loadImage('imagenes/robin.png'); 
  
  //imagenes de estados e instrucciones
PortadaI = loadImage('imagenes/portada.png');
objetivoI = loadImage('imagenes/11instrucciones.png');
avatarI = loadImage('imagenes/2instrucciones.png');
instruccionesI = loadImage('imagenes/3instrucciones.png');
Nivel1I = loadImage('imagenes/41instrucciones.png');
Nivel2I = loadImage('imagenes/61instrucciones.png');
perderI = loadImage('imagenes/perdiste3.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 estado = Intro;
  for (var i = 0; i < numblancas; i = i + 1) {
    blancas[i] = new blanco(2);
  }
  
  for (var m = 0; m < numblancos; m = m + 1) {
    blancos[m] = new blanco(1);
  }
  

  for (var r = 0; r <= numROBIN; r = r+1) {
   ROBIN[r] = new robin();
  }
  
  for (var b = 0; b <= numbebesitosb; b = b+1) {
   bebesitosb[b] = new bebeb(int(random(1,2)));
  }
  
}

function draw() {
  if (estado == Intro) {
    image(PortadaI,-width/4,0,width*1.4,height);
   }
  else if (estado == Instrucciones){
  image(objetivoI,0,-height/30,width,height*1.08);
  }
  
  else if (estado == Instrucciones2){
  image(avatarI,0,-height/30,width,height*1.08);
    
  }
  else if (estado == Instrucciones3){
  image(instruccionesI,0,-height/30,width,height*1.08);
  }
    else if (estado == Nivel1I){
  image(Nivel1I,0,-height/30,width,height*1.08);
  }
  else if (estado == Nivel1){
    
    background(0,100,0)

  
  //Llamo las imagenes para crear el fondo y las areas para cada especie
  
image(casaI,0,windowHeight/50,windowWidth/4,windowHeight/3);
image(minaI,0,windowHeight/1.58,windowWidth/6,windowHeight/3);
image(iglesiaI,windowWidth/1.25,windowHeight/1.84,windowWidth/5,windowHeight/2.2);
image(tierraI,windowWidth/3,windowHeight/2.8,windowWidth/3,windowHeight/3);
image(artesaniasI,windowWidth/2.4,windowHeight/1.43,windowWidth/6,windowHeight/3);
image(kioscoI,windowWidth/1.27,0,windowWidth/10,windowHeight/4);
image(kioscoI,windowWidth/1.12,0,windowWidth/10,windowHeight/4);
image(kioscoI,windowWidth/1.27,windowHeight/4,windowWidth/10,windowHeight/4);
image(kioscoI,windowWidth/1.12,windowHeight/4,windowWidth/10,windowHeight/4);

 //   reproduccion
/*      if (dist(blancos[numblancos].x, blancos[numblancos].y, blancas[numblancas].x, blancas[numblancas].y) < 10) {
    bebesitosb = new bebeb(int(random(0, 2)));
  }*/
    
    for (var m =0; m < numblancos; m = m +1)
  {
    for (var i =0; i < numblancas; i = i +1)
    { 
      var distreproduccion = dist(blancos[m].x, blancos[m].y, blancas[i].x, blancas[i].y);

       if (distreproduccion < blancos[m].tamanom/16)
       {
         numbebesitosb = numbebesitosb + 1
         numbebesitosb[bebesitosb.length] = new bebeb();
          
       }

    }
  }

    
 //pintar blancos
   for (var m = 0; m < numblancos; m = m + 1) {
    blancos[m].dibujarse();
    blancos[m].moverse();
  }
  for (var i = 0; i < numblancas; i = i + 1) {
    blancas[i].dibujarse();
    blancas[i].moverse(); 
  }
//pintar Robin
    for (r = 0; r < ROBIN.length; r = r + 1) {
ROBIN[r].dibujarse();
    }
  }

}//parentesis de cierre


//Cambio de estados en el iPad;
function touchEnded(){
if(estado == Intro){
    estado = Instrucciones;  
  }else if(estado == Instrucciones){
    estado = Instrucciones2;  
  }
   else if(estado == Instrucciones2){
    estado = Instrucciones3;  
  }else if(estado == Instrucciones3){
    estado = Nivel1I;  
  }
  
  else if(estado == Nivel1I){
    estado = Nivel1;  
  }
  
  else if(estado == Ganar){
    estado = Nivel2I;  
  }else if (estado == Perder){
    estado = Intro;  
  }
}

//determinamos cada especie
  
  function blanco(_genero) {
  this.x = random(25, width-25);
  this.y = random(25, height-25);
  this.dirX = 1;
  this.dirY = 1;
  this.genero = _genero
  this.tamanox = windowWidth/23;
  this.tamanoy = windowWidth/18;

//como se dibujara
  this.dibujarse = function() { 
    if (this.genero == 1){
  image(blancoI,this.x,this.y,this.tamanox,this.tamanoy);
  } else { 
  image(blancaI,this.x,this.y,this.tamanox-10,this.tamanoy+10);
}
  }
  
  //en que espacio podra moverse, y la manera como será asignada su ubicación
  this.moverse = function() {{
    this.x = this.x+this.dirX;
    this.y = this.y+this.dirY;
    //delimitamos el aréa en el que puede aparecer y moverse
  }{
  if(this.x <= 0 || this.x >= width-this.tamanox){
    this.dirX = this.dirX*-1
  }
  if(this.y <= 0 || this.y >= height-this.tamanoy){
   this.dirY = this.dirY*-1
  }
  }
  }
  
  }
  
 
  
  function bebeb(_genero) {
  this.x = random(25, width-25);
  this.y = random(25, height-25);
  this.dirX = 1;
  this.dirY = 1;
  this.genero = _genero
  this.tamanox = windowWidth/25;
  this.tamanoy = windowWidth/25;
  

//como se dibujara
  this.dibujarse = function() { 
    if (this.genero == 1){
  image(bebebI,this.x, this.y, this.tamanox, this.tamanoy);
  } else { 
  image(bebabI,this.x, this.y, this.tamanox, this.tamanoy);
}
  }
  //en que espacio podra moverse, y la manera como será asignada su ubicación
  this.moverse = function() {
    this.x = this.x+this.dirX;
    this.y = this.y+this.dirY;
    //delimitamos el aréa en el que puede aparecer y moverse
 
  if(this.x <= 0 || this.x >= width-this.tamanox){
    this.dirX = this.dirX*-1
  }
  if(this.y <= 0 || this.y >= height-this.tamanoy){
   this.dirY = this.dirY*-1
  }
   
  }
  }
  

function robin() {
this.tamanox = windowWidth/18;
this.tamanoy = windowWidth/13;
this.dibujarse = function() { 
image(ROBINI,mouseX,mouseY, this.tamanox, this.tamanoy);
}
}
