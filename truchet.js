let dX = 1500;     // Canvas Size
let dY = 1100;     //
let t = 10;       //tile size 
let Hlim = dX/t;  // Number of Horizontal tiles
let Vlim = dY/t;  // Number of Veritcal tiles
let bb = 0;       // Initiate coin tosser

function setup() {
  createCanvas(dX+40,dY+40, SVG);
  background(255);
  stroke(0);
  strokeWeight(1);
  noFill();
  angleMode(DEGREES);
   
}

function truchet() {
  for(let i = 0; i < Hlim; i++){
    bb = floor(random(1,3));
    if(bb==1){
      arc(0, 0, t, t, 0, 90 );
      arc(t, t, t, t, 180, 270 );
    } else{
      arc(t, 0, t, t, 90, 180 );
      arc(0, t, t, t, 270, 0 );
    }  
    translate(t,0);
  }
  translate(-dX,0);
}

function draw(){
  translate(20,20);
  for(let y = 0; y < Vlim; y++){
    truchet();
    translate(0,t);
  }
  noLoop();
  }

function mouseClicked(){
  let f = ceil(random(1, 100000));
  save('truchet-'+f+'.svg');
}