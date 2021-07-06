let t = 10;                     // Tile size
let [dX, dY] = [300,600];       // Canvas Size (Width x Height in pixels)
let b = 40;                     // Border size
let [Hlim,Vlim] = [dX/t,dY/t];  // Tile limiter

function setup() {
  createCanvas(dX+b,dY+b);
  background(255);
  stroke(0);
  strokeWeight(1);
  noFill();
  angleMode(DEGREES);   
}

function truchet() {
  for(let i = 0; i < Hlim; i++){
    let bb = floor(random(2));
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
