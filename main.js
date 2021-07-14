const audio = document.getElementById("audio");

window.onload = function() {
  audio.play();
};

function togglePlay() {
  $(".audio-icon i").toggleClass("fas fa-volume-mute fas fa-volume-up");
  return audio.paused ? audio.play() : audio.pause();  
};

const myWave = $("#myID").wavify({
  height: 100,
  bones: 5,
  amplitude: 50,
  color: "hsla(179, 32%, 60%, 84%)",
  speed: 0.25,
});

$(window).scroll(function() {
  const hT = $("#sunlight-zone").offset().top,
    hH = $("#sunlight-zone").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    console.log("sunlight zone on the view!");
  }
})