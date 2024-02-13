const button = document.getElementById("noo");
const yes = document.getElementById("yes");
const vid = document.getElementById("player");
const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });
const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

$(document).ready(function(){

  $("#yes").click(function() {
    console.log('clicked');
    // fade outs

    $('#valentine').fadeOut(750);
    $('#yes').fadeOut(2000);
    $('#noo').fadeOut(2000);

    // fade Ins

    $('#audio').fadeIn(5000);
    $('.pp').fadeIn(5000);
    $('article').fadeIn(5000);
    $('.pic').fadeIn(5000);

  });
});

var audio = document.getElementById('audio');

  var isPlaying = false

  function togglePlay() {
      if (isPlaying) {
          audio.pause()
          document.getElementById('wow').src = '/assets/pause.png'
      } else {
          audio.play();
          document.getElementById('wow').src = '/assets/play.png'
      }
  };
  audio.onplaying = function() {
      isPlaying = true;
      };
  audio.onpause = function() {
      isPlaying = false;
  };

function imahe() {
  document.getElementById('bgimg').id = 'fade';
}

