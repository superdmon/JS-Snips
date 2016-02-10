/*-----------------------------------
    JS-Snips
    Useful Javascript snips
-----------------------------------*/


// Create an element that fills the entire height of the viewport, accurate on mobile devices
$(window).resize(function(){
   var wfh = 0;
   var wsh = $(window).height();
   var wah = screen.availHeight;
   if(wsh > wah){ wfh = wah; }else{ wfh = wsh; }
   $('#yourElementGoesHere').height(wfh);
})
$(window).resize();