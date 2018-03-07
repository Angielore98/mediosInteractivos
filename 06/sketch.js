
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);

}

function draw() {
   background(mouseX-width-80,mouseY-100,mouseX+100); //El color de la mayoria de los objetos se ve modificado por la posición en X o Y del mouse.
    stroke(255,0,0);
     
      push();
      fill(0,mouseY+100,50)
      translate(0,height/3,0);
       box(width,height/3,20);//se hace la caja que da lugar al suelo en donde estan los arboles
       pop();
 
  rotateY(mouseX); //a través de este comando se hace que el conjunto de los elementos hechos desde este punto en adelante giren en torno al eje Y
  push();
  fill(mouseX+150,95,32)
translate(-width/4,height/12,30);
rotateY(mouseX,mouseY)// a los elementos, los conos, los hice girar a partir de este comando en su eje Y segun posición en Y y X
  cone((height/20)/2,(width/-3));//con los conos hice el tronco de los arboles. La mayoria de medidas las hice teniendo en cuenta el ancho y alto de la pantalla, para que de esta manera se pueda adaptar y ser proporcional desde el dispositivo donde se este viendo.
  pop();
  
    
  push();
translate(width/4,height/12,30);//A través de translate se ubican las figuras 3d
  rotateY(mouseX,mouseY)
  cone((width/25)/2,(-height/1.5))
  pop();
   
  push();
translate(0,height/20,15);
  rotateY(mouseX,mouseY)
  cone(width/25,-height/1.5);
  pop();
  
  //COPAS DE ARBOL
  
  //GRUPO1

  push();
  fill(mouseX,250,0)
translate(-width/4,height/-11,30);
  rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
    push();
translate(-width/4,height/-6,30);
    rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
    push();
  
translate(-width/4,height/-4,30);
    rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
  
  
  //GRUPO2
  
   push();
translate(width/4,height/-11,30);
    rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
   push();
translate(width/4,height/-6,30);
    rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
   push();
translate(width/4,height/-4,30);
    rotateY(mouseX,mouseY)
  cone((width/10)/2,(-height/2)/2);
  pop();
  
  
  //GRUPO3
  
   push();
  translate(0,height/-10,30);
    rotateY(mouseX,mouseY)
  cone((width/4)/2,(-height/1.5)/2);
  pop();
   push();
  translate(0,height/-5.5,30);
    rotateY(mouseX,mouseY)
  cone((width/4)/2,(-height/1.5)/2);
  pop();
   push();
  translate(0,height/-3,30);
    rotateY(mouseX,mouseY)
  cone((width/4)/2,(-height/1.5)/2);
  pop();
  
  
  //Nubes
  
    push();
  fill(mouseY+80,181,181)
translate(width/-2.3,height/-2.6);
 sphere((width/40));
  pop();
    push();

translate(width/-2.5,height/-2.4);
 sphere(width/30);
  pop();
    push();

translate(width/-2.8,height/-2.4);
 sphere(width/30);
  pop();
    push();

translate(width/-3.2,height/-2.6);
 sphere((width/40));
  pop();
  push();
 
translate(width/-2.6,height/-2.2);
 sphere((width/40));
  pop();
  push();
 
translate(width/-2.7,height/-2.5);
 sphere((width/30));
  pop();
  
  //NUBE2
  
      push();
 
translate(width/2.3,height/-2.6);
 sphere((width/40));
  pop();
    push();
 
translate(width/2.5,height/-2.4);
 sphere(width/30);
  pop();
    push();

translate(width/2.8,height/-2.4);
 sphere(width/30);
  pop();
    push();

translate(width/3.2,height/-2.6);
 sphere((width/40));
  pop();
  push();

translate(width/2.6,height/-2.2);
 sphere((width/40));
  pop();
  push();
translate(width/2.7,height/-2.5);
 sphere((width/30));
  pop();
  
  
  
// box()
//plane()
//sphere()
//ellipsoid()
//cone()
//cylinder()
//torus()
  
  
}

