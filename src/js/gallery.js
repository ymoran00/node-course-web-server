var images = ['main00.jpg', 'main01.jpg', 'main02.jpg', 'main03.jpg', 'main04.jpg',
              'main05.jpg', 'main06.jpg', 'main07.jpg', 'main08.jpg', 'main09.jpg', 'main10.jpg',
              'main11.jpg', 'main12.jpg', 'main13.jpg', 'main14.jpg', 'main15.jpg',
              'main16.jpg', 'main17.jpg', 'main18.jpg', 'main19.jpg', 'main20.jpg', 'main21.jpg'
            ];
var NUM_OF_IMAGES = images.length;
var currentImage = Math.floor(Math.random() * NUM_OF_IMAGES);
var nextImage;

var getImageName = function(id) {
  return 'images/large/' + images[id];
}


updateImage = function() {
  // update the image
  var imageHeader = document.getElementById('image-header');
  imageHeader.style.backgroundImage = 'url(' + getImageName(currentImage) + ')';
  // Preloads next image
  currentImage = (currentImage + 1) % NUM_OF_IMAGES;
  var image = new Image();
   console.log('Setting image ' + getImageName(currentImage) + ' to load')
  //  image.onload = imageReady;
   image.src = getImageName(currentImage);
  // Timeout for switch
  setTimeout(updateImage, 5 * 1000);
}
updateImage();
