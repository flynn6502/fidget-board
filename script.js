function powerLight() {
  var image = document.getElementById("lb-img").src
  
  if (image) {
    document.getElementById("lb-img").src = "/images/fidget-lb-off.jpg";
 } else if (!image) {
    document.getElementById("lb-img").src = "/images/fidget-lb-on.jpg";
 }
}

element = document.querySelector('button');
element.addEventListener('click', powerLight)

