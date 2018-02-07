posXrect=0
posYrect=0
posxrect=0
posyrect=0
function setup() { 
  createCanvas(480, 720);
 background(22,2,2);
  fill(0)
  
  stroke (220)
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect, posYrect, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-40, posYrect+60, 20, 60);posXrect=posXrect+20;} //cuadros negros
  
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect+40, posYrect, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect, posYrect+60, 20, 60);posXrect=posXrect+20;} //cuadros negros
    for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect+40, posYrect, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect, posYrect+60, 20, 60);posXrect=posXrect+20;} //cuadros negros
    for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect+120, posYrect, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect+80, posYrect+60, 20, 60);posXrect=posXrect+20;} //cuadros negros

  stroke (0)
  fill(220)
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-240, posYrect+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-280, posYrect+60+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-240, posYrect+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-280, posYrect+60+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-200, posYrect+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-240, posYrect+60+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-160, posYrect+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-200, posYrect+60+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  
stroke (255,0,0)
  fill(0)
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600, posYrect+240, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640, posYrect+60+240, 20, 60);posXrect=posXrect+20;} //cuadros negros
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-280, posYrect+240, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-320, posYrect+60+240, 20, 60);posXrect=posXrect+20;} //cuadros negros
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600, posYrect+240, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640, posYrect+60+240, 20, 60);posXrect=posXrect+20;} //cuadros negros
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600, posYrect+240, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640, posYrect+60+240, 20, 60);posXrect=posXrect+20;} //cuadros negros
  
  
  stroke(255,0,0)
  fill(255)
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360, posYrect+360, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360, posYrect+60+360, 20, 60);posXrect=posXrect+20;} //cuadros blancos
    for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-320, posYrect+360, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-320, posYrect+60+360, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-320, posYrect+360, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-320, posYrect+60+360, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-320+80, posYrect+360, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-320+80, posYrect+60+360, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  
    stroke(255,255,255)
  fill(0)
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120, posYrect+480, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120, posYrect+60+480, 20, 60);posXrect=posXrect+20;} //cuadros negros
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360, posYrect+480, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360, posYrect+60+480, 20, 60);posXrect=posXrect+20;} //cuadros negros
  for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280, posYrect+480, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280, posYrect+60+480, 20, 60);posXrect=posXrect+20;} //cuadros negros
 for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280-160, posYrect+480, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280-160, posYrect+60+480, 20, 60);posXrect=posXrect+20;} //cuadros negros
  

    stroke (0)
  fill(255)
  
  
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280-160-120, posYrect+480+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280-160-120, posYrect+60+480+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280-160, posYrect+480+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280-160, posYrect+60+480+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280-160, posYrect+480+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280-160, posYrect+60+480+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
   for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-600-360+80-120-280-160+40, posYrect+480+120, 20, 60);posXrect=posXrect+20;}
for (var numEl=0;numEl<2;numEl=numEl+1){rect (posXrect-640-360+80-120-280-160+40, posYrect+60+480+120, 20, 60);posXrect=posXrect+20;} //cuadros blancos
  
  
 {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-120,40,10);posyrect=posyrect+20;}
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect-10,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-10,40,10);posyrect=posyrect-20;}//franjas blancas
  
   {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros cafés
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-120,40,10);posyrect=posyrect+20;}
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-10,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-10,40,10);posyrect=posyrect-20;}//franjas blancas
  
    {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect-10,40,10);posyrect=posyrect-20;}
 
  {fill(194, 61, 39)}
  
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-10,40,10);posyrect=posyrect-20;}
  
    {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+280,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+280,posyrect-10,40,10);posyrect=posyrect-20;}
  
      {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros cafes
  {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-10,40,10);posyrect=posyrect-20;}
 
    {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
    {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-10,40,10);posyrect=posyrect-20;}
  
  
   {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect+120,40,10);posyrect=posyrect+20;} //cuadros cafe
 {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-120,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-10,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-10,40,10);posyrect=posyrect-20;}
  

  {fill(74, 46, 35)}
   
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-120+360,40,10);posyrect=posyrect+20;}
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect-10+120,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-10+360,40,10);posyrect=posyrect-20;}//franjas blancas
  
{fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40+40,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros cafés
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-120+360,40,10);posyrect=posyrect+20;}
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-10+120,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-10+360,40,10);posyrect=posyrect-20;}//franjas blancas
  
     {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
 {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect-120+360,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-10+120,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect-10+360,40,10);posyrect=posyrect-20;}
 
  {fill(194, 61, 39)}
  
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
 {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-120+360,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+160,posyrect-10+120,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-10+360,40,10);posyrect=posyrect-20;}
  
   {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros cafes
    {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+280,posyrect-120+240,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect-10+120,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+280,posyrect-10+240,40,10);posyrect=posyrect-20;}
 
       {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320-40,posyrect+120+240,40,10);posyrect=posyrect+20;} //cuadros cafes
  {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-120+360,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320-40,posyrect-10+240,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-10+360,40,10);posyrect=posyrect-20;}
 
    {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect+120+120,40,10);posyrect=posyrect+20;} //cuadros naranjas
    {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-120+240,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect-10+120,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-10+240,40,10);posyrect=posyrect-20;}
 
      {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect+120+240,40,10);posyrect=posyrect+20;} //cuadros cafe
 {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-120+360,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-10+240,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-10+360,40,10);posyrect=posyrect-20;}
  
  
    {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect+120+360,40,10);posyrect=posyrect+20;} //cuadros cafes
    {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-120+480,40,10);posyrect=posyrect+20;}//cuadros narajas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect-10+360,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+40,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjas blancas
  
 {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect+120+480,40,10);posyrect=posyrect+20;} //cuadros naranjas
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-120+600,40,10);posyrect=posyrect+20;}
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect,posyrect-10+480,40,10);posyrect=posyrect-20;}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-10+600,40,10);posyrect=posyrect-20;}//franjas blancas
  
    {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect+120+480,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-120+480,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+120,posyrect-10+480,40,10);posyrect=posyrect-20;}
 
{fill(74, 46, 35)}
  
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect+600,40,10);posyrect=posyrect+20;} //cuadros 
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240-80,posyrect-120+600,40,10);posyrect=posyrect+20;} //cuadros 
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+80,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240-80,posyrect-10+600,40,10);posyrect=posyrect-20;}
    {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect+120+360,40,10);posyrect=posyrect+20;} //cuadros cafes
{fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-120+480,40,10);posyrect=posyrect+20;} //cuadros natanjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+200,posyrect-10+360,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+240,posyrect-10+480,40,10);posyrect=posyrect-20;}
    //por aqui voy
      {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320-40,posyrect+120+480,40,10);posyrect=posyrect+20;} //cuadros cafes
  {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-120+480,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320-40,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+320,posyrect-10+480,40,10);posyrect=posyrect-20;}
 
    {fill(194, 61, 39)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect+120+480,40,10);posyrect=posyrect+20;} //cuadros cafes
    {fill(74, 46, 35)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect-120+480,40,10);posyrect=posyrect+20;} //cuadros cafes
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+360,posyrect-10+480,40,10);posyrect=posyrect-20;}
  
  
   {fill(74, 46, 35)}
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect+120+480,40,10);posyrect=posyrect+20;} //cuadros cafe
 {fill(194, 61, 39)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-120+480,40,10);posyrect=posyrect+20;} //cuadros naranjas
   {fill(255,255,255)}
for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+400,posyrect-10+480,40,10);posyrect=posyrect-20;}//franjasblancas
  for (var numEl=0;numEl<6;numEl=numEl+1){rect(posxrect+440,posyrect-10+480,40,10);posyrect=posyrect-20;}
  stroke(255,0,0) //color de linea
  line(260,240,260,360)//linea
  line(340,240,340,360)
  line(240,300,360,300)
  
  
  
  
}