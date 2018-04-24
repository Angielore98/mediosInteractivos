var datos;
var Colombia;


//DEFINO TAMAÑOS Y POSICIONES PARA LOS BOTONES
//AMAZONAS
var AZX= 410 ;  
var AZY= 750 ; 
var AZTX= 80 ;
var AZTY=  13;
//ANTIOQUIA
var AQX= 150 ;  
var AQY= 320 ; 
var AQTX=  60;
var AQTY=  13;
//ARAUCA
var AX= 410 ;  
var AY= 310 ; 
var ATX= 60 ;
var ATY=  13;
//ATLANTICO
var ATLX= 160 ;  
var ATLY= 90 ; 
var ATLTX= 60 ;
var ATLTY=  13;
//BOYACA
var BYX= 300 ;  
var BYY= 380 ; 
var BYTX= 50 ;
var BYTY=  13;
//BOLIVAR
var BVX= 235 ;  
var BVY= 210 ; 
var BVTX= 45 ;
var BVTY=  13;
//CALDAS
var CDX= 170 ;  
var CDY= 390; 
var CDTX= 50 ;
var CDTY=  13;
//CAQUETA
var CQX= 270 ;  
var CQY= 660 ; 
var CQTX= 60;
var CQTY=  13;
//CASANARE
var CNRX= 360 ;  
var CNRY= 390 ; 
var CNRTX= 70 ;
var CNRTY=  13;
//CAUCA
var CX= 80 ;  
var CY= 550 ; 
var CTX= 40 ;
var CTY=  13;
//CESAR
var CSRX= 280 ;  
var CSRY= 140 ; 
var CSRTX= 40 ;
var CSRTY=  13;
//CHOCO
var CHX= 90 ;  
var CHY= 385 ; 
var CHTX= 40 ;
var CHTY=  15;
//CORDOBA
var CBX= 150 ;  
var CBY= 230 ; 
var CBTX= 60 ;
var CBTY=  13;
//CUNDINAMARCA
var CMX= 230 ;  
var CMY= 430 ; 
var CMTX= 100 ;
var CMTY=  13;
//GUAINIA
var GNX= 550 ;  
var GNY= 530 ; 
var GNTX= 60 ;
var GNTY=  13;
//GUAJIRA
var GX= 310 ;  
var GY= 38 ; 
var GTX= 78 ;
var GTY=  12;
//GUAVIARE
var GVX= 370 ;  
var GVY= 570 ; 
var GVTX= 60 ;
var GVTY=  13;
//HUILA
var HX= 180 ;  
var HY= 540 ; 
var HTX= 40 ;
var HTY=  13;
//MAGDALENA
var MGX= 210 ;  
var MGY= 110 ; 
var MGTX= 80 ;
var MGTY=  13;
//META
var MX= 330 ;  
var MY= 490 ; 
var MTX= 40 ;
var MTY=  13;
//NARIÑO
var ÑX= 40 ;  
var ÑY= 610 ; 
var ÑTX= 40 ;
var ÑTY=  13;
//NORTE DE SANTANDER
var NSX= 310 ;  
var NSY= 220 ; 
var NSTX= 70 ;
var NSTY=  30;
//PUTUMAYO
var PYX= 160 ;  
var PYY= 670 ; 
var PYTX= 70 ;
var PYTY=  13;
//QUINDIO
var QX= 160;  
var QY= 440 ; 
var QTX= 50 ;
var QTY=  13;
//RISARALDA
var RSX= 150 ;  
var RSY= 410 ; 
var RSTX= 70 ;
var RSTY=  13;
//SANTANDER
var STX= 270 ;  
var STY= 315 ; 
var STTX= 70 ;
var STTY=  15;
//SUCRE
var SCRX= 190 ;  
var SCRY= 200 ; 
var SCRTX= 55 ;
var SCRTY= 12;
//TOLIMA
var TLX= 180 ;  
var TLY= 470 ; 
var TLTX= 50 ;
var TLTY=  13;
//VALLE DEL CAUCA
var VCX= 100 ;  
var VCY= 480 ; 
var VCTX= 60 ;
var VCTY=  30;
//VAUPES
var VPX= 450 ;  
var VPY= 640 ; 
var VPTX= 60;
var VPTY=  13;
//VICHADA
var VCHX= 520 ;  
var VCHY= 420 ; 
var VCHTX= 60 ;
var VCHTY=  13;



function preload(){
  datos = loadJSON("https://www.datos.gov.co/resource/utka-ct4k.json");
  datos1 = loadJSON("https://www.datos.gov.co/resource/h8m2-8ch4.json");

  Colombia = loadImage("imagenes/Colombia.png");
 
}
function setup() {
 createCanvas(700, 900);
}

function draw() {
  background(0,100,250)
   image(Colombia,0,0,700,900);  
   //escribo el nombre de los departamentos, llamando el dato en el archivo json
  
  //1AMAZONAS
  fill(255,0,255);
  var departamento = datos[1].departamento
  textSize(16);
  text(departamento, 450, 760);
  textAlign(CENTER);
  
  //2ANTIOQUIA
  fill(255,0,255);
  var departamento = datos[3].departamento;
  textSize(16);
  text(departamento, 180, 330);
  //3ARAUCA
  fill(255,0,255);
  var departamento = datos[93].departamento;
  textSize(16);
  text(departamento, 440, 320);
  //4 ATLÁNTICO
   fill(255,0,255);
  var departamento = datos[122].departamento;
  textSize(16);
  text(departamento, 190, 100);
  //5 BOLIVAR
  var departamento = datos[167].departamento
  textSize(16);
  text(departamento, 260, 220); 
    
    //6 BOYACA
  var departamento = datos[228].departamento
  textSize(16);
  text(departamento, 325, 390); 
   //7CALDAS
  var departamento = datos[350].departamento
  textSize(16);
  text(departamento, 200, 400); 
  //8CAQUETA
  var departamento = datos[425].departamento
  textSize(16);
  text(departamento, 300, 670); 
  //9CASANARE
  var departamento = datos[458].departamento
  textSize(16);
  text(departamento, 400, 400); 
  //10 CAUCA
  var departamento = datos[501].departamento
  textSize(16);
  text(departamento, 100, 560);   
  // 11 CESAR
  var departamento = datos[602].departamento
  textSize(16);
  text(departamento, 300, 150); 
  //12 CHOCO
 fill(255,0,255);
  var departamento = datos[671].departamento
  textSize(16);
  text(departamento, 110, 400);    
 //13 CORDOBA
    fill(255,0,255);
  var departamento = datos[704].departamento
  textSize(16);
  text(departamento, 180, 240);
  // 14 CUNDINAMARCA
  var departamento = datos[781].departamento
  textSize(16);
  text(departamento, 280, 440); 
  // 15  GUAINIA
  var departamento = datos[883].departamento
  textSize(16);
  text(departamento, 580, 540);    
  // 16 GUAVIARE
  var departamento = datos[890].departamento
  textSize(16);
  text(departamento, 400, 580);       
    //17 HUILA
   var departamento = datos[921].departamento
  textSize(16);
  text(departamento, 200, 550); 
  //llamo los datos de la segunda base de datos adjuntada, debido q ue en la primera no me dejaba llamar mas del arreglo 900
  //18 LA GUAJIRA
  fill(255,0,255);
  var departamento = datos1[1].departamento;
  textSize(16);
  text(departamento, 350,50);
  // 19 MAGDALENA
  var departamento = datos1[43].departamento
  textSize(16);
  text(departamento, 250, 120);   
   //20META
  fill(255,0,255);
  var departamento = datos1[95].departamento;
  textSize(16);
  text(departamento, 350, 500); 
   //21 NARIÑO
  fill(255,0,255);
  var departamento = datos1[161].departamento;
  textSize(16);
  text(departamento, 60, 620); 
    //22NORTE DE SANTANDER
  fill(255,0,255);
  var departamento = datos1[220].departamento;
  textSize(16);
  text(departamento, 300, 220, 100,100);
    //23 PUTUMAYO
  fill(255,0,255);
  var departamento = datos1[296].departamento;
  textSize(16);
  text(departamento, 195, 680);
  //24 QUINDIO
  fill(255,0,255);
  var departamento = datos1[337].departamento;
  textSize(16);
  text(departamento, 185,450);
  //25 RISARALDA
  var departamento = datos1[377].departamento
  textSize(16);
  text(departamento, 185,420); 
  //26 SANTANDER
  var departamento = datos1[428].departamento
  textSize(16);
  text(departamento, 305, 330); 
  //27 SUCRE
  var departamento = datos1[539].departamento
  textSize(16);
  text(departamento, 215, 215); 
  //28 TOLIMA
  var departamento = datos1[572].departamento
  textSize(16);
  text(departamento, 205, 480);  
  
  //29 VALLE DEL CAUCA
  var departamento = datos1[660].departamento
  textSize(16);
  text(departamento, 85, 475,100,100);  
  //30 VAUPES
  fill(255,0,255);
  var departamento = datos1[729].departamento;
  textSize(16);
  text(departamento, 480, 650);
  //31 VICHADA
  fill(255,0,255);
  var departamento = datos1[740].departamento;
  textSize(16);
  text(departamento, 550, 430);


    if (mouseIsPressed) {
    // Definimos el área sensible de los botones y que texto aparecera 
    //cuando sean oprimidos
    //AMAZONAS
    if (mouseX > AZX && mouseX < AZX + AZTX &&
      mouseY > AZY && mouseY < AZY + AZTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(100,100,0);
        stroke(255);
        rect(AZX,AZY-5,AZTX,AZTY*2);
        fill(255);
        noStroke();
        var recurso = datos[1].recurso_natural;
        //textSize(20);
        text(recurso, AZX,AZY,AZTX,AZTY*2);
      }
      //ANTIOQUIA
    if (mouseX > AQX && mouseX < AQX + AQTX &&
      mouseY > AQY && mouseY < AQY + AQTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        //recursos extraidos de Antioquia
        fill(0,200,0);
        stroke(255);
        rect(AQX-40,AQY-10,AQTX*4,AQTY*30);
        fill(255);
        noStroke();
        var recurso = datos[2].recurso_natural;
        text(recurso, AQX-10,AQY-5,AQTX*3,AQTY*2);
        var recurso = datos[5].recurso_natural;
        text(recurso, AQX-10,AQY+10,AQTX*3,AQTY*2);
        var recurso = datos[6].recurso_natural;
        text(recurso, AQX-10,AQY+25,AQTX*3,AQTY*2);
        var recurso = datos[7].recurso_natural;
        text(recurso, AQX-10,AQY+40,AQTX*3,AQTY*2);
        var recurso = datos[9].recurso_natural;
        text(recurso, AQX-10,AQY+55,AQTX*3,AQTY*2);
        var recurso = datos[10].recurso_natural;
        text(recurso, AQX-40,AQY+70,AQTX*4,AQTY*2);
        var recurso = datos[11].recurso_natural;
        text(recurso, AQX-10,AQY+85,AQTX*3,AQTY*2);
        var recurso = datos[12].recurso_natural;
        text(recurso, AQX-40,AQY+100,AQTX*4,AQTY*2);
        var recurso = datos[13].recurso_natural;
        text(recurso, AQX-40,AQY+115,AQTX*4,AQTY*2);
        var recurso = datos[15].recurso_natural;
        text(recurso, AQX-40,AQY+130,AQTX*4,AQTY*2);
        var recurso = datos[16].recurso_natural;
        text(recurso, AQX-40,AQY+145,AQTX*4,AQTY*2);
        var recurso = datos[18].recurso_natural;
        text(recurso, AQX-40,AQY+160,AQTX*4,AQTY*2);
        var recurso = datos[22].recurso_natural;
        text(recurso, AQX-40,AQY+175,AQTX*4,AQTY*2);
        var recurso = datos[24].recurso_natural;
        text(recurso, AQX-40,AQY+190,AQTX*4,AQTY*2);
        var recurso = datos[27].recurso_natural;
        text(recurso, AQX-40,AQY+205,AQTX*4,AQTY*2);
        var recurso = datos[32].recurso_natural;
        text(recurso, AQX-40,AQY+230,AQTX*4,AQTY*2);
        var recurso = datos[34].recurso_natural;
        text(recurso, AQX-40,AQY+245,AQTX*4,AQTY*2);
        var recurso = datos[45].recurso_natural;
        text(recurso, AQX-40,AQY+260,AQTX*4,AQTY*2);
        var recurso = datos[49].recurso_natural;
        text(recurso, AQX-40,AQY+275,AQTX*4,AQTY*2);
        var recurso = datos[51].recurso_natural;
        text(recurso, AQX-40,AQY+290,AQTX*4,AQTY*2);
        var recurso = datos[61].recurso_natural;
        text(recurso, AQX-40,AQY+305,AQTX*4,AQTY*2);
        var recurso = datos[71].recurso_natural;
        text(recurso, AQX-40,AQY+320,AQTX*4,AQTY*2);
        var recurso = datos[77].recurso_natural;
        text(recurso, AQX-40,AQY+335,AQTX*4,AQTY*2);
        var recurso = datos[83].recurso_natural;
        text(recurso, AQX-40,AQY+350,AQTX*4,AQTY*2);
      }
      //ARAUCA
    if (mouseX > AX && mouseX < AX + ATX &&
      mouseY > AY && mouseY < AY + ATY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(150,100,0);
        stroke(255);
        rect(AX-70,AY-5,ATX*4,ATY*13);
        fill(255);
        noStroke();
        var recurso = datos[92].recurso_natural;
        text(recurso, AX-40,AY,ATX*3,ATY*2);
        var recurso = datos[95].recurso_natural;
        text(recurso, AX-70,AY+17,ATX*4,ATY*2);
         var recurso = datos[99].recurso_natural;
        text(recurso, AX-40,AY+34,ATX*3,ATY*2);
        var recurso = datos[100].recurso_natural;
        text(recurso, AX-40,AY+52,ATX*3,ATY*2);
        var recurso = datos[102].recurso_natural;
        text(recurso, AX-40,AY+69,ATX*3,ATY*2);
        var recurso = datos[103].recurso_natural;
        text(recurso, AX-40,AY+86,ATX*3,ATY*2);
        var recurso = datos[105].recurso_natural;
        text(recurso, AX-40,AY+103,ATX*3,ATY*2);
        var recurso = datos[106].recurso_natural;
        text(recurso, AX-40,AY+120,ATX*3,ATY*2);
        var recurso = datos[113].recurso_natural;
        text(recurso, AX-40,AY+137,ATX*3,ATY*2);
      }
      //ATLANTICO
      if (mouseX > ATLX && mouseX < ATLX + ATLTX &&
      mouseY > ATLY && mouseY < ATLY + ATLTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,100,200);
        stroke(255);
        rect(ATLX-40,ATLY-5,ATLTX*4,ATLTY*20);
        fill(255);
        noStroke();
        var recurso = datos[121].recurso_natural;
        text(recurso, ATLX-40,ATLY,ATLTX*4,ATLTY*2);
        var recurso = datos[123].recurso_natural;
        text(recurso, ATLX-40,ATLY+17,ATLTX*4,ATLTY*2);
        var recurso = datos[124].recurso_natural;
        text(recurso, ATLX-40,ATLY+34,ATLTX*4,ATLTY*2);
        var recurso = datos[125].recurso_natural;
        text(recurso, ATLX-40,ATLY+52,ATLTX*4,ATLTY*2);
        var recurso = datos[127].recurso_natural;
        text(recurso, ATLX-40,ATLY+69,ATLTX*4,ATLTY*2);
        var recurso = datos[128].recurso_natural;
        text(recurso, ATLX-40,ATLY+86,ATLTX*4,ATLTY*2);
        var recurso = datos[130].recurso_natural;
        text(recurso, ATLX-40,ATLY+103,ATLTX*4,ATLTY*2);
        var recurso = datos[136].recurso_natural;
        text(recurso, ATLX-40,ATLY+120,ATLTX*4,ATLTY*2);
        var recurso = datos[137].recurso_natural;
        text(recurso, ATLX-40,ATLY+137,ATLTX*4,ATLTY*2);
        var recurso = datos[139].recurso_natural;
        text(recurso, ATLX-40,ATLY+154,ATLTX*4,ATLTY*2);
        var recurso = datos[140].recurso_natural;
        text(recurso, ATLX-40,ATLY+172,ATLTX*4,ATLTY*2);
        var recurso = datos[141].recurso_natural;
        text(recurso, ATLX-40,ATLY+199,ATLTX*4,ATLTY*2);
        var recurso = datos[148].recurso_natural;
        text(recurso, ATLX-40,ATLY+216,ATLTX*4,ATLTY*2);
        var recurso = datos[156].recurso_natural;
        text(recurso, ATLX-40,ATLY+233,ATLTX*4,ATLTY*2);
      }
      
      //BOLIVAR
            if (mouseX > BVX && mouseX < BVX + BVTX &&
      mouseY > BVY && mouseY < BVY + BVTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(200,150,0);
        stroke(255);
        rect(BVX-60,BVY,(BVTX*5)+20,BVTY*22);
        fill(255);
        noStroke();
        var recurso = datos[165].recurso_natural;
        text(recurso, BVX-40,BVY+17,BVTX*4,BVTY*2);
        var recurso = datos[166].recurso_natural;
        text(recurso, BVX-40,BVY+34,BVTX*4,BVTY*2);
       var recurso = datos[167].recurso_natural;
        text(recurso, BVX-40,BVY+52,BVTX*5,BVTY*2);
        var recurso = datos[170].recurso_natural;
        text(recurso, BVX-40,BVY+69,BVTX*5,BVTY*2);
        var recurso = datos[171].recurso_natural;
        text(recurso, BVX-40,BVY+86,BVTX*4,BVTY*2);
        var recurso = datos[172].recurso_natural;
        text(recurso, BVX-40,BVY+103,BVTX*4,BVTY*2);
        var recurso = datos[178].recurso_natural;
        text(recurso, BVX-40,BVY+120,BVTX*4,BVTY*2);
        var recurso = datos[183].recurso_natural;
        text(recurso, BVX-40,BVY+137,BVTX*4,BVTY*2);
        var recurso = datos[184].recurso_natural;
        text(recurso, BVX-40,BVY+154,BVTX*4,BVTY*2);
        var recurso = datos[190].recurso_natural;
        text(recurso, BVX-40,BVY+171,BVTX*4,BVTY*2);
        var recurso = datos[196].recurso_natural;
        text(recurso, BVX-40,BVY+188,BVTX*4,BVTY*2);
        var recurso = datos[198].recurso_natural;
        text(recurso, BVX-40,BVY+205,BVTX*5,BVTY*2);
        var recurso = datos[201].recurso_natural;
        text(recurso, BVX-40,BVY+222,BVTX*4,BVTY*2);
        var recurso = datos[211].recurso_natural;
        text(recurso, BVX-40,BVY+239,BVTX*4,BVTY*2);
        var recurso = datos[213].recurso_natural;
        text(recurso, BVX-40,BVY+256,BVTX*4,BVTY*2);
        
      }
      //BOYACA
      if (mouseX > BYX && mouseX < BYX + BYTX &&
      mouseY > BYY && mouseY < BYY + BYTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(250,80,0);
        stroke(255);
        rect(BYX-60,BYY,(BYTX*5)+20,BYTY*38);
        fill(255);
        noStroke();
var recurso = datos[230].recurso_natural;
        text(recurso, BYX-40,BYY+17,BYTX*5,BYTY*2);
        var recurso = datos[231].recurso_natural;
        text(recurso, BYX-40,BYY+34,BYTX*5,BYTY*2);
       var recurso = datos[232].recurso_natural;
        text(recurso, BYX-40,BYY+52,BYTX*5,BYTY*2);
        var recurso = datos[233].recurso_natural;
        text(recurso, BYX-40,BYY+69,BYTX*5,BYTY*2);
        var recurso = datos[235].recurso_natural;
        text(recurso, BYX-40,BYY+86,BYTX*5,BYTY*2);
        var recurso = datos[236].recurso_natural;
        text(recurso, BYX-40,BYY+103,BYTX*5,BYTY*2);
        var recurso = datos[237].recurso_natural;
        text(recurso, BYX-40,BYY+120,BYTX*5,BYTY*2);
        var recurso = datos[240].recurso_natural;
        text(recurso, BYX-40,BYY+137,BYTX*5,BYTY*2);
        var recurso = datos[241].recurso_natural;
        text(recurso, BYX-40,BYY+154,BYTX*5,BYTY*2);
        var recurso = datos[338].recurso_natural;
        text(recurso, BYX-40,BYY+171,BYTX*5,BYTY*2);
        var recurso = datos[246].recurso_natural;
        text(recurso, BYX-40,BYY+188,BYTX*5,BYTY*2);
        var recurso = datos[248].recurso_natural;
        text(recurso, BYX-40,BYY+205,BYTX*5,BYTY*2);
        var recurso = datos[253].recurso_natural;
        text(recurso, BYX-40,BYY+222,BYTX*5,BYTY*2);
        var recurso = datos[306].recurso_natural;
        text(recurso, BYX-40,BYY+239,BYTX*5,BYTY*2);
        var recurso = datos[260].recurso_natural;
        text(recurso, BYX-40,BYY+256,BYTX*5,BYTY*2);
        var recurso = datos[261].recurso_natural;
        text(recurso, BYX-40,BYY+273,BYTX*5,BYTY*2);
        var recurso = datos[262].recurso_natural;
        text(recurso, BYX-40,BYY+290,BYTX*5,BYTY*2);
        var recurso = datos[263].recurso_natural;
        text(recurso, BYX-40,BYY+307,BYTX*5,BYTY*2);
        var recurso = datos[274].recurso_natural;
        text(recurso, BYX-40,BYY+324,BYTX*5,BYTY*2);
        var recurso = datos[267].recurso_natural;
        text(recurso, BYX-40,BYY+341,BYTX*5,BYTY*2);
        var recurso = datos[276].recurso_natural;
        text(recurso, BYX-40,BYY+358,BYTX*5,BYTY*2);
        var recurso = datos[278].recurso_natural;
        text(recurso, BYX-40,BYY+375,BYTX*5,BYTY*2);
        var recurso = datos[282].recurso_natural;
        text(recurso, BYX-40,BYY+392,BYTX*5,BYTY*2);
        var recurso = datos[284].recurso_natural;
        text(recurso, BYX-40,BYY+409,BYTX*5,BYTY*2);
        var recurso = datos[296].recurso_natural;
        text(recurso, BYX-40,BYY+426,BYTX*5,BYTY*2);
        var recurso = datos[317].recurso_natural;
        text(recurso, BYX-40,BYY+443,BYTX*5,BYTY*2); 
      }
         //CALDAS
      if (mouseX > CDX && mouseX < CDX + CDTX &&
      mouseY > CDY && mouseY < CDY + CDTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,100,200);
        stroke(250);
        rect(CDX-60,CDY,(CDTX*5)+20,CDTY*26);
        fill(255);
        noStroke();
var recurso = datos[347].recurso_natural;
        text(recurso, CDX-40,CDY+17,CDTX*5,CDTY*2);
        var recurso = datos[348].recurso_natural;
        text(recurso, CDX-40,CDY+34,CDTX*5,CDTY*2);
       var recurso = datos[349].recurso_natural;
        text(recurso, CDX-40,CDY+52,CDTX*5,CDTY*2);
        var recurso = datos[350].recurso_natural;
        text(recurso, CDX-40,CDY+69,CDTX*5,CDTY*2);
        var recurso = datos[351].recurso_natural;
        text(recurso, CDX-40,CDY+86,CDTX*5,CDTY*2);
        var recurso = datos[355].recurso_natural;
        text(recurso, CDX-40,CDY+103,CDTX*5,CDTY*2);
        var recurso = datos[356].recurso_natural;
        text(recurso, CDX-40,CDY+120,CDTX*5,CDTY*2);
        var recurso = datos[359].recurso_natural;
        text(recurso, CDX-40,CDY+137,CDTX*5,CDTY*2);
        var recurso = datos[365].recurso_natural;
        text(recurso, CDX-40,CDY+154,CDTX*5,CDTY*2);
        var recurso = datos[371].recurso_natural;
        text(recurso, CDX-40,CDY+171,CDTX*5,CDTY*2);
        var recurso = datos[372].recurso_natural;
        text(recurso, CDX-40,CDY+188,CDTX*5,CDTY*2);
        var recurso = datos[380].recurso_natural;
        text(recurso, CDX-40,CDY+205,CDTX*5,CDTY*2);
        var recurso = datos[382].recurso_natural;
        text(recurso, CDX-40,CDY+222,CDTX*5,CDTY*2);
        var recurso = datos[387].recurso_natural;
        text(recurso, CDX-40,CDY+239,CDTX*5,CDTY*2);
        var recurso = datos[393].recurso_natural;
        text(recurso, CDX-40,CDY+256,CDTX*5,CDTY*2);
        var recurso = datos[403].recurso_natural;
        text(recurso, CDX-40,CDY+273,CDTX*5,CDTY*2);
        var recurso = datos[404].recurso_natural;
        text(recurso, CDX-40,CDY+290,CDTX*5,CDTY*2);
        var recurso = datos[418].recurso_natural;
        text(recurso, CDX-40,CDY+307,CDTX*5,CDTY*2);
      }
 //CAQUETA
      if (mouseX > CQX && mouseX < CQX + CQTX &&
      mouseY > CQY && mouseY < CQY + CQTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,80,250);
        stroke(255);
        rect(CQX-60,CQY,(CQTX*5)+20,CQTY*12);
        fill(255);
        noStroke();
var recurso = datos[422].recurso_natural;
        text(recurso, CQX-40,CQY+17,CQTX*5,CQTY*2);
        var recurso = datos[424].recurso_natural;
        text(recurso, CQX-40,CQY+34,CQTX*5,CQTY*2);
       var recurso = datos[428].recurso_natural;
        text(recurso, CQX-40,CQY+52,CQTX*5,CQTY*2);
        var recurso = datos[429].recurso_natural;
        text(recurso, CQX-40,CQY+69,CQTX*5,CQTY*2);
        var recurso = datos[431].recurso_natural;
        text(recurso, CQX-40,CQY+86,CQTX*5,CQTY*2);
        var recurso = datos[432].recurso_natural;
        text(recurso, CQX-40,CQY+103,CQTX*5,CQTY*2);
        var recurso = datos[435].recurso_natural;
        text(recurso, CQX-40,CQY+120,CQTX*5,CQTY*2);
        var recurso = datos[438].recurso_natural;
        text(recurso, CQX-40,CQY+137,CQTX*5,CQTY*2);
      }
      //CASANARE
      if (mouseX > CNRX && mouseX < CNRX + CNRTX &&
      mouseY > CNRY && mouseY < CNRY + CNRTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,200,0);
        stroke(255);
        rect(CNRX+20,CNRY,(CNRTX*3)+10,CNRTY*16);
        fill(255);
        noStroke();
var recurso = datos[453].recurso_natural;
        text(recurso, CNRX-40,CNRY+17,CNRTX*5,CNRTY*2);
        var recurso = datos[455].recurso_natural;
        text(recurso, CNRX-40,CNRY+34,CNRTX*5,CNRTY*2);
       var recurso = datos[458].recurso_natural;
        text(recurso, CNRX-40,CNRY+52,CNRTX*5,CNRTY*2);
        var recurso = datos[460].recurso_natural;
        text(recurso, CNRX-40,CNRY+69,CNRTX*5,CNRTY*2);
        var recurso = datos[463].recurso_natural;
        text(recurso, CNRX-40,CNRY+86,CNRTX*5,CNRTY*2);
        var recurso = datos[464].recurso_natural;
        text(recurso, CNRX-40,CNRY+103,CNRTX*5,CNRTY*2);
        var recurso = datos[467].recurso_natural;
        text(recurso, CNRX-40,CNRY+120,CNRTX*5,CNRTY*2);
        var recurso = datos[473].recurso_natural;
        text(recurso, CNRX-40,CNRY+137,CNRTX*5,CNRTY*2);
        var recurso = datos[476].recurso_natural;
        text(recurso, CNRX-40,CNRY+154,CNRTX*5,CNRTY*2);
        var recurso = datos[481].recurso_natural;
        text(recurso, CNRX-40,CNRY+171,CNRTX*5,CNRTY*2);
        
      }
     //CAUCA
      if (mouseX > CX && mouseX < CX + CTX &&
      mouseY > CY && mouseY < CY + CTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(250,80,0);
        stroke(255);
        rect(CX-60,CY,(CTX*5)+20,CTY*38);
        fill(255);
        noStroke();
var recurso = datos[494].recurso_natural;
        text(recurso, CX-40,CY+17,CTX*5,CTY*2);
        var recurso = datos[495].recurso_natural;
        text(recurso, CX-40,CY+34,CTX*5,CTY*2);
       var recurso = datos[499].recurso_natural;
        text(recurso, CX-40,CY+52,CTX*5,CTY*2);
        var recurso = datos[500].recurso_natural;
        text(recurso, CX-40,CY+69,CTX*5,CTY*2);
        var recurso = datos[504].recurso_natural;
        text(recurso, CX-40,CY+86,CTX*5,CTY*2);
        var recurso = datos[505].recurso_natural;
        text(recurso, CX-40,CY+103,CTX*5,CTY*2);
        var recurso = datos[506].recurso_natural;
        text(recurso, CX-40,CY+120,CTX*5,CTY*2);
        var recurso = datos[508].recurso_natural;
        text(recurso, CX-40,CY+137,CTX*5,CTY*2);
        var recurso = datos[513].recurso_natural;
        text(recurso, CX-40,CY+154,CTX*5,CTY*2);
        var recurso = datos[514].recurso_natural;
        text(recurso, CX-40,CY+171,CTX*5,CTY*2);
        var recurso = datos[518].recurso_natural;
        text(recurso, CX-40,CY+188,CTX*5,CTY*2);
        var recurso = datos[522].recurso_natural;
        text(recurso, CX-40,CY+205,CTX*5,CTY*2);
        var recurso = datos[524].recurso_natural;
        text(recurso, CX-40,CY+222,CTX*5,CTY*2);
        var recurso = datos[529].recurso_natural;
        text(recurso, CX-40,CY+239,CTX*5,CTY*2);
        var recurso = datos[532].recurso_natural;
        text(recurso, CX-40,CY+256,CTX*5,CTY*2);
        var recurso = datos[538].recurso_natural;
        text(recurso, CX-40,CY+273,CTX*5,CTY*2);
        var recurso = datos[541].recurso_natural;
        text(recurso, CX-40,CY+290,CTX*5,CTY*2);
        var recurso = datos[543].recurso_natural;
        text(recurso, CX-40,CY+307,CTX*5,CTY*2);
        var recurso = datos[551].recurso_natural;
        text(recurso, CX-40,CY+324,CTX*5,CTY*2);
        var recurso = datos[553].recurso_natural;
        text(recurso, CX-40,CY+341,CTX*5,CTY*2);
        var recurso = datos[562].recurso_natural;
        text(recurso, CX-40,CY+358,CTX*5,CTY*2);
        var recurso = datos[574].recurso_natural;
        text(recurso, CX-40,CY+375,CTX*5,CTY*2);
        var recurso = datos[578].recurso_natural;
        text(recurso, CX-40,CY+392,CTX*5,CTY*2);
        var recurso = datos[585].recurso_natural;
        text(recurso, CX-40,CY+409,CTX*5,CTY*2);
      }

         //CESAR
      if (mouseX > CSRX && mouseX < CSRX + CSRTX &&
      mouseY > CSRY && mouseY < CSRY + CSRTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,100,200);
        stroke(250);
        rect(CSRX-60,CSRY,(CSRTX*5)+20,CSRTY*26);
        fill(250);
        noStroke();
var recurso = datos[593].recurso_natural;
        text(recurso, CSRX-40,CSRY+17,CSRTX*5,CSRTY*2);
        var recurso = datos[595].recurso_natural;
        text(recurso, CSRX-40,CSRY+34,CSRTX*5,CSRTY*2);
       var recurso = datos[597].recurso_natural;
        text(recurso, CSRX-40,CSRY+52,CSRTX*5,CSRTY*2);
        var recurso = datos[602].recurso_natural;
        text(recurso, CSRX-40,CSRY+69,CSRTX*5,CSRTY*2);
        var recurso = datos[603].recurso_natural;
        text(recurso, CSRX-40,CSRY+86,CSRTX*5,CSRTY*2);
        var recurso = datos[604].recurso_natural;
        text(recurso, CSRX-40,CSRY+103,CSRTX*5,CSRTY*2);
        var recurso = datos[605].recurso_natural;
        text(recurso, CSRX-40,CSRY+120,CSRTX*5,CSRTY*2);
        var recurso = datos[606].recurso_natural;
        text(recurso, CSRX-40,CSRY+137,CSRTX*5,CSRTY*2);
        var recurso = datos[607].recurso_natural;
        text(recurso, CSRX-40,CSRY+154,CSRTX*5,CSRTY*2);
        var recurso = datos[610].recurso_natural;
        text(recurso, CSRX-40,CSRY+171,CSRTX*5,CSRTY*2);
        var recurso = datos[617].recurso_natural;
        text(recurso, CSRX-40,CSRY+188,CSRTX*5,CSRTY*2);
        var recurso = datos[618].recurso_natural;
        text(recurso, CSRX-40,CSRY+205,CSRTX*5,CSRTY*2);
        var recurso = datos[619].recurso_natural;
        text(recurso, CSRX-40,CSRY+222,CSRTX*5,CSRTY*2);
        var recurso = datos[622].recurso_natural;
        text(recurso, CSRX-40,CSRY+239,CSRTX*5,CSRTY*2);
        var recurso = datos[634].recurso_natural;
        text(recurso, CSRX-40,CSRY+256,CSRTX*5,CSRTY*2);
        var recurso = datos[635].recurso_natural;
        text(recurso, CSRX-40,CSRY+273,CSRTX*5,CSRTY*2);
        var recurso = datos[639].recurso_natural;
        text(recurso, CSRX-40,CSRY+290,CSRTX*5,CSRTY*2);
        var recurso = datos[641].recurso_natural;
        text(recurso, CSRX-40,CSRY+307,CSRTX*5,CSRTY*2);
      }

         //CHOCO
      if (mouseX > CHX && mouseX < CHX + CHTX &&
      mouseY > CHY && mouseY < CHY + CHTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(100,200,0);
        stroke(255);
        rect(CHX-60,CHY,(CHTX*5)+20,CHTY*14);
        fill(255);
        noStroke();
        var recurso = datos[659].recurso_natural;
        text(recurso, CHX-40,CHY+34,CHTX*5,CHTY*2);
       var recurso = datos[661].recurso_natural;
        text(recurso, CHX-40,CHY+52,CHTX*5,CHTY*2);
        var recurso = datos[663].recurso_natural;
        text(recurso, CHX-40,CHY+69,CHTX*5,CHTY*2);
        var recurso = datos[666].recurso_natural;
        text(recurso, CHX-40,CHY+86,CHTX*5,CHTY*2);
        var recurso = datos[668].recurso_natural;
        text(recurso, CHX-40,CHY+103,CHTX*5,CHTY*2);
        var recurso = datos[670].recurso_natural;
        text(recurso, CHX-40,CHY+120,CHTX*5,CHTY*2);
        var recurso = datos[673].recurso_natural;
        text(recurso, CHX-40,CHY+137,CHTX*5,CHTY*2);
        var recurso = datos[679].recurso_natural;
        text(recurso, CHX-40,CHY+154,CHTX*5,CHTY*2);
        var recurso = datos[685].recurso_natural;
        text(recurso, CHX-40,CHY+171,CHTX*5,CHTY*2);
      }
         //CORDOBA
      if (mouseX > CBX && mouseX < CBX + CBTX &&
      mouseY > CBY && mouseY < CBY + CBTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,100,200);
        stroke(255);
        rect(CBX-60,CBY,(CBTX*5)+20,CBTY*27);
        fill(255);
        noStroke();
var recurso = datos[691].recurso_natural;
        text(recurso, CBX-40,CBY+17,CBTX*5,CBTY*2);
        var recurso = datos[693].recurso_natural;
        text(recurso, CBX-40,CBY+34,CBTX*5,CBTY*2);
       var recurso = datos[699].recurso_natural;
        text(recurso, CBX-40,CBY+52,CBTX*5,CBTY*2);
        var recurso = datos[701].recurso_natural;
        text(recurso, CBX-40,CBY+69,CBTX*5,CBTY*2);
        var recurso = datos[703].recurso_natural;
        text(recurso, CBX-40,CBY+86,CBTX*5,CBTY*2);
        var recurso = datos[704].recurso_natural;
        text(recurso, CBX-40,CBY+103,CBTX*5,CBTY*2);
        var recurso = datos[706].recurso_natural;
        text(recurso, CBX-40,CBY+120,CBTX*5,CBTY*2);
        var recurso = datos[709].recurso_natural;
        text(recurso, CBX-40,CBY+137,CBTX*5,CBTY*2);
        var recurso = datos[714].recurso_natural;
        text(recurso, CBX-40,CBY+154,CBTX*5,CBTY*2);
        var recurso = datos[717].recurso_natural;
        text(recurso, CBX-40,CBY+171,CBTX*5,CBTY*2);
        var recurso = datos[718].recurso_natural;
        text(recurso, CBX-40,CBY+188,CBTX*5,CBTY*2);
        var recurso = datos[719].recurso_natural;
        text(recurso, CBX-40,CBY+205,CBTX*5,CBTY*2);
        var recurso = datos[722].recurso_natural;
        text(recurso, CBX-40,CBY+222,CBTX*5,CBTY*2);
        var recurso = datos[732].recurso_natural;
        text(recurso, CBX-40,CBY+239,CBTX*5,CBTY*2);
        var recurso = datos[734].recurso_natural;
        text(recurso, CBX-40,CBY+256,CBTX*5,CBTY*2);
        var recurso = datos[741].recurso_natural;
        text(recurso, CBX-40,CBY+273,CBTX*5,CBTY*2);
        var recurso = datos[747].recurso_natural;
        text(recurso, CBX-40,CBY+290,CBTX*5,CBTY*2);
        var recurso = datos[752].recurso_natural;
        text(recurso, CBX-40,CBY+307,CBTX*5,CBTY*2);
        var recurso = datos[757].recurso_natural;
        text(recurso, CBX-40,CBY+324,CBTX*5,CBTY*2);
      }
      
         //CUNDINAMARCA
      if (mouseX > CMX && mouseX < CMX + CMTX &&
      mouseY > CMY && mouseY < CMY + CMTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,255,0);
        stroke(255);
        rect(CMX,CMY,CMTX*4,CMTY*31);
        fill(255);
        noStroke();
        var recurso = datos[766].recurso_natural;
        text(recurso, CMX-40,CMY+17,CMTX*5,CMTY*2);
        var recurso = datos[767].recurso_natural;
        text(recurso, CMX-40,CMY+34,CMTX*5,CMTY*2);
       var recurso = datos[768].recurso_natural;
        text(recurso, CMX-40,CMY+52,CMTX*5,CMTY*2);
        var recurso = datos[769].recurso_natural;
        text(recurso, CMX-40,CMY+69,CMTX*5,CMTY*2);
        var recurso = datos[774].recurso_natural;
        text(recurso, CMX-40,CMY+86,CMTX*5,CMTY*2);
        var recurso = datos[775].recurso_natural;
        text(recurso, CMX-40,CMY+103,CMTX*5,CMTY*2);
        var recurso = datos[776].recurso_natural;
        text(recurso, CMX-40,CMY+120,CMTX*5,CMTY*2);
        var recurso = datos[777].recurso_natural;
        text(recurso, CMX-40,CMY+137,CMTX*5,CMTY*2);
        var recurso = datos[778].recurso_natural;
        text(recurso, CMX-40,CMY+154,CMTX*5,CMTY*2);
        var recurso = datos[779].recurso_natural;
        text(recurso, CMX-40,CMY+171,CMTX*5,CMTY*2);
        var recurso = datos[780].recurso_natural;
        text(recurso, CMX-40,CMY+188,CMTX*5,CMTY*2);
        var recurso = datos[782].recurso_natural;
        text(recurso, CMX-40,CMY+205,CMTX*5,CMTY*2);
        var recurso = datos[784].recurso_natural;
        text(recurso, CMX-40,CMY+222,CMTX*5,CMTY*2);
        var recurso = datos[786].recurso_natural;
        text(recurso, CMX-40,CMY+239,CMTX*5,CMTY*2);
        var recurso = datos[789].recurso_natural;
        text(recurso, CMX-40,CMY+256,CMTX*5,CMTY*2);
        var recurso = datos[802].recurso_natural;
        text(recurso, CMX-40,CMY+273,CMTX*5,CMTY*2);
        var recurso = datos[807].recurso_natural;
        text(recurso, CMX-40,CMY+290,CMTX*5,CMTY*2);
        var recurso = datos[813].recurso_natural;
        text(recurso, CMX-40,CMY+307,CMTX*5,CMTY*2);
        var recurso = datos[819].recurso_natural;
        text(recurso, CMX-40,CMY+324,CMTX*5,CMTY*2);
         var recurso = datos[837].recurso_natural;
        text(recurso, CMX-40,CMY+342,CMTX*5,CMTY*2);
         var recurso = datos[850].recurso_natural;
        text(recurso, CMX-40,CMY+359,CMTX*5,CMTY*2);
         var recurso = datos[856].recurso_natural;
        text(recurso, CMX-40,CMY+376,CMTX*5,CMTY*2);
      }
     //GUANIA
      if (mouseX > GNX && mouseX < GNX + GNTX &&
      mouseY > GNY && mouseY < GNY + GNTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(200,100,0);
        stroke(255);
        rect(GNX-60,GNY,(GNTX*3)+20,GNTY*16);
        fill(255);
        noStroke();
var recurso = datos[866].recurso_natural;
        text(recurso, GNX-100,GNY+17,GNTX*5,GNTY*2);
        var recurso = datos[868].recurso_natural;
        text(recurso, GNX-100,GNY+34,GNTX*5,GNTY*2);
        var recurso = datos[869].recurso_natural;
        text(recurso, GNX-100,GNY+52,GNTX*5,GNTY*2);
        var recurso = datos[871].recurso_natural;
        text(recurso, GNX-100,GNY+69,GNTX*5,GNTY*2);
        var recurso = datos[873].recurso_natural;
        text(recurso, GNX-100,GNY+86,GNTX*5,GNTY*2);
        var recurso = datos[874].recurso_natural;
        text(recurso, GNX-100,GNY+103,GNTX*5,GNTY*2);
        var recurso = datos[876].recurso_natural;
        text(recurso, GNX-100,GNY+120,GNTX*5,GNTY*2);
        var recurso = datos[881].recurso_natural;
        text(recurso, GNX-100,GNY+137,GNTX*5,GNTY*2);
        var recurso = datos[885].recurso_natural;
        text(recurso, GNX-100,GNY+154,GNTX*5,GNTY*2);
        var recurso = datos[889].recurso_natural;
        text(recurso, GNX-100,GNY+171,GNTX*5,GNTY*2);
      }

    

//GUAVIARE
      if (mouseX > GVX && mouseX < GVX + GVTX &&
      mouseY > GVY && mouseY < GVY + GVTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,50,200);
        stroke(255);
        rect(GVX-10,GVY,GVTX*4,GVTY*13);
        fill(255);
        noStroke();
        var recurso = datos[890].recurso_natural;
        text(recurso, GVX-40,GVY+17,GVTX*5,GVTY*2);
        var recurso = datos[892].recurso_natural;
        text(recurso, GVX-40,GVY+34,GVTX*5,GVTY*2);
       var recurso = datos[893].recurso_natural;
        text(recurso, GVX-40,GVY+52,GVTX*5,GVTY*2);
        var recurso = datos[897].recurso_natural;
        text(recurso, GVX-40,GVY+69,GVTX*5,GVTY*2);
        var recurso = datos[899].recurso_natural;
        text(recurso, GVX-40,GVY+86,GVTX*5,GVTY*2);
        var recurso = datos[901].recurso_natural;
        text(recurso, GVX-40,GVY+103,GVTX*5,GVTY*2);
        var recurso = datos[902].recurso_natural;
        text(recurso, GVX-40,GVY+120,GVTX*5,GVTY*2);
      }
      
         //HUILA
      if (mouseX > HX && mouseX < HX + HTX &&
      mouseY > HY && mouseY < HY + HTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE HAGA CLIC
        fill(0,0,250);
        stroke(255);
        rect(HX-60,HY-40,(HTX*5)+20,HTY*32);
        fill(255);
        noStroke();
        var recurso = datos[904].recurso_natural;
        text(recurso, HX-40,HY+17,HTX*5,HTY*2);
        var recurso = datos[905].recurso_natural;
        text(recurso, HX-40,HY+34,HTX*5,HTY*2);
       var recurso = datos[907].recurso_natural;
        text(recurso, HX-40,HY+52,HTX*5,HTY*2);
        var recurso = datos[911].recurso_natural;
        text(recurso, HX-40,HY+69,HTX*5,HTY*2);
        var recurso = datos[913].recurso_natural;
        text(recurso, HX-40,HY+86,HTX*5,HTY*2);
        var recurso = datos[917].recurso_natural;
        text(recurso, HX-40,HY+103,HTX*5,HTY*2);
        var recurso = datos[922].recurso_natural;
        text(recurso, HX-40,HY+120,HTX*5,HTY*2);
        var recurso = datos[925].recurso_natural;
        text(recurso, HX-40,HY+137,HTX*5,HTY*2);
        var recurso = datos[926].recurso_natural;
        text(recurso, HX-40,HY+154,HTX*5,HTY*2);
        var recurso = datos[927].recurso_natural;
        text(recurso, HX-40,HY+171,HTX*5,HTY*2);
        var recurso = datos[928].recurso_natural;
        text(recurso, HX-40,HY+188,HTX*5,HTY*2);
        var recurso = datos[929].recurso_natural;
        text(recurso, HX-40,HY+205,HTX*5,HTY*2);
        var recurso = datos[930].recurso_natural;
        text(recurso, HX-40,HY+222,HTX*5,HTY*2);
        var recurso = datos[933].recurso_natural;
        text(recurso, HX-40,HY+239,HTX*5,HTY*2);
        var recurso = datos[939].recurso_natural;
        text(recurso, HX-40,HY+256,HTX*5,HTY*2);
        var recurso = datos[941].recurso_natural;
        text(recurso, HX-40,HY+273,HTX*5,HTY*2);
        var recurso = datos[954].recurso_natural;
        text(recurso, HX-40,HY+290,HTX*5,HTY*2);
        var recurso = datos[955].recurso_natural;
        text(recurso, HX-40,HY+307,HTX*5,HTY*2);
        var recurso = datos[961].recurso_natural;
        text(recurso, HX-40,HY+324,HTX*5,HTY*2);
        var recurso = datos[969].recurso_natural;
        text(recurso, HX-40,HY-17,HTX*5,HTY*2);
        var recurso = datos[975].recurso_natural;
        text(recurso, HX-40,HY,HTX*5,HTY*2);

      }
   //GUAJIRA
      if (mouseX > GX && mouseX < GX + GTX &&
      mouseY > GY && mouseY < GY + GTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE GAGA CLIC
        fill(200,100,0);
        stroke(255);
        rect(GX,GY,GTX*4,GTY*22);
        fill(255);
        noStroke();
var recurso = datos1[1].recurso_natural;
        text(recurso, GX-40,GY+17,GTX*5,GTY*2);
        var recurso = datos1[3].recurso_natural;
        text(recurso, GX-40,GY+34,GTX*5,GTY*2);
       var recurso = datos1[5].recurso_natural;
        text(recurso, GX-40,GY+52,GTX*5,GTY*2);
        var recurso = datos1[4].recurso_natural;
        text(recurso, GX-40,GY+69,GTX*5,GTY*2);
        var recurso = datos1[7].recurso_natural;
        text(recurso, GX-40,GY+86,GTX*5,GTY*2);
        var recurso = datos1[10].recurso_natural;
        text(recurso, GX-40,GY+103,GTX*5,GTY*2);
        var recurso = datos1[11].recurso_natural;
        text(recurso, GX-40,GY+120,GTX*5,GTY*2);
        var recurso = datos1[13].recurso_natural;
        text(recurso, GX-40,GY+137,GTX*5,GTY*2);
        var recurso = datos1[14].recurso_natural;
        text(recurso, GX-40,GY+154,GTX*5,GTY*2);
        var recurso = datos1[16].recurso_natural;
        text(recurso, GX-40,GY+171,GTX*5,GTY*2);
        var recurso = datos1[18].recurso_natural;
        text(recurso, GX-40,GY+188,GTX*5,GTY*2);
        var recurso = datos1[36].recurso_natural;
        text(recurso, GX-40,GY+205,GTX*5,GTY*2);
        var recurso = datos1[41].recurso_natural;
        text(recurso, GX-40,GY+222,GTX*5,GTY*2);
      }
//MAGDALENA
      if (mouseX > MGX && mouseX < MGX + MGTX &&
      mouseY > MGY && mouseY < MGY + MGTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE MGAMGA CLIC
        fill(0,100,200);
        stroke(255);
        rect(MGX-20,MGY,(MGTX*4)+20,MGTY*26);
        fill(255);
        noStroke();
var recurso = datos1[41].recurso_natural;
        text(recurso, MGX-40,MGY+17,MGTX*5,MGTY*2);
        var recurso = datos1[43].recurso_natural;
        text(recurso, MGX-40,MGY+34,MGTX*5,MGTY*2);
       var recurso = datos1[45].recurso_natural;
        text(recurso, MGX-40,MGY+52,MGTX*5,MGTY*2);
        var recurso = datos1[46].recurso_natural;
        text(recurso, MGX-40,MGY+69,MGTX*5,MGTY*2);
        var recurso = datos1[49].recurso_natural;
        text(recurso, MGX-40,MGY+86,MGTX*5,MGTY*2);
        var recurso = datos1[50].recurso_natural;
        text(recurso, MGX-40,MGY+103,MGTX*5,MGTY*2);
        var recurso = datos1[51].recurso_natural;
        text(recurso, MGX-40,MGY+120,MGTX*5,MGTY*2);
        var recurso = datos1[53].recurso_natural;
        text(recurso, MGX-40,MGY+137,MGTX*5,MGTY*2);
        var recurso = datos1[55].recurso_natural;
        text(recurso, MGX-40,MGY+154,MGTX*5,MGTY*2);
        var recurso = datos1[56].recurso_natural;
        text(recurso, MGX-40,MGY+171,MGTX*5,MGTY*2);
        var recurso = datos1[57].recurso_natural;
        text(recurso, MGX-40,MGY+188,MGTX*5,MGTY*2);
        var recurso = datos1[63].recurso_natural;
        text(recurso, MGX-40,MGY+205,MGTX*5,MGTY*2);
        var recurso = datos1[66].recurso_natural;
        text(recurso, MGX-40,MGY+222,MGTX*5,MGTY*2);
        var recurso = datos1[67].recurso_natural;
        text(recurso, MGX-40,MGY+239,MGTX*5,MGTY*2);
        var recurso = datos1[72].recurso_natural;
        text(recurso, MGX-40,MGY+256,MGTX*5,MGTY*2);
        var recurso = datos1[73].recurso_natural;
        text(recurso, MGX-40,MGY+273,MGTX*5,MGTY*2);
        var recurso = datos1[75].recurso_natural;
        text(recurso, MGX-40,MGY+290,MGTX*5,MGTY*2);
        var recurso = datos1[76].recurso_natural;
        text(recurso, MGX-40,MGY+307,MGTX*5,MGTY*2);
      }


         //META
      if (mouseX > MX && mouseX < MX + MTX &&
      mouseY > MY && mouseY < MY + MTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE MAMA CLIC
        fill(150,100,0);
        stroke(255);
        rect(MX-60,MY,(MTX*5)+20,MTY*20);
        fill(255);
        noStroke();
var recurso = datos1[92].recurso_natural;
        text(recurso, MX-40,MY+17,MTX*5,MTY*2);
        var recurso = datos1[97].recurso_natural;
        text(recurso, MX-40,MY+34,MTX*5,MTY*2);
       var recurso = datos1[99].recurso_natural;
        text(recurso, MX-40,MY+52,MTX*5,MTY*2);
        var recurso = datos1[101].recurso_natural;
        text(recurso, MX-40,MY+69,MTX*5,MTY*2);
        var recurso = datos1[104].recurso_natural;
        text(recurso, MX-40,MY+86,MTX*5,MTY*2);
        var recurso = datos1[106].recurso_natural;
        text(recurso, MX-40,MY+103,MTX*5,MTY*2);
        var recurso = datos1[108].recurso_natural;
        text(recurso, MX-40,MY+120,MTX*5,MTY*2);
        var recurso = datos1[113].recurso_natural;
        text(recurso, MX-40,MY+137,MTX*5,MTY*2);
        var recurso = datos1[119].recurso_natural;
        text(recurso, MX-40,MY+154,MTX*5,MTY*2);
        var recurso = datos1[121].recurso_natural;
        text(recurso, MX-40,MY+171,MTX*5,MTY*2);
        var recurso = datos1[123].recurso_natural;
        text(recurso, MX-40,MY+188,MTX*5,MTY*2);
        var recurso = datos1[125].recurso_natural;
        text(recurso, MX-40,MY+205,MTX*5,MTY*2);
        var recurso = datos1[127].recurso_natural;
        text(recurso, MX-40,MY+222,MTX*5,MTY*2);
        var recurso = datos1[130].recurso_natural;
        text(recurso, MX-40,MY+239,MTX*5,MTY*2);
      }
         //NARIÑO
      if (mouseX > ÑX && mouseX < ÑX + ÑTX &&
      mouseY > ÑY && mouseY < ÑY + ÑTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,100,200);
        stroke(255);
        rect(ÑX-60,ÑY,(ÑTX*5)+20,ÑTY*20);
        fill(255);
        noStroke();
var recurso = datos1[158].recurso_natural;
        text(recurso, ÑX-40,ÑY+17,ÑTX*5,ÑTY*2);
        var recurso = datos1[159].recurso_natural;
        text(recurso, ÑX-40,ÑY+34,ÑTX*5,ÑTY*2);
       var recurso = datos1[162].recurso_natural;
        text(recurso, ÑX-40,ÑY+52,ÑTX*5,ÑTY*2);
        var recurso = datos1[164].recurso_natural;
        text(recurso, ÑX-40,ÑY+69,ÑTX*5,ÑTY*2);
        var recurso = datos1[165].recurso_natural;
        text(recurso, ÑX-40,ÑY+86,ÑTX*5,ÑTY*2);
        var recurso = datos1[166].recurso_natural;
        text(recurso, ÑX-40,ÑY+103,ÑTX*5,ÑTY*2);
        var recurso = datos1[167].recurso_natural;
        text(recurso, ÑX-40,ÑY+120,ÑTX*5,ÑTY*2);
        var recurso = datos1[168].recurso_natural;
        text(recurso, ÑX-40,ÑY+137,ÑTX*5,ÑTY*2);
        var recurso = datos1[208].recurso_natural;
        text(recurso, ÑX-40,ÑY+154,ÑTX*5,ÑTY*2);
        var recurso = datos1[193].recurso_natural;
        text(recurso, ÑX-40,ÑY+171,ÑTX*5,ÑTY*2);
        var recurso = datos1[188].recurso_natural;
        text(recurso, ÑX-40,ÑY+188,ÑTX*5,ÑTY*2);
        var recurso = datos1[173].recurso_natural;
        text(recurso, ÑX-40,ÑY+205,ÑTX*5,ÑTY*2);
        var recurso = datos1[179].recurso_natural;
        text(recurso, ÑX-40,ÑY+222,ÑTX*5,ÑTY*2);

      }
//Norte de Santander
      if (mouseX > NSX && mouseX < NSX + NSTX &&
      mouseY > NSY && mouseY < NSY + NSTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,100,0);
        stroke(255);
        rect(NSX-60,NSY,(NSTX*5)+20,NSTY*13);
        fill(255);
        noStroke();
var recurso = datos1[215].recurso_natural;
        text(recurso, NSX-40,NSY+17,NSTX*5,NSTY*2);
        var recurso = datos1[216].recurso_natural;
        text(recurso, NSX-40,NSY+34,NSTX*5,NSTY*2);
       var recurso = datos1[218].recurso_natural;
        text(recurso, NSX-40,NSY+52,NSTX*5,NSTY*2);
        var recurso = datos1[219].recurso_natural;
        text(recurso, NSX-40,NSY+69,NSTX*5,NSTY*2);
        var recurso = datos1[221].recurso_natural;
        text(recurso, NSX-40,NSY+86,NSTX*5,NSTY*2);
        var recurso = datos1[225].recurso_natural;
        text(recurso, NSX-40,NSY+103,NSTX*5,NSTY*2);
        var recurso = datos1[226].recurso_natural;
        text(recurso, NSX-40,NSY+120,NSTX*5,NSTY*2);
        var recurso = datos1[229].recurso_natural;
        text(recurso, NSX-40,NSY+137,NSTX*5,NSTY*2);
        var recurso = datos1[234].recurso_natural;
        text(recurso, NSX-40,NSY+154,NSTX*5,NSTY*2);
        var recurso = datos1[235].recurso_natural;
        text(recurso, NSX-40,NSY+171,NSTX*5,NSTY*2);
        var recurso = datos1[236].recurso_natural;
        text(recurso, NSX-40,NSY+188,NSTX*5,NSTY*2);
        var recurso = datos1[240].recurso_natural;
        text(recurso, NSX-40,NSY+205,NSTX*5,NSTY*2);
        var recurso = datos1[242].recurso_natural;
        text(recurso, NSX-40,NSY+222,NSTX*5,NSTY*2);
        var recurso = datos1[254].recurso_natural;
        text(recurso, NSX-40,NSY+239,NSTX*5,NSTY*2);
        var recurso = datos1[256].recurso_natural;
        text(recurso, NSX-40,NSY+256,NSTX*5,NSTY*2);
        var recurso = datos1[262].recurso_natural;
        text(recurso, NSX-40,NSY+273,NSTX*5,NSTY*2);
        var recurso = datos1[278].recurso_natural;
        text(recurso, NSX-40,NSY+290,NSTX*5,NSTY*2);
        var recurso = datos1[285].recurso_natural;
        text(recurso, NSX-40,NSY+307,NSTX*5,NSTY*2);
      }
 //PUTUMAYO
      if (mouseX > PYX && mouseX < PYX + PYTX &&
      mouseY > PYY && mouseY < PYY + PYTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,150,0);
        stroke(255);
        rect(PYX-60,PYY-20,(PYTX*5)+20,PYTY*19);
        fill(255);
        noStroke();
var recurso = datos1[289].recurso_natural;
        text(recurso, PYX-40,PYY+17,PYTX*5,PYTY*2);
        var recurso = datos1[290].recurso_natural;
        text(recurso, PYX-40,PYY+34,PYTX*5,PYTY*2);
       var recurso = datos1[292].recurso_natural;
        text(recurso, PYX-40,PYY+52,PYTX*5,PYTY*2);
        var recurso = datos1[295].recurso_natural;
        text(recurso, PYX-40,PYY+69,PYTX*5,PYTY*2);
        var recurso = datos1[296].recurso_natural;
        text(recurso, PYX-40,PYY+86,PYTX*5,PYTY*2);
        var recurso = datos1[297].recurso_natural;
        text(recurso, PYX-40,PYY+103,PYTX*5,PYTY*2);
        var recurso = datos1[300].recurso_natural;
        text(recurso, PYX-40,PYY+120,PYTX*5,PYTY*2);
        var recurso = datos1[306].recurso_natural;
        text(recurso, PYX-40,PYY+137,PYTX*5,PYTY*2);
        var recurso = datos1[310].recurso_natural;
        text(recurso, PYX-40,PYY+154,PYTX*5,PYTY*2);
        var recurso = datos1[311].recurso_natural;
        text(recurso, PYX-40,PYY+171,PYTX*5,PYTY*2);
        var recurso = datos1[312].recurso_natural;
        text(recurso, PYX-40,PYY+188,PYTX*5,PYTY*2);
        var recurso = datos1[316].recurso_natural;
        text(recurso, PYX-40,PYY+205,PYTX*5,PYTY*2);
        var recurso = datos1[323].recurso_natural;
        text(recurso, PYX-40,PYY,PYTX*5,PYTY*2);
      }

//QUINDIO
      if (mouseX > QX && mouseX < QX + QTX &&
      mouseY > QY && mouseY < QY + QTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,100,200);
        stroke(255);
        rect(QX-60,QY,(QTX*5)+20,QTY*21);
        fill(255);
        noStroke();
var recurso = datos1[328].recurso_natural;
        text(recurso, QX-40,QY+17,QTX*5,QTY*2);
        var recurso = datos1[329].recurso_natural;
        text(recurso, QX-40,QY+34,QTX*5,QTY*2);
       var recurso = datos1[330].recurso_natural;
        text(recurso, QX-40,QY+52,QTX*5,QTY*2);
        var recurso = datos1[331].recurso_natural;
        text(recurso, QX-40,QY+69,QTX*5,QTY*2);
        var recurso = datos1[333].recurso_natural;
        text(recurso, QX-40,QY+86,QTX*5,QTY*2);
        var recurso = datos1[334].recurso_natural;
        text(recurso, QX-40,QY+103,QTX*5,QTY*2);
        var recurso = datos1[336].recurso_natural;
        text(recurso, QX-40,QY+120,QTX*5,QTY*2);
        var recurso = datos1[337].recurso_natural;
        text(recurso, QX-40,QY+137,QTX*5,QTY*2);
        var recurso = datos1[338].recurso_natural;
        text(recurso, QX-40,QY+154,QTX*5,QTY*2);
        var recurso = datos1[341].recurso_natural;
        text(recurso, QX-40,QY+171,QTX*5,QTY*2);
        var recurso = datos1[372].recurso_natural;
        text(recurso, QX-40,QY+188,QTX*5,QTY*2);
        var recurso = datos1[349].recurso_natural;
        text(recurso, QX-40,QY+205,QTX*5,QTY*2);
        var recurso = datos1[352].recurso_natural;
        text(recurso, QX-40,QY+222,QTX*5,QTY*2);
      }
 //RISARALDA
      if (mouseX > RSX && mouseX < RSX + RSTX &&
      mouseY > RSY && mouseY < RSY + RSTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(250,200,0);
        stroke(255);
        rect(RSX-60,RSY,(RSTX*5)+20,RSTY*20);
        fill(255);
        noStroke();
var recurso = datos1[367].recurso_natural;
        text(recurso, RSX-40,RSY+17,RSTX*5,RSTY*2);
        var recurso = datos1[368].recurso_natural;
        text(recurso, RSX-40,RSY+34,RSTX*5,RSTY*2);
       var recurso = datos1[369].recurso_natural;
        text(recurso, RSX-40,RSY+52,RSTX*5,RSTY*2);
        var recurso = datos1[372].recurso_natural;
        text(recurso, RSX-40,RSY+69,RSTX*5,RSTY*2);
        var recurso = datos1[373].recurso_natural;
        text(recurso, RSX-40,RSY+86,RSTX*5,RSTY*2);
        var recurso = datos1[374].recurso_natural;
        text(recurso, RSX-40,RSY+103,RSTX*5,RSTY*2);
        var recurso = datos1[376].recurso_natural;
        text(recurso, RSX-40,RSY+120,RSTX*5,RSTY*2);
        var recurso = datos1[377].recurso_natural;
        text(recurso, RSX-40,RSY+137,RSTX*5,RSTY*2);
        var recurso = datos1[383].recurso_natural;
        text(recurso, RSX-40,RSY+154,RSTX*5,RSTY*2);
        var recurso = datos1[386].recurso_natural;
        text(recurso, RSX-40,RSY+171,RSTX*5,RSTY*2);
        var recurso = datos1[390].recurso_natural;
        text(recurso, RSX-40,RSY+188,RSTX*5,RSTY*2);
        var recurso = datos1[391].recurso_natural;
        text(recurso, RSX-40,RSY+205,RSTX*5,RSTY*2);
        var recurso = datos1[396].recurso_natural;
        text(recurso, RSX-40,RSY+222,RSTX*5,RSTY*2);
        }
 //SANTANDER
      if (mouseX > STX && mouseX < STX + STTX &&
      mouseY > STY && mouseY < STY + STTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,50,100);
        stroke(255);
        rect(STX-60,STY,(STTX*5)+20,STTY*36);
        fill(255);
        noStroke();
var recurso = datos1[418].recurso_natural;
        text(recurso, STX-40,STY+17,STTX*5,STTY*2);
        var recurso = datos1[419].recurso_natural;
        text(recurso, STX-40,STY+34,STTX*5,STTY*2);
       var recurso = datos1[420].recurso_natural;
        text(recurso, STX-40,STY+52,STTX*5,STTY*2);
        var recurso = datos1[421].recurso_natural;
        text(recurso, STX-40,STY+69,STTX*5,STTY*2);
        var recurso = datos1[422].recurso_natural;
        text(recurso, STX-40,STY+86,STTX*5,STTY*2);
        var recurso = datos1[425].recurso_natural;
        text(recurso, STX-40,STY+103,STTX*5,STTY*2);
        var recurso = datos1[426].recurso_natural;
        text(recurso, STX-40,STY+120,STTX*5,STTY*2);
        var recurso = datos1[427].recurso_natural;
        text(recurso, STX-40,STY+137,STTX*5,STTY*2);
        var recurso = datos1[428].recurso_natural;
        text(recurso, STX-40,STY+154,STTX*5,STTY*2);
        var recurso = datos1[430].recurso_natural;
        text(recurso, STX-40,STY+171,STTX*5,STTY*2);
        var recurso = datos1[431].recurso_natural;
        text(recurso, STX-40,STY+188,STTX*5,STTY*2);
        var recurso = datos1[432].recurso_natural;
        text(recurso, STX-40,STY+205,STTX*5,STTY*2);
        var recurso = datos1[433].recurso_natural;
        text(recurso, STX-40,STY+222,STTX*5,STTY*2);
        var recurso = datos1[434].recurso_natural;
        text(recurso, STX-40,STY+239,STTX*5,STTY*2);
        var recurso = datos1[436].recurso_natural;
        text(recurso, STX-40,STY+256,STTX*5,STTY*2);
        var recurso = datos1[438].recurso_natural;
        text(recurso, STX-40,STY+273,STTX*5,STTY*2);
        var recurso = datos1[439].recurso_natural;
        text(recurso, STX-40,STY+290,STTX*5,STTY*2);
        var recurso = datos1[444].recurso_natural;
        text(recurso, STX-40,STY+307,STTX*5,STTY*2);
        var recurso = datos1[445].recurso_natural;
        text(recurso, STX-40,STY+324,STTX*5,STTY*2);
        var recurso = datos1[446].recurso_natural;
        text(recurso, STX-40,STY+342,STTX*5,STTY*2);
        var recurso = datos1[447].recurso_natural;
        text(recurso, STX-40,STY+359,STTX*5,STTY*2);
        var recurso = datos1[450].recurso_natural;
        text(recurso, STX-40,STY+376,STTX*5,STTY*2);
        var recurso = datos1[451].recurso_natural;
        text(recurso, STX-40,STY+393,STTX*5,STTY*2);
        var recurso = datos1[475].recurso_natural;
        text(recurso, STX-40,STY+410,STTX*5,STTY*2);
        var recurso = datos1[488].recurso_natural;
        text(recurso, STX-40,STY+427,STTX*5,STTY*2);
        var recurso = datos1[500].recurso_natural;
        text(recurso, STX-40,STY+444,STTX*5,STTY*2);
        var recurso = datos1[506].recurso_natural;
        text(recurso, STX-40,STY+462,STTX*5,STTY*2);
        var recurso = datos1[515].recurso_natural;
        text(recurso, STX-40,STY+479,STTX*5,STTY*2);
        var recurso = datos1[526].recurso_natural;
        text(recurso, STX-40,STY+496,STTX*5,STTY*2);
      }



         //SUCRE
      if (mouseX > SCRX && mouseX < SCRX + SCRTX &&
      mouseY > SCRY && mouseY < SCRY + SCRTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,100,250);
        stroke(255);
        rect(SCRX-60,SCRY,(SCRTX*5)+20,SCRTY*19);
        fill(255);
        noStroke();
var recurso = datos1[527].recurso_natural;
        text(recurso, SCRX-40,SCRY+17,SCRTX*5,SCRTY*2);
        var recurso = datos1[528].recurso_natural;
        text(recurso, SCRX-40,SCRY+34,SCRTX*5,SCRTY*2);
       var recurso = datos1[529].recurso_natural;
        text(recurso, SCRX-40,SCRY+52,SCRTX*5,SCRTY*2);
        var recurso = datos1[530].recurso_natural;
        text(recurso, SCRX-40,SCRY+69,SCRTX*5,SCRTY*2);
        var recurso = datos1[531].recurso_natural;
        text(recurso, SCRX-40,SCRY+86,SCRTX*5,SCRTY*2);
        var recurso = datos1[532].recurso_natural;
        text(recurso, SCRX-40,SCRY+103,SCRTX*5,SCRTY*2);
        var recurso = datos1[535].recurso_natural;
        text(recurso, SCRX-40,SCRY+120,SCRTX*5,SCRTY*2);
        var recurso = datos1[536].recurso_natural;
        text(recurso, SCRX-40,SCRY+137,SCRTX*5,SCRTY*2);
        var recurso = datos1[537].recurso_natural;
        text(recurso, SCRX-40,SCRY+154,SCRTX*5,SCRTY*2);
        var recurso = datos1[548].recurso_natural;
        text(recurso, SCRX-40,SCRY+171,SCRTX*5,SCRTY*2);
        var recurso = datos1[549].recurso_natural;
        text(recurso, SCRX-40,SCRY+188,SCRTX*5,SCRTY*2);
        var recurso = datos1[554].recurso_natural;
        text(recurso, SCRX-40,SCRY+205,SCRTX*5,SCRTY*2);
      }

         //TOLIMA
      if (mouseX > TLX && mouseX < TLX + TLTX &&
      mouseY > TLY && mouseY < TLY + TLTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(250,150,0);
        stroke(255);
        rect(TLX-60,TLY,(TLTX*5)+20,TLTY*28);
        fill(255);
        noStroke();
var recurso = datos1[560].recurso_natural;
        text(recurso, TLX-40,TLY+17,TLTX*5,TLTY*2);
        var recurso = datos1[561].recurso_natural;
        text(recurso, TLX-40,TLY+34,TLTX*5,TLTY*2);
       var recurso = datos1[565].recurso_natural;
        text(recurso, TLX-40,TLY+52,TLTX*5,TLTY*2);
        var recurso = datos1[566].recurso_natural;
        text(recurso, TLX-40,TLY+69,TLTX*5,TLTY*2);
        var recurso = datos1[567].recurso_natural;
        text(recurso, TLX-40,TLY+86,TLTX*5,TLTY*2);
        var recurso = datos1[568].recurso_natural;
        text(recurso, TLX-40,TLY+103,TLTX*5,TLTY*2);
        var recurso = datos1[569].recurso_natural;
        text(recurso, TLX-40,TLY+120,TLTX*5,TLTY*2);
        var recurso = datos1[570].recurso_natural;
        text(recurso, TLX-40,TLY+137,TLTX*5,TLTY*2);
        var recurso = datos1[571].recurso_natural;
        text(recurso, TLX-40,TLY+154,TLTX*5,TLTY*2);
        var recurso = datos1[572].recurso_natural;
        text(recurso, TLX-40,TLY+171,TLTX*5,TLTY*2);
        var recurso = datos1[573].recurso_natural;
        text(recurso, TLX-40,TLY+188,TLTX*5,TLTY*2);
        var recurso = datos1[578].recurso_natural;
        text(recurso, TLX-40,TLY+205,TLTX*5,TLTY*2);
        var recurso = datos1[585].recurso_natural;
        text(recurso, TLX-40,TLY+222,TLTX*5,TLTY*2);
        var recurso = datos1[593].recurso_natural;
        text(recurso, TLX-40,TLY+239,TLTX*5,TLTY*2);
        var recurso = datos1[597].recurso_natural;
        text(recurso, TLX-40,TLY+256,TLTX*5,TLTY*2);
        var recurso = datos1[605].recurso_natural;
        text(recurso, TLX-40,TLY+273,TLTX*5,TLTY*2);
        var recurso = datos1[618].recurso_natural;
        text(recurso, TLX-40,TLY+290,TLTX*5,TLTY*2);
        var recurso = datos1[629].recurso_natural;
        text(recurso, TLX-40,TLY+307,TLTX*5,TLTY*2);
        var recurso = datos1[632].recurso_natural;
        text(recurso, TLX-40,TLY+324,TLTX*5,TLTY*2);
      }

         //VALLE DEL CAUCA
      if (mouseX > VCX && mouseX < VCX + VCTX &&
      mouseY > VCY && mouseY < VCY + VCTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(250,150,0);
        stroke(255);
        rect(VCX-60,VCY,(VCTX*5)+20,VCTY*12);
        fill(255);
        noStroke();
var recurso = datos1[646].recurso_natural;
        text(recurso, VCX-40,VCY+17,VCTX*5,VCTY*2);
        var recurso = datos1[647].recurso_natural;
        text(recurso, VCX-40,VCY+34,VCTX*5,VCTY*2);
       var recurso = datos1[648].recurso_natural;
       text(recurso, VCX-40,VCY+52,VCTX*5,VCTY*4);
        var recurso = datos1[654].recurso_natural;
        text(recurso, VCX-40,VCY+86,VCTX*5,VCTY*2);
        var recurso = datos1[656].recurso_natural;
        text(recurso, VCX-40,VCY+103,VCTX*5,VCTY*2);
        var recurso = datos1[657].recurso_natural;
        text(recurso, VCX-40,VCY+120,VCTX*5,VCTY*2);
        var recurso = datos1[658].recurso_natural;
        text(recurso, VCX-40,VCY+137,VCTX*5,VCTY*2);
        var recurso = datos1[660].recurso_natural;
        text(recurso, VCX-40,VCY+154,VCTX*5,VCTY*2);
        var recurso = datos1[661].recurso_natural;
        text(recurso, VCX-40,VCY+171,VCTX*5,VCTY*2);
        var recurso = datos1[662].recurso_natural;
        text(recurso, VCX-40,VCY+188,VCTX*5,VCTY*2);
        var recurso = datos1[664].recurso_natural;
        text(recurso, VCX-40,VCY+205,VCTX*5,VCTY*2);
        var recurso = datos1[666].recurso_natural;
        text(recurso, VCX-40,VCY+222,VCTX*5,VCTY*2);
        var recurso = datos1[671].recurso_natural;
        text(recurso, VCX-40,VCY+239,VCTX*5,VCTY*2);
        var recurso = datos1[672].recurso_natural;
        text(recurso, VCX-40,VCY+256,VCTX*5,VCTY*2);
        var recurso = datos1[674].recurso_natural;
        text(recurso, VCX-40,VCY+273,VCTX*5,VCTY*2);
        var recurso = datos1[681].recurso_natural;
        text(recurso, VCX-40,VCY+290,VCTX*5,VCTY*2);
        var recurso = datos1[684].recurso_natural;
        text(recurso, VCX-40,VCY+307,VCTX*5,VCTY*2);
        var recurso = datos1[685].recurso_natural;
        text(recurso, VCX-40,VCY+324,VCTX*5,VCTY*2);
        var recurso = datos1[689].recurso_natural;
        text(recurso, VCX-40,VCY+342,VCTX*5,VCTY*2);
      }
      //VAUPES
      if (mouseX > VPX && mouseX < VPX + VPTX &&
      mouseY > VPY && mouseY < VPY + VPTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(0,0,255);
        stroke(255);
        rect(VPX-60,VPY,VPTX*3,VPTY*6);
        fill(255);
        noStroke();
var recurso = datos1[728].recurso_natural;
        text(recurso, VPX-120,VPY+17,VPTX*5,VPTY*2);
        var recurso = datos1[729].recurso_natural;
        text(recurso, VPX-120,VPY+34,VPTX*5,VPTY*2);
      
      }
      
      
 //VICHADA
      if (mouseX > VCHX && mouseX < VCHX + VCHTX &&
      mouseY > VCHY && mouseY < VCHY + VCHTY) {
        //ESCRIBO LOS ELEMENTOS QUE QUIERO QUE APAREZCAN CUANDO SE DA CLIC
        fill(250,100,0);
        stroke(255);
        rect(VCHX-60,VCHY,VCHTX*3,VCHTY*14);
        fill(255);
        noStroke();
var recurso = datos1[730].recurso_natural;
        text(recurso, VCHX-120,VCHY+17,VCHTX*5,VCHTY*2);
        var recurso = datos1[732].recurso_natural;
        text(recurso, VCHX-120,VCHY+34,VCHTX*5,VCHTY*2);
       var recurso = datos1[733].recurso_natural;
        text(recurso, VCHX-120,VCHY+52,VCHTX*5,VCHTY*2);
        var recurso = datos1[734].recurso_natural;
        text(recurso, VCHX-120,VCHY+69,VCHTX*5,VCHTY*2);
        var recurso = datos1[736].recurso_natural;
        text(recurso, VCHX-120,VCHY+86,VCHTX*5,VCHTY*2);
        var recurso = datos1[738].recurso_natural;
        text(recurso, VCHX-120,VCHY+103,VCHTX*5,VCHTY*2);
        var recurso = datos1[739].recurso_natural;
        text(recurso, VCHX-120,VCHY+120,VCHTX*5,VCHTY*2);
        var recurso = datos1[741].recurso_natural;
        text(recurso, VCHX-120,VCHY+137,VCHTX*5,VCHTY*2);
      }

  }
}