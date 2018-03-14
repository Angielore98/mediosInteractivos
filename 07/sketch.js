//Definimos las variables que se usaran
var a1;//Variable para llamar a la imagen en donde desee.
var a2;
var a3;
//Estas variable es para aplicar el efecto de puntillismo a la imagen, deniniendo 
//las medidas de los puntos
var smallPoint, largePoint;
smallPoint = 4;
  largePoint = 20;


//variable para definir la funcion y el area de acción de los botones
var filtro = 0;

var B1X= 20;
var B1Y= 20;
var B1T= 30;

var B2X= 20;
var B2Y= 55;
var B2T= 30;


var B3X= 20;
var B3Y= 90;
var B3T= 30;

var B4X=  20;
var B4Y= 125;
var B4T= 30;

var B5X=  20;
var B5Y= 160;
var B5T= 30;

var B6X=  20;
var B6Y= 195;
var B6T= 30;

var B7X=  20;
var B7Y= 230;
var B7T= 30;

var B8X=  20;
var B8Y= 265;
var B8T= 30;

var B9X=  20;
var B9Y= 300;
var B9T= 30;


var B10X=  20;
var B10Y= 335;
var B10T= 30;

var B11X=  20;
var B11Y= 370;
var B11T= 30;

var B12X=  20;
var B12Y= 405;
var B12T= 30;

var B13X=  20;
var B13Y= 440;
var B13T= 30;

var B14X=  20;
var B14Y= 475;
var B14T= 30;

var B15X=  20;
var B15Y= 510;
var B15T= 30;

var B16X=  20;
var B16Y= 545;
var B16T= 30;


function preload() 
{
 //carga la imágen en el sketch
 a1 = loadImage('assets/a1.jpg');
   a2 = loadImage('assets/a1.jpg');
  a3= loadImage('assets/a1.jpg');
  
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(a1)//se usa la imagen como fondo del área de trabajp
  noStroke();//quita el borde a los elementos dibujados
  a1.loadPixels();
  a3.filter(GRAY)
  a2.filter(INVERT);
  
}

function draw() {
  
 
  //se define el area en mouseIsPressed actuaria o se activaria determinada herramienta
  //También se nombran o nuemran los filtros, relacionandolos con determinado botón
  
  if (mouseIsPressed){
		if (mouseX > B1X && mouseX < B1X + B1T &&
			mouseY > B1Y && mouseY < B1Y + B1T) {
			filtro=0;
		}
		if (mouseX > B2X && mouseX < B2X + B2T &&
			mouseY > B2Y && mouseY < B2Y + B2T) {
			filtro=1;
		}
    
    if (mouseX > B3X && mouseX < B3X + B3T &&
			mouseY > B3Y && mouseY < B3Y + B3T) {
			filtro=2
		}
    
    if (mouseX > B4X && mouseX < B4X + B4T &&
			mouseY > B4Y && mouseY < B4Y + B4T) {
			filtro=3
		}
    
    if (mouseX > B5X && mouseX < B5X + B5T &&
			mouseY > B5Y && mouseY < B5Y + B5T) {
			filtro=4}
      
    if (mouseX > B6X && mouseX < B6X + B6T &&
			mouseY > B6Y && mouseY < B6Y + B6T) {
			filtro=5}
        
    if (mouseX > B7X && mouseX < B7X + B7T &&
			mouseY > B7Y && mouseY < B7Y + B7T) {
			filtro=6}
          
    if (mouseX > B8X && mouseX < B8X + B8T &&
			mouseY > B8Y && mouseY < B8Y + B8T) {
			filtro=7}
            
    if (mouseX > B9X && mouseX < B9X + B9T &&
			mouseY > B9Y && mouseY < B9Y + B9T) {
			filtro=8}
              
    if (mouseX > B10X && mouseX < B10X + B10T &&
			mouseY > B10Y && mouseY < B10Y + B10T) {
			filtro=9}
    
     if (mouseX > B11X && mouseX < B11X + B11T &&
			mouseY > B11Y && mouseY < B11Y + B11T) {
			filtro=10}
    
     if (mouseX > B12X && mouseX < B12X + B12T &&
			mouseY > B12Y && mouseY < B12Y + B12T) {
			filtro=11}
    
     if (mouseX > B13X && mouseX < B13X + B13T &&
			mouseY > B13Y && mouseY < B13Y + B13T) {
			filtro=12}
    
     if (mouseX > B14X && mouseX < B14X + B14T &&
			mouseY > B14Y && mouseY < B14Y + B14T) {
			filtro=13}
    
     if (mouseX > B15X && mouseX < B15X + B15T &&
			mouseY > B15Y && mouseY < B15Y + B15T) {
			filtro=14}
     if (mouseX > B16X && mouseX < B16X + B16T &&
			mouseY > B16Y && mouseY < B16Y + B16T) {
			filtro=15}
    
   //Se define que hace cada filtro
    
    
  if (filtro== 0) {
		  // aparece la imagen inicial, 
  image(a1,0, 0, windowWidth, windowHeight);
    noTint()
		}
    
  if (filtro== 1) {
    //este for recoge los 30 pixeles alrededor de su ubicación
		for (var f = mouseY-20; f<mouseY+20; f=f+10)//la parte final define la distancia entre los pixeles tomados
 {
  
  for (var c = mouseX-20; c<mouseX+20; c=c+10)
  {
     // recoge los valores de color en X y Y de los pixeles
  
    var colSel = get(c, f);

    //guarda en una variable los valores de color de los pixeles selecionados
    var rojo = red(colSel);
    var verde = green(colSel);
    var azul = blue(colSel);
     
   //se pintan los elipses del color de los pixeles seleccionados
    //asi, esta herramienta pinta la imagen pero con pixeles 
    fill(colSel);
    rect(c, f,10,10);
    
   }
 
 }
		}
		if (filtro== 2) {
      //con esta herramienta se pinta la imagen con la técnica de puntillismo
		var pointillize = map(mouseX, 0, width, smallPoint, largePoint);//el tamaño de los
      //puntos fue definido por las variables mencionadas en la parte superior
 var x = floor(random(windowWidth));
  var y = floor(random(windowHeight));
  var pix = get(x, y); //se extrae el color de los pixeles en x y y
      //con el color extraido de los pixeles se hacen los puntos
 fill(pix);
  ellipse(x, y, pointillize, pointillize);
		}
    
  if (filtro== 3) {
  // Muestra la imagen en un tamaño menor, y a su vez permite pintar con esta 
    //al tener los puntos de ubicación anclados a la ubicación del mouse
  image(a1, mouseX+50,mouseY+50, a1.width/3, a1.height/3);
		}
  
  if (filtro== 4) {
  //aparece la imagne con colores invertidos
 filter(INVERT);
    //se puede pintar con esta imagen partiendo de la modificación de su tamaño,
    //ya que esta anclado a la posición del mouse en X y Y
 image(a1,0,0, mouseX+50, mouseY+50 );

}
		}
    
  
  
  
   if (filtro== 5) {
     //permite pintar con el cambio de tamaño de la imagen, ya que estas medidas
     //estan ancladas a la posición del mouse en X y Y
  image(a1, 0, 0, mouseX+20, mouseY+20);
		}
    
   if (filtro== 6) {
     //En esta herramienta aparecen 6 veces la misma imagen en tamaño de 1/8
     //y permite pintar con estas, 
		 image(a1, mouseX+50,mouseY+50, a1.width/8, a1.height/8);
		 image(a1, mouseX+50+a1.width/8,mouseY+50, a1.width/8, a1.height/8);
		 image(a1, mouseX+50-a1.width/8,mouseY+50, a1.width/8, a1.height/8);
     image(a1, mouseX+50,mouseY+50+a1.height/8, a1.width/8, a1.height/8);
		 image(a1, mouseX+50+a1.width/8,mouseY+50+a1.height/8, a1.width/8, a1.height/8);
		 image(a1, mouseX+50-a1.width/8,mouseY+50+a1.height/8, a1.width/8, a1.height/8);
      image(a1, mouseX+50,mouseY+50-a1.height/8, a1.width/8, a1.height/8);
		 image(a1, mouseX+50+a1.width/8,mouseY+50-a1.height/8, a1.width/8, a1.height/8);
		 image(a1, mouseX+50-a1.width/8,mouseY+50-a1.height/8, a1.width/8, a1.height/8);

		}
    
   if (filtro== 7) {
		filter(GRAY);
     //Aplica el filtro de una imagen gris 
     
		}
    
   if (filtro== 8) {
      filter(GRAY)
			 image(a1, mouseX+50,mouseY+50, a1.width/3, a1.height/3);
     //Aplica el filtro de grises, y permite dibujar con una imagen más pequeña, manteniendo el color gris
    
		}
    
   if (filtro== 9) {
     
  background(a1,windowWidth,windowHeight);
  image(a1,windowWidth,windowHeight,windowWidth,windowHeight);
  blend(a1,mouseY,	mouseX,windowWidth/windowWidth,windowHeight/windowHeight,0,0,windowWidth,windowHeight,DIFFERENCE)
//Esta herramienta permite jugar con los niveles de iluminación y de color al superponer otra imágen
     //además hay mayor variación de estos valores debido a que estan anclados a la posición del mouse
		}
   if (filtro== 10) {
       background(a1,windowWidth,windowHeight);
  image(a1,windowWidth,windowHeight,windowWidth,windowHeight);
  blend(a1,mouseIsPressed*100,	mouseIsPressed*500,windowWidth/windowWidth,windowHeight/windowHeight,0,0,windowWidth,windowHeight,LIGHTEST)
    //Con esta herramienta se juega con la cantidad de iluminación de la imágen, y se puede ver el cambio al oprimir el boton a traés de 
     //la herramienta de MouseIsPressed
		}
   if (filtro== 11) {
     blend(a1,100,100,windowWidth/windowWidth,windowHeight/windowHeight,0,0,windowWidth,windowHeight,DARKEST)
		}
   if (filtro== 12) {
     blend(0,0,width,height,0,0,width,height,OVERLAY)

		}
   if (filtro== 13) {
    blend(0,0,width,height,0,0,width,height,SCREEN)
		}
  
  
   if (filtro== 14) {
     tint(255,255,0)
     image(a1,0,0,windowWidth, windowHeight)
     // Esta herramienta aplica tinte a la imagen
}
  if (filtro== 15) {
     tint(mouseX,mouseY*10,0)
     image(a1,mouseX,mouseY,200+mouseIsPressed*200, 200+mouseIsPressed*200)
    // Esta herramienta aplica tinte a la imagen
    //el color del tinte varia dependiendo de la posición del mouse
    //Además permite pintar con las imagenes y el cambio de tinte de estas debido a 
    //que la ubicación también esta anclada a la posición del mouse
    //También ofrece dos tamaños, los cuales cambian si se presiona o no el mouse
}
   
  
 //se dibujan los botones, los hice al final para evitar que los filtros interfieran tambien en el color de estos
      
  fill(0);
	rect(10, 0, 50,windowHeight)
 
//Herramienta 1: reestablece la imagen
	fill(255,255,0);
	rect(B1X,B1Y,B1T,B1T);
  image(a1,B1X,B1Y,B1T,B1T)
  
  
  //Herramienta2: genera cuadros con el color de los pixeles
	fill(243,37,37);
rect(B2X,B2Y,B2T,B2T);
  
    fill(255);
  rect(20,B2Y,5,5)
  fill(0,0,255)
  rect(25,B2Y,5,5)
  fill(0,255,0)
  rect(30,B2Y,5,5)
  fill(255,0,0)
  rect(35,B2Y,5,5)
  fill(255,255,0)
  rect(40,B2Y,5,5)
  fill(0,10,200)
  rect(45,B2Y,5,5)
  
  fill(25,100,20);
  rect(20,60,5,5)
  fill(0,255,0)
  rect(20,70,5,5)
   fill(0,0,255)
  rect(20,75,5,5)
    fill(255,255,0)
  rect(20,80,5,5)
   fill(0,255,255)
  rect(25,65,5,5)
    fill(255,255,0)
  rect(25,75,5,5)
   fill(0,0,255)
  rect(25,80,5,5)
  
 fill(255,0,255)
  rect(30,60,5,5)
    fill(0,255,0)
  rect(30,65,5,5)
    fill(255,255,0)
  rect(30,70,5,5)
  fill(250,0,250)
  rect(30,75,5,5)
  fill(0,250,250)
  rect(30,80,5,5)
  rect(35,60,5,5)
    fill(255,255,0)
  rect(35,65,5,5)
   fill(0,0,255)
  rect(35,70,5,5)
  fill(20,255,0)
  rect(35,75,5,5)
  fill(255,25,0)
    rect(40,60,5,5)
    fill(0,25,0)
  rect(40,65,5,5)
    fill(0,255,0)
  rect(40,70,5,5)
  fill(250,0,250)
  rect(40,75,5,5)
   fill(0,0,255)
  rect(40,80,5,5)
  fill(0,255,0)
    rect(45,60,5,5)
   fill(0,0,255)
  rect(45,65,5,5)
    fill(255,0,200)
  rect(45,70,5,5)
    fill(255,255,0)
  rect(45,75,5,5)
    fill(0,255,0)
  rect(45,80,5,5)
  
  
  //HERRAMIENTA3: circulos de puntillismo
	fill(243,225,37);
rect(B3X,B3Y,B3T,B3T);
  fill(250)
 ellipse(25,95,10,10)
  fill(25,125,20)
 ellipse(35,95,10,10)
  fill(255,0,250)
 ellipse(45,95,10,10)
    fill(255,0,0)
 ellipse(25,105,10,10)
  fill(0,255,255)
 ellipse(35,105,10,10)
  fill(0,100,250)
 ellipse(45,105,10,10)
   fill(150,25,0)
 ellipse(25,115,10,10)
  fill(25,0,25)
 ellipse(35,115,10,10)
  fill(0,200,0)
 ellipse(45,115,10,10)
  
  //HERRAMIENTA4: pinta con la imagen en un tamaño más pequeño
	fill(112,243,37);
rect(B4X,B4Y,B4T,B4T);
  image(a1,B4X+5,B4Y+5,20,20)
  
  
  //HERRAMIENTA5: aplica filtro de invertir, y permite pintar con el cambio de tamaño de la imagen
  
  image(a2,B5X,B5Y,B5T,B5T)
 
 
 //HERRAMIENTA 6: DIBUJA CON EL CAMBIO DE TAMAÑO DE LA IMÁGEN
  image(a1,B6X,B6Y,B6T,B6T);
  image(a1,B6X,B6Y,B6T-10,B6T-10);
  image(a1,B6X,B6Y,B6T-20,B6T-20);
  
  //HERRAMIENTA 7: Pintar con 6 mini imágenes
  	

  image(a1,B7X,B7Y,B7T/3,B7T/3);
  image(a1,B7X+10,B7Y,B7T/3,B7T/3);
  image(a1,B7X+20,B7Y,B7T/3,B7T/3);
  image(a1,B7X,B7Y+10,B7T/3,B7T/3);
  image(a1,B7X,B7Y+20,B7T/3,B7T/3);
  image(a1,B7X+10,B7Y+10,B7T/3,B7T/3);
  image(a1,B7X+10,B7Y+20,B7T/3,B7T/3);
  image(a1,B7X+20,B7Y+10,B7T/3,B7T/3);
  image(a1,B7X+20,B7Y+20,B7T/3,B7T/3);
  
  //HERRAMIENTA 9 FILTRO GRIS
image(a3,B8X,B8Y,B8T,B8T)
 
  //HERRAMIENTA 10: Permite dibujar con el cambio de posición de la imágen
  //manteniendo el filtro gris
  	
  image(a3,B9X,B9Y,B9T,B9T);
  image(a1,B9X+5,B9Y+5,B9T-10,B9T-10);
  
  
  //HERRAMIENTA 11: Permite modificar los niveles de color y luminosidad de la imagen
  //al sobreponer otra imágen, en este caso la misma
  image(a1,B10X,B10Y,B10T,B10T);
  blend(a1,mouseX,mouseY,B10T,B10T,B10X,B10Y,B10T,B10T,DIFFERENCE)
  
  //HERRAMIENTA 12:Luminosidad
  image(a1,B11X,B11Y,B11T,B11T);
  blend(mouseIsPressed*B11X,	mouseIsPressed*B11Y,B11T,B11T,B11X,B11Y,B11T,B11T,LIGHTEST)
   
     
  //Herramienta 13: Darknest
image(a1,B12X,B12Y,B12T,B12T);
     blend(a1,B12X,B12Y,B12T,B12T,B12X,B12Y,B12T,B12T,DARKEST)
		
//HERRAMIENTA 14:OVERLAY
  image(a1,B13X,B13Y,B13T,B13T)
 blend(a1,0,0,B13T,B13T,B13X,B13Y,B13T,B13T,OVERLAY)
  
  
   //HERRAMIENTA 15; SCREEN
  fill(112,243,37);
image(a1,B14X,B14Y,B14T,B14T);
  blend(B14X,B14Y,B14T,B14T,B14X,B14Y,B14T,B14T,SCREEN)
		
  
  //HERRAMIENTA 16: TINT
  noTint()
  tint(255,0,0);
image(a1,B15X,B15Y,B15T,B15T);
noTint()
  
  //HERRAMIENTA 16: TINT

   noTint()
    tint(mouseX,mouseY*10,0)
image(a1,B16X,B16Y,B16T,B16T);
noTint()
 
    
 
}


