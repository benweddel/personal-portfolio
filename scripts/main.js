var portApp = {};

portApp.s1 = $('#social1');
portApp.s2 = $('#social2');
portApp.s3 = $('#social3');
portApp.s4 = $('#social4');

portApp.danceSpeed = 220;
portApp.danceDelay = 150;




portApp.init = function(){
  $('#contact').on('click', function(){
    portApp.dance();
  });
};

portApp.dance = function(){
  portApp.s1.animate({'top':-25},portApp.danceSpeed);
  portApp.s1.animate({'top':0},portApp.danceSpeed);
  portApp.s2.delay(portApp.danceDelay).animate({'top':-25},portApp.danceSpeed);
  portApp.s2.animate({'top':0},portApp.danceSpeed);
  portApp.s3.delay(portApp.danceDelay*2).animate({'top':-25},portApp.danceSpeed)
  portApp.s3.animate({'top':0},portApp.danceSpeed)
  portApp.s4.delay(portApp.danceDelay*3).animate({'top':-25},portApp.danceSpeed)
  portApp.s4.animate({'top':0},portApp.danceSpeed)
};

$(function(){
  portApp.init();
})