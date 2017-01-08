var images = ['main01.jpg', 'main02.jpg', 'main03.jpg', 'main04.jpg', 'main05.jpg', 'main06.jpg',
              'main07.jpg', 'main08.jpg', 'main09.jpg', 'main10.jpg', 'main00.jpg'
            ];
var NUM_OF_IMAGES = images.length;
currentImage = 0;

var getImageName = function(id) {
  return 'images/' + images[id];
}

var galleryPreload = function() {
  var image, i;
  for (i=1; i<NUM_OF_IMAGES; i++) {
    image = new Image();
    console.log('Setting image ' + getImageName(i) + ' to load')
    image.onload = imageReady;
    image.src = getImageName(i);
  }
}

var imageReady = function(e) {
  console.log('loaded: ' + e.currentTarget.src);
}


var backgroundSwitcher = function () {
  setInterval(function() {
    currentImage = (currentImage + 1) % NUM_OF_IMAGES;
    // $('#image-header').fadeTo('slow', 0.3, function(){
    //   $(this).css('background-image', 'url(' + getImageName(currentImage) + ')');
    // }).fadeTo('slow', 1);

    var imageHeader = document.getElementById('image-header');
    imageHeader.style.backgroundImage = 'url(' + getImageName(currentImage) + ')';

  }, 3 * 1000);
}

galleryPreload();
backgroundSwitcher();
