var images = ['main01.jpg', 'main02.jpg', 'main03.jpg', 'main04.jpg', 'main05.jpg', 'main06.jpg',
              'main07.jpg', 'main08.jpg', 'main09.jpg', 'main10.jpg', 'main00.jpg', 'main16.jpg',
              'main11.jpg', 'main12.jpg', 'main13.jpg', 'main14.jpg', 'main15.jpg'
            ];
var NUM_OF_IMAGES = images.length;
var currentImage = 0;

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
    var newId = currentImage;
    while (newId == currentImage) {
      var newId = Math.floor(Math.random() * NUM_OF_IMAGES);
    }
    currentImage = newId;
    // $('#image-header').fadeTo('slow', 0.3, function(){
    //   $(this).css('background-image', 'url(' + getImageName(currentImage) + ')');
    // }).fadeTo('slow', 1);

    var imageHeader = document.getElementById('image-header');
    imageHeader.style.backgroundImage = 'url(' + getImageName(currentImage) + ')';

  }, 5 * 1000);
}

//window.onload(galleryPreload);
backgroundSwitcher();
