
$( window ).ready(function(){
    var video = document.getElementsByTagName('video')[0];
    video.addEventListener('ended', function() {
    video.load();
    $(".main_video").addClass("finished");
    video.autoplay=false;
}, false);
});
var video = document.getElementById('video');
var video_btn = document.getElementById('video-btn');
var btn_status = 0;


video_btn.addEventListener('click', function () {
    video.play();
    video.currentTime = 0 ;
    $(".main_video").removeClass("finished");
    btn_status = 1;
});


// Unmute button setting
muteButton.addEventListener('click', function() {
  video.muted = !video.muted;
});

video.addEventListener('volumechange', function() {
  muteButton.classList.toggle('active', video.muted);
});