var urlTemplate = 'https://www.youtube-nocookie.com/embed/{0}?rel=0&amp;showinfo=0;autoplay=1';
var videos = [
  { text: 'מול',
    key: 'QntSsqNtKcU'},
  { text: 'יואב, נועה, רותם, עומר ונטע ',
    key: 'PdiSJb3bB9Y'},
  { text: 'יפעת, רוני, גל, אור ותום',
    key: 'A_2nyssfZE8'},
  { text: 'חן, ולדי ובר',
    key: 'qIa3qOtF_fQ'},
  { text: 'נחמה',
    key: '-U8_4xVk0DA'},
  { text: 'צח, ליעד, אלמה ומאיה ',
    key: '94I1GEn1060'},
  { text: 'טל, יובל ועופרי',
    key: 'klurTuUIEHA'},
  { text: 'האפי בבה (נטע)',
    key: 'b_N3rqUs8iQ'},
  { text: 'צביקה',
    key: 'sArkdGzbd3g'},
  { text: 'ראול וסוזי',
    key: 'WyDdWPuqnwY'},
  { text: 'גידי ונעמה',
    key: 'c3HfrZ3Xt1I'},
  { text: 'ולנטינה וסמיון',
    key: 'xUGgSQe27xw'},
  { text: 'אליזבת',
    key: '0Q6KdCIwYUw'},
  { text: 'תמר',
    key: 'WXT5ApbFHS8'},
  { text: 'ריקי',
    key: '45pwvgzcGDE'},
  { text: 'רחל',
    key: 'ulsSASn8fHc'},
  { text: 'אתי',
    key: 'KK8TpDIaH5Q'},
  { text: 'אסתר',
    key: 'wE-rphK4t04'},
  { text: 'רותי והאנק',
    key: 'HJ7e1Tavbew'},
  { text: 'יהודית',
    key: 'RxuqsXqCkqw'},
  { text: 'טובה ובבו',
    key: 'UwOhdYAo6jw'},
  { text: 'חוה',
    key: 'XfV3yK_js2w'},
  { text: 'גילה וחיים',
    key: 'DweG7DlCx64'},
  { text: 'שולה ובני',
    key: '-rBRcqtbs1k'},
  { text: 'מטי',
    key: 'u1WTZ-DAOHM'},
  { text: 'יפה',
    key: '_wdX-Lc-D1I'},
  { text: 'עטרה וחיים',
    key: 'QDLz6REhYuM'},
  { text: 'אילנה ויאיר',
    key: '0dRWUqqnBm4'},
  { text: 'רבקה',
    key: '0vuX28OkY-4'}
];


var fillVideos = function() {
  var leftFrag = document.createDocumentFragment();
  var rightFrag = document.createDocumentFragment();

  videos.forEach(function(item, index) {
    var isLeft = index % 2 == 1;
    var newVideo = document.createElement('div');
    newVideo.className = 'single-video';
    var frame = document.createElement('div');
    frame.className = 'secondary youtube';
    frame.dataset.embed = item.key;
    var thumbUrl = "https://img.youtube.com/vi/"+ item.key +"/hqdefault.jpg";

    // Load the image asynchronously
    var image = new Image();
        image.src = thumbUrl;
        image.addEventListener( "load", function() {
            frame.appendChild( image );
        });

    var playButton = document.createElement('div');
    playButton.className = 'play-button';
    frame.appendChild(playButton);
    var span = document.createElement('span');
    span.innerText = item.text;
    newVideo.appendChild(frame);
    newVideo.appendChild(span);

    if (isLeft) {
      leftFrag.appendChild(newVideo);
    } else {
      rightFrag.appendChild(newVideo);
    }
  });
  document.getElementById('left-col').appendChild(leftFrag);
  document.getElementById('right-col').appendChild(rightFrag);
}

var connectClickHandlers = function () {
  var videos = document.querySelectorAll('.youtube');
  videos.forEach(function(video) {
    var embedId = video.dataset.embed;
    video.addEventListener('click', function(){
      var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", urlTemplate.replace('{0}', embedId) );

      video.innerHTML = "";
      video.appendChild( iframe );
    });
  });
}

var init = function() {
  fillVideos();
  connectClickHandlers();
}

window.onload = init;
