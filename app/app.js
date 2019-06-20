import img from '../images/b.png';
console.log('img ==> ', img);

window.onload = function () {

  var image = new Image();

  if (/^data:image\/.+;base64/.test(img)) {
    image.src = img;
  } else {
    image.src = "./public/" + img;
  }

  document.body.appendChild(image);

}