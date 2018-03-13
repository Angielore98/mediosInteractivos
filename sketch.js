//Definimos las variables que se usaran
var a1;//Variable para llamar a la imagen en donde desee.

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


function preload() 
{
 //carga la imágen en el sketch
 a1 = loadImage('assets/a1.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(a1)//se usa la imagen como fondo del área de trabajp
  noStroke();//quita el borde a los elementos dibujados
 // a1.loadPixels();
  
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
    
   //Se define que hace cada filtro
    
    
  if (filtro== 0) {
		  // aparece la imagen inicial, 
  image(a1,0, 0, windowWidth, windowHeight);
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
    ellipse(c, f,10,10);
    
   }
 
 }
		}
		if (filtro== 2) {
      //con esta herramienta se pinta la imagen con la técnica de puntillismo
		var pointillize = map(mouseX, 0, width, smallPoint, largePoint);//el tamaño de los
      //puntos fue definido por las variables mencionadas en la parte superior
 var x = floor(random(a1.width));
  var y = floor(random(a1.height));
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
		}
    
   if (filtro== 8) {
      filter(GRAY)
			 image(a1, mouseX+50,mouseY+50, a1.width/3, a1.height/3);
    
		}
    
   if (filtro== 9) {
     blend(a1,0,0,width,height,0,0,width,height,DIFFERENCE)

		}
   if (filtro== 10) {
     blend(a1,0,0,width,height,0,0,width,height,LIGHTEST)
		}
   if (filtro== 11) {
     blend(a1,0,0,width,height,0,0,width,height,DARKEST)
     

		}
   if (filtro== 12) {
     blend(0,0,width,height,0,0,width,height,OVERLAY)

		}
   if (filtro== 13) {
    blend(0,0,width,height,0,0,width,height,SCREEN)
     

		}
   if (filtro== 14) {
    blend(0,0,width,height,0,0,width,height,ADD)
		}
  
 //se dibujan los botones, los hice al final para evitar que los filtros interfieran tambien en el color de estos
      
  fill(0);
	rect(0, 0, 60,windowHeight)

	fill(255,255,0);
	rect(B1X,B1Y,B1T,B1T);
	fill(243,37,37);
rect(B2X,B2Y,B2T,B2T);
	fill(243,225,37);
rect(B3X,B3Y,B3T,B3T);
	fill(112,243,37);
rect(B4X,B4Y,B4T,B4T);
  	fill(37,94,243);
rect(B5X,B5Y,B5T,B5T);
  	fill(200,0,147);
rect(B6X,B6Y,B6T,B6T);
  	fill(37,222,243);
rect(B7X,B7Y,B7T,B7T);
  	fill(243,37,37);
rect(B8X,B8Y,B8T,B8T);
  	fill(162,37,243);
rect(B9X,B9Y,B9T,B9T);
  	fill(243,37,203);
rect(B10X,B10Y,B10T,B10T);
  fill(193,243,37);
rect(B11X,B11Y,B11T,B11T);
  fill(200, 10, 5);
rect(B12X,B12Y,B12T,B12T);
  fill(37,243,147);
rect(B13X,B13Y,B13T,B13T);
  fill(112,243,37);
rect(B14X,B14Y,B14T,B14T);
  fill(243,225,37);
rect(B15X,B15Y,B15T,B15T);
	
 
    
 
}


