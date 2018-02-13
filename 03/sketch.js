var dir = 1;
var o=0//posicion y del rectangulo
var a=142//posicion x de cuadrados
var l1=71
var l2=142
var l3=284
var L1=71
var L2=142
var L3=284
var Z1=0
var Z2=71
var Z3=213
var Z4=142
var z1=0
var z2=71
var z3=213
var z4=142
var T1=0
var T2=71
var T3=142
var t1=284
var t2=213
var t3=142
var Ta1=0
var Ta2=71
var Ta3=142
var ta1=284
var ta2=213
var ta3=142


function setup() { 
  createCanvas(1704, 1562);
} 

function draw() { 
  background(100,0,255);
 
  fill(0,255,0)
  rect(710,o,284,71);//rectangulo
     o=o+2*dir;//numero es la velocidad
if(o>=1278){o=1278}// queda quieta la figura
 if(o>=100)
  fill(255,0,0)
rect(923,a,142,142);//cuadrados
  rect(639,a,142,142);
   a=a+10*dir;//numero es la velocidad
if(a>=1420){a=1420}// queda quieta la figura
 
  
    
 fill(0,0,255)
beginShape();//L
vertex(994,l1);
  vertex(994,l2);
  vertex(923,l2);
  vertex(923,l3);
  vertex(852,l3);
  vertex(852,l1);
endShape(CLOSE);
  l1=l1+6*dir;//numero es la velocidad
if(l1>=1349){l1=1349}// queda quieta la figura
    l2=l2+6*dir;//numero es la velocidad
if(l2>=1420){l2=1420}// queda quieta la figura
    l3=l3+6*dir;//numero es la velocidad
if(l3>=1562){l3=1562}// queda quieta la figura
  
  fill(0,0,150)
  beginShape();//L
vertex(710,L1);
  vertex(710,L2);
  vertex(781,L2);
  vertex(781,L3);
  vertex(852,L3);
  vertex(852,L1);
endShape(CLOSE);
    L1=L1+7*dir;//numero es la velocidad
if(L1>=1349){L1=1349}// queda quieta la figura
    L2=L2+7*dir;//numero es la velocidad
if(L2>=1420){L2=1420}// queda quieta la figura
    L3=L3+7*dir;//numero es la velocidad
if(L3>=1562){L3=1562}// queda quieta la figura
  
  fill(200,0,0)
  beginShape();//Z
vertex(994,Z1);
  vertex(1065,Z1);
  vertex(1065,Z2);
   vertex(1136,Z2);
  vertex(1136,Z3);
  vertex(1065,Z3);
    vertex(1065,Z4);
  vertex(994,Z4);
endShape(CLOSE);
    Z1=Z1+5*dir;//numero es la velocidad
if(Z1>=1278){Z1=1278}// queda quieta la figura
    Z2=Z2+5*dir;//numero es la velocidad
if(Z2>=1349){Z2=1349}// queda quieta la figura
    Z3=Z3+5*dir;//numero es la velocidad
if(Z3>=1491){Z3=1491}// queda quieta la figura
  Z4=Z4+5*dir;//numero es la velocidad
if(Z4>=1420){Z4=1420}// queda quieta la figura
  
    beginShape();//Z
vertex(710,z1);
vertex(639,z1);
vertex(639,z2);
vertex(568,z2);
vertex(568,z3);
vertex(639,z3);
vertex(639,z4);
vertex(710,z4);
endShape(CLOSE);
      z1=z1+4*dir;//numero es la velocidad
if(z1>=1278){z1=1278}// queda quieta la figura
    z2=z2+4*dir;//numero es la velocidad
if(z2>=1349){z2=1349}// queda quieta la figura
    z3=z3+4*dir;//numero es la velocidad
if(z3>=1491){z3=1491}// queda quieta la figura
  z4=z4+4*dir;//numero es la velocidad
if(z4>=1420){z4=1420}// queda quieta la figura
  
  
  fill(0,180,0)
  beginShape();//TDerecha
vertex(1278,T1);
  vertex(1065,T1);
  vertex(1065,T2);
   vertex(1136,T2);
  vertex(1136,T3);
  vertex(1207,T3);
    vertex(1207,T2);
  vertex(1278,T2);
endShape(CLOSE);
T1=T1+3*dir;//numero es la velocidad
if(T1>=1278){T1=1278}// queda quieta la figura
    T2=T2+3*dir;//numero es la velocidad
if(T2>=1349){T2=1349}// queda quieta la figura
    T3=T3+3*dir;//numero es la velocidad
if(T3>=1420){T3=1420}// queda quieta la figura
  
  
    fill(0,80,0)
  beginShape();//T2abajoDerecha
vertex(1278,t1);
  vertex(1278,t2);
  vertex(1207,t2);
   vertex(1207,t3);
  vertex(1136,t3);
  vertex(1136,t2);
    vertex(1065,t2);
  vertex(1065,t1);
endShape(CLOSE);
  t1=t1+9*dir;//numero es la velocidad
if(t1<0){t1=0}// queda quieta la figura
    t2=t2+9*dir;//numero es la velocidad
if(t2>=1491){t2=1491}// queda quieta la figura
    t3=t3+9*dir;//numero es la velocidad
if(t3>=1420){t3=1420}// queda quieta la figura
  
    fill(0,180,0)
   beginShape();//TIzquierda
vertex(639,Ta1);
  vertex(639,Ta2);
  vertex(568,Ta2);
   vertex(568,Ta3);
  vertex(497,Ta3);
  vertex(497,Ta2);
    vertex(426,Ta2);
  vertex(426,Ta1);
endShape(CLOSE);
  Ta1=Ta1+2*dir;//numero es la velocidad
if(Ta1>=1278){Ta1=1278}// queda quieta la figura
    Ta2=Ta2+2*dir;//numero es la velocidad
if(Ta2>=1349){Ta2=1349}// queda quieta la figura
    Ta3=Ta3+2*dir;//numero es la velocidad
if(Ta3>=1420){Ta3=1420}// queda quieta la figura

    fill(0,80,0)
  beginShape();//T2abajoIzquierda
vertex(639,ta1);
  vertex(639,ta2);
  vertex(568,ta2);
   vertex(568,ta3);
  vertex(497,ta3);
  vertex(497,ta2);
    vertex(426,ta2);
  vertex(426,ta1);
endShape(CLOSE);
    ta1=ta1+8*dir;//numero es la velocidad
if(ta1<0){ta1=0}// queda quieta la figura
    ta2=ta2+8*dir;//numero es la velocidad
if(ta2>=1491){ta2=1491}// queda quieta la figura
    ta3=ta3+8*dir;//numero es la velocidad
if(ta3>=1420){ta3=1420}// queda quieta la figura
  
  print(frameCount);
//	if(frameCount<70){saveCanvas("miFlipbook" + frameCount, '.png');}

}