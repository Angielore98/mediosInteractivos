

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  var m=minute()
var d= day()
var M= month()
var Y= year()
var s= second()
fill(0,0,255)
rect(0,0,windowWidth,200 )
  fill(0)
text(year(),windowWidth/2,100)
fill(month(),200,205)
rect(0,200,windowWidth,200 )
  fill(0)
text(month(),windowWidth/2,300)
fill(day(),month(),105)
rect(0,400,windowWidth,200 )
  fill(0)
text(day(),windowWidth/2,500)
fill(day(),minute(),105)
rect(0,600,windowWidth,200 )
  fill(0)
text(minute(),minute(),700)

rect(second(),800,100,100)
fill(255)
  text(second(), second()+40, 850);
}
