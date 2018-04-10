//defino las variables para llamar las imagenes
var blancoI;
var indigenaI;
var negroI;
var mestizoI;
var mulatoI;
var zamboI;

var maizI;
var carbonI;

var minaI;
var tierraI;
var artesaniasI;
var iglesiaI;
var kioscoI;
var casaI;



// defino las variables para mis especies
var blanco;
var indigena;
var negro;
var mestizo;
var mestizob = 0;
var mulato;
var mulatob = 0;
var zambo;
var zambob = 0;

var maiz;
var maiz2 = 0;
var maiz3 = 0;
var maiz4 = 0;
var maiz5 = 0;
var maiz6 = 0;

var carbon;
var carbon2= 0;
var carbon3= 0;
var collar;
var collar2 = 0;
var collar3 = 0;

// definimos algunas variables para delimitar el movimiento de las especies
var dir = 1;
var l1ix =400;
var l2ix =750;
var l1iy = 0;
var l2iy = 750;


//variables para keypressed
var x1=1;
var y1=1;
var x2=1;
var y2=1;
var x3=1;
var y3=1;
//cargo las imagenes para cada especie y area para poder llamarlas después
function preload(){
blancoI = loadImage('imagenes/blanco.png');
indigenaI = loadImage('imagenes/indio.png');
negroI = loadImage('imagenes/negro.png');
mestizoI = loadImage('imagenes/mestizo.png');
mulatoI = loadImage('imagenes/mulato.png');
zamboI = loadImage('imagenes/zambo.png');

maizI = loadImage('imagenes/maiz.png');
carbonI = loadImage('imagenes/Carbon.png');

minaI = loadImage('imagenes/MINA.png');
tierraI = loadImage('imagenes/tierra.png');
artesaniasI = loadImage('imagenes/ARTESANIAS.png');
iglesiaI = loadImage('imagenes/iglesia.png');
kioscoI = loadImage('imagenes/KIOSCO.png');
casaI = loadImage('imagenes/CASA.png');
  
  
}

//designo las especies para pintarlas
function setup() {
  createCanvas(800,800);
  background(0,100,0);
 blanco = new blancos();
  negro = new negros();
   indigena = new indigenas();
   mestizo = new mestizos();
    mulato = new mulatos();
     zambo = new zambos();
     
     maiz = new maices();
     carbon = new carbones();
     collar = new collares();
}

function draw() {
  background(0,100,0)
  
  
  
  
  
  //Llamo las imagenes para crear el fondo y las areas para cada especie
  
image(casaI,0,0,400,250);
image(minaI,0,520,300,280);
image(iglesiaI,500,500,300,300);
image(tierraI,300,350,500,150);
image(artesaniasI,0,350,220,150);
image(kioscoI,550,0,100,100);
image(kioscoI,700,0,100,100);
image(kioscoI,550,110,100,100);
image(kioscoI,700,110,100,100);
  
  
  
  //cultivar

  if (dist(mulato.x, mulato.y, maiz.x, maiz.y) < mulato.tamano  && mulato.vivo  && maiz.vivo && maiz2 == 0) {
    maiz2 = new maices(random(0, 2));
  }
      if (dist(indigena.x, indigena.y, maiz.x, maiz.y) < indigena.tamano  && indigena.vivo  && maiz.vivo && maiz3 == 0) {
    maiz3 = new maices(random(0, 2));
  }
  if (dist(indigena.x, indigena.y, maiz2.x, maiz2.y) < indigena.tamano  && indigena.vivo  && maiz.vivo && maiz4 == 0) {
   maiz4 = new maices(random(0, 2));
  } 
  
    
  //recoger maiz
 if (dist(blanco.x, blanco.y, maiz.x, maiz.y) < maiz.tamano) {
 maiz.morirse();
}
 if (dist(blanco.x, blanco.y, maiz2.x, maiz2.y) < maiz.tamano) {
 maiz2.morirse();
}
 if (dist(blanco.x, blanco.y, maiz3.x, maiz3.y) < maiz3.tamano) {
 maiz3.morirse();
}
  //hacer artesanias
  if (dist(mestizo.x, mestizo.y, collar.x, collar.y) < mestizo.tamano  && mestizo.vivo  && collar.vivo   && collar2 == 0) {
    collar2 = new collares(random(0, 2));
  }
  
  if (dist(indigena.x, indigena.y, collar.x, collar.y) < indigena.tamano  && indigena.vivo  && collar.vivo   && collar2 == 0) {
    collar2 = new collares(random(0, 2));
  }
  //recoger artesanias
  if (dist(blanco.x, blanco.y, collar.x, collar.y) < collar.tamano) {
 collar.morirse();
}
  //sacar carbon
   if (dist(negro.x, negro.y, carbon.x, carbon.y) < negro.tamano  && negro.vivo  && carbon.vivo   && carbon2 == 0) {
    carbon2 = new carbones(random(0, 2));
  }
    if (dist(zambo.x, zambo.y, carbon.x, carbon.y) < zambo.tamano  && zambo.vivo  && carbon.vivo   && carbon2 == 0) {
    carbon2 = new carbones(random(0, 2));
  }
  //llevarse el carbon
  
   if (dist(blanco.x, blanco.y, carbon.x, carbon.y) < carbon.tamano) {
 carbon.morirse();
}
 //if (mouseIsPressed == true) {
//  mulato.x = mouseX;
 //mulato.y = mouseY;
// }

 //Define los parametros para que sea posible que aparezca un nuevo integrante del contexto.
  
  //nuevo mestizo
 
  if (dist(blanco.x, blanco.y, indigena.x, indigena.y) < blanco.tamano/2  && blanco.vivo  && indigena.vivo   && mestizob == 0) {
    mestizob = new mestizos(random(0, 2));
  }
  
  //nuevo mulato
    if (dist(blanco.x, blanco.y, negro.x, negro.y) < blanco.tamano/2  && blanco.vivo  && negro.vivo   && mulatob == 0) {
    mulatob = new mulatos(random(0, 2));
  }
  
  //nuevo zambo
    if (dist(indigena.x, indigena.y, negro.x, negro.y) < indigena.tamano/2  && indigena.vivo  && negro.vivo   && zambob == 0) {
    zambob  = new zambos(random(0, 2));
  }
  
  if (mouseIsPressed == true) {
    blanco.x = mouseX;
    blanco.y = mouseY;
  }
  

  
  blanco.dibujarse();
  blanco.moverse();
  
  negro.dibujarse();
  negro.moverse();
  
  
 indigena.dibujarse();
 indigena.moverse();   
 

  
 
  mestizo.dibujarse();
  mestizo.moverse();
  
   if (mestizob !=0){
     mestizob.dibujarse();
     mestizob.moverse();
  }
  
  mulato.dibujarse();
  mulato.moverse();
  
  if (mulatob !=0){
     mulatob.dibujarse();
     mulatob.moverse();
  }
  
 
  zambo.dibujarse();
  zambo.moverse();
  
    if (zambob !=0){
     zambob.dibujarse();
     zambob.moverse();
  }
  
  maiz.dibujarse();
  maiz.moverse();
  
    if (maiz2 !=0){
     maiz2.dibujarse();
     maiz2.moverse();}
     
     if (maiz3 !=0){
     maiz3.dibujarse();
     maiz3.moverse();}
    if (maiz4 !=0){
     maiz4.dibujarse();
     maiz4.moverse();}
      if (maiz5 !=0){
     maiz5.dibujarse();
     maiz5.moverse();}
      if (maiz6 !=0){
     maiz6.dibujarse();
     maiz6.moverse();}
   
carbon.dibujarse();
   carbon.moverse();
   
   if (carbon2 !==0){
     carbon2.dibujarse();
     carbon2.moverse();}
   
   
   collar.dibujarse();
   collar.moverse();
  
   if (collar2 !=0){
     collar2.dibujarse();
     collar2.moverse();}
   
}
function keyPressed(){
  
 //movimiento para indigena
if(keyCode ==39){x1=x1+5}
if(keyCode ==37){x1=x1-5}
if(keyCode ==40){y1=y1+5}
if(keyCode ==38){y1=y1-5}


//movimiento para negro
if(keyCode ==102){x2=x2+5}
if(keyCode ==100){x2=x2-5}
if(keyCode ==101){y2=y2+5}
if(keyCode ==104){y2=y2-5}

//movimiento para mestizo
if(keyCode ==68){x3=x3+5}
if(keyCode ==65){x3=x3-5}
if(keyCode ==83){y3=y3+5}
if(keyCode ==87){y3=y3-5}
}
//determinamos cada especie
  
  function blancos() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 50;
  this.vivo = 1;
//como se dibujara
  this.dibujarse = function() { 
    if(this.vivo= 1){
     image(blancoI,this.x, this.y)
    }
  }
  //en que espacio podra moverse, y la manera como será asignada su ubicación
  this.moverse = function() {
    this.x = this.x+random();
    this.y = this.y+random();
    //delimitamos el aréa en el que puede aparecer y moverse
     if(this.x < 50){
    this.x = this.x+2*dir;
  }
  if(this.x >= 50 && this.x < 750){
    this.x = this.x+2*dir;
  }
  if(this.x >= 750){
    this.x = this.x+2*dir;
  }
  
  
  
  if(this.x < 750 || this.x > 50){
    dir = -dir;
  }
  
    
    if(this.y < 50){
    this.y = this.y+2*dir;
  }
  if(this.y >=  50 && this.x < 750){
    this.y = this.y+2*dir;
  }
  if(this.y >=  750){
    this.y = this.y+2*dir;
  }
  
  if(this.y > 750 || this.y < 0){
    dir = -dir;
  }
   if(this.x < 50){
      this.x = 50;
    }
   if(this.x > 750){
      this.x = 750;
    }
    if(this.y < 50){
      this.y = 50;
    }
   if(this.y > 730){
      this.y = 730;
    }

  
  }
  
  }
  
 
  
  
  function negros() {
  this.x = random(20, width);
  this.y = random(20, height);
  this.tamano = 50;
  this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo= 1){
     image(negroI,this.x, this.y)
    }
  }
  this.moverse = function() {
    this.x = this.x+x2+random(-1, 1);
    this.y = this.y+y2+random(-1, 1);
    
     if(this.x < 50){
    this.x = this.x+2*dir;
  }
  if(this.x >= 50 && this.x < 400){
    this.x = this.x+2*dir;
  }
  if(this.x >= 400){
    this.x = this.x+2*dir;
  }
  
  
  
  if(this.x < 50 || this.x > 400){
    dir = -dir;
  }
 
     if(this.x > 400){
      this.x = 400;
    }
    if(this.x < 50){
      this.x = 50;
    }
    
    if(this.y < 500){
    this.y = this.y+2*dir;
  }
  if(this.y >=  500 && this.x < 750){
    this.y = this.y+2*dir;
  }
  if(this.y >=  750){
    this.y = this.y+2*dir;
  }
  
  
  
  if(this.y > 750 || this.y < 500){
    dir = -dir;
  }

    
   if(this.y > 730){
      this.y = 730;
    }
    if(this.y < 500){
      this.y = 500;
    }
  }
  
  
  }
  
  function indigenas() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 50;
  this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo= 1){
     image(indigenaI,this.x, this.y)
    }
   
    
  }
  this.moverse = function() {
    this.x = this.x+x1+random();
    this.y = this.y+y1+random();
    
    
      if(this.x < l1ix){
    this.x = this.x+2*dir;
  }
  if(this.x >= l1ix && this.x < l2ix){
    this.x = this.x+2*dir;
  }
  if(this.x >= l2ix){
    this.x = this.x+2*dir;
  }
  
  
  
  if(this.x < 750 || this.x > 400){
    dir = -dir;
  }
 
     if(this.x < 400){
      this.x = 400;
    }
    if(this.x > 730){
      this.x = 730;
    }
    
    
    if(this.y < l1iy){
    this.y = this.y+2*dir;
  }
  if(this.y >=  l1iy && this.x < l2iy){
    this.y = this.y+2*dir;
  }
  if(this.y >=  l2iy){
    this.y = this.y+2*dir;
  }
  
  
  
  if(this.y > 750 || this.y < 0){
    dir = -dir;
  }
      if(this.y < 40){
      this.y = 40;
    }
     if(this.y > 730){
      this.y = 730;
    }
  
 
   
  }
  
  
  }
  
  function mestizos() {
  this.x = random(10, width);
  this.y = random(10, height);
  this.tamano = 50;
  this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo= 1){
     image(mestizoI,this.x, this.y)
    }
  }
  this.moverse = function() {
    this.x = this.x+x3+random();
    this.y = this.y+y3+random();
    
     
     if(this.x < 50){
    this.x = this.x+1*dir;
  }
  if(this.x >= 50 && this.x < 750){
    this.x = this.x+1*dir;
  }
  if(this.x >= 750){
    this.x = this.x+1*dir;
  }
  
  if(this.x < 750 || this.x > 50){
    dir = -dir;
  }
  
           if(this.x < 50){
      this.x = 50;
    }
         if(this.x > 730){
      this.x = 730;
    }
  
    
    
    
    if(this.y < 50){
    this.y = this.y+1*dir;
  }
  if(this.y >=  50 && this.x < 750){
    this.y = this.y+1*dir;
  }
  if(this.y >=  750){
    this.y = this.y+1*dir;
  }
  
  if(this.y > 750 || this.y < 0){
    dir = -dir;
  }
  
   if(this.y < 50){
      this.y = 50;
    }
         if(this.y > 730){
      this.y = 730;
    }

    
  }
  
  
  }
  
  function mulatos() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
  this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo= 1){
     image(mulatoI,this.x, this.y)
    }
  }
  this.moverse = function() {
    this.x = this.x+random(-1, 1);
    this.y = this.y+random(-1, 1);
    
        if(this.x < 300){
    this.x = this.x+2*dir;
  }
  if(this.x >= 300 && this.x < 750){
    this.x = this.x+2*dir;
  }
  if(this.x >= 750){
    this.x = this.x+2*dir;
  }
  
  
  
  if(this.x < 300 || this.x > 750){
    dir = -dir;
  }
 
     if(this.x < 300){
      this.x = 300;
    }
      if(this.x > 750){
      this.x = 750;
    }
   
    
    if(this.y < 350){
    this.y = this.y+2*dir;
  }
  if(this.y >=  350 && this.x < 750){
    this.y = this.y+2*dir;
  }
  if(this.y >=  750){
    this.y = this.y+2*dir;
  }
  
  
  
  if(this.y > 750 || this.y < 350){
    dir = -dir;
  }

    
         if(this.y < 350){
      this.y = 350;
    }
  
      if(this.y > 500){
      this.y = 350;
    }
  }
  
  
  
  }
  
  function zambos() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
  this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo = 1){
     image(zamboI,this.x, this.y)
    }
  }
  this.moverse = function() {
    this.x = this.x+random(-1, 1);
    this.y = this.y+random(-1, 1);
         if(this.x < 50){
    this.x = this.x+2*dir;
  }
  if(this.x >= 50 && this.x < 400){
    this.x = this.x+2*dir;
  }
  if(this.x >= 400){
    this.x = this.x+2*dir;
  }
  
  
  
  if(this.x < 50 || this.x > 400){
    dir = -dir;
  }
 
     if(this.x < 50){
      this.x = 50;
    }
         if(this.x > 400){
      this.x = 400;
    }
    
    
    if(this.y < 500){
    this.y = this.y+2*dir;
  }
  if(this.y >=  500 && this.x < 750){
    this.y = this.y+2*dir;
  }
  if(this.y >=  750){
    this.y = this.y+2*dir;
  }
  
  
  
  if(this.y > 750 || this.y < 500){
    dir = -dir;
  }

    
         if(this.y < 500){
      this.y = 500;
    }
   if(this.y > 730){
   this.y = 730;
    }
    
  }
  
   
  
  
  }
  
  function maices() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
 this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo = 1){
     image(maizI,this.x, this.y,this.tamano,this.tamano)
    }
  }
  this.moverse = function() {
    this.x = this.x+random(-1, 1);
    this.y = this.y+random(-1, 1);
    
    if(this.x < 300){
      this.x = 300;
    }
    
     if(this.x > 760){
      this.x = 760;
    }
    
     if(this.y < 300){
      this.y = 300;
    }
    if(this.y > 450){
      this.y = 450;
    }
  }
  
  this.morirse = function() {
   
    this.x = random(0, width);
    this.y = random(0, height);
    this.tamano= 1;
  }
  
  }
  
  function carbones() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
 this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo = 1){
     image(carbonI,this.x, this.y,this.tamano,this.tamano)
    }
  }
  this.moverse = function() {
    this.x = this.x+random(-1, 1);
    this.y = this.y+random(-1, 1);
    
   if(this.y < 600){
      this.y = 600;
    }
    
    if(this.x > 300){
      this.x = 300;
    }
    
    
     if(this.y >750){
      this.y = 750;
    }
    
    if(this.x < 30){
      this.x = 30;
    }
  
  }
  
  this.morirse = function() {
    //this.vivo = 0;
    this.x = random(0,0);
    this.y = random(0,0);
    this.tamano= 1 ;
  }
  
}

function collares() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 20;
 this.vivo = 1;

  this.dibujarse = function() {
    if(this.vivo = 1){
    fill(this.x, this.y,150);
    ellipse(this.x, this.y,this.tamano,this.tamano);
    
    fill(this.x, 150, this.y);
    ellipse(this.x, this.y,this.tamano-10,this.tamano-10);
    }
  }
  
  
  this.moverse = function() {
    this.x = this.x+random(-1, 1);
    this.y = this.y+random(-1, 1);
    

    
    if(this.x < 30){
      this.x = 30;
    }
    
     if(this.x > 200){
      this.x = 200;
    }
    
    
     if(this.y < 350){
      this.y = 350;
    }
    
   
     if(this.y > 500){
      this.y = 500;
    }
  
  }
  
  this.morirse = function() {
    
    this.x = random(0, 0);
    this.y = random(0, 0);
    this.tamano= 0;
  }
  
}  