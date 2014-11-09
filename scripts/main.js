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
  // $('#gears').on('mouseover', function(){
  //   portApp.wave();
  // });
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

portApp.pos1 = $('#pos1');
portApp.pos2 = $('#pos2');
portApp.pos3 = $('#pos3');
portApp.pos4 = $('#pos4');

portApp.waveDelay = 250;

portApp.wave = function(){
  portApp.pos1.css('display','none');
  portApp.pos2.css('display','block');
  portApp.pos2
    .delay(portApp.waveDelay)
    .queue( function(){
      $(this).css('display','none');
      portApp.pos3.css('display','block');    
    });
  portApp.pos3
    .delay(portApp.waveDelay*2)
    .queue( function(){
      $(this).css('display','none');
      portApp.pos4.css('display','block');    
    });
  portApp.pos4
    .delay(portApp.waveDelay*3)
    .queue( function(){
      $(this).css('display','none');
      portApp.pos3.css('display','block');
    });
  portApp.pos3
    .delay(portApp.waveDelay*4)
    .queue( function(){
      $(this).css('display','none');
      portApp.pos2.css('display','block');
    });
  portApp.pos2
    .delay(portApp.waveDelay*5)
    .queue( function(){
      $(this).css('display','none');
      portApp.pos1.css('display','block');
    });
};





$(function(){
  portApp.init();
})