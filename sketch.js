var value= true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  img = loadImage('splash.jpg'); // Load the image
  rec = loadImage('splash_rec.png'); // Load the image

}

function draw() {
 
  background(220);
  if (value)
  {
  image(img,0,0,480,320);
  }
  else
  { 
    image(capture, 0, 0, 480, 320);
    image(rec,0,0,480,320);
  }
    
  
  
}

function keyTyped() {
if (key === 'a') {
    value = true;
   console.log("Converse Splash");
  
  } else if (key === 'b') {
    value = false;
     console.log("Webcam");
    capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  }
}