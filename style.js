$( document ).ready(function() {
   var rocketSpeed = 40;

   function increasePlaySpeed() { 
     document.getElementById("song").playbackRate = document.getElementById("song").playbackRate + 0.2;
     console.log(document.getElementById("song").playbackRate);
    }


 $('.speed-btn').click(function() {
  if (rocketSpeed < 8){
   rocketSpeed = 2;
   $('.speed-btn').html('Don\'t go crazy!')
 } else {
    increasePlaySpeed();
    rocketSpeed = rocketSpeed - 5;
}
   $('.rocket').css({
     'animation' : 'spin ' +  rocketSpeed + 's linear infinite',
 });
 });


  $('.end-btn').click(function(){
     document.getElementById('song').currentTime = 245;;
 });
 

 document.getElementById("song").onended = function() {
        $("#flag").fadeToggle();
        $('.rocket').css({
             'animation-name': 'flyaway',
             'animation': 'flyaway 10s linear'
       });
}
});