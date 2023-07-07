function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(480, 640);
  video.hide();
}

function draw() {
  image(video, 0, 0, 640, 480);
}
