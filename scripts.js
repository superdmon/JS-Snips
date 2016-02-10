/*-----------------------------------
    JS-Snips
    Useful Javascript snips
-----------------------------------*/

// FULL HEIGHT PAGE ELEMENT
// Create an element that fills the entire height of the viewport, accurate on mobile devices
$(window).resize(function(){
   var wfh = 0;
   var wsh = $(window).height();
   var wah = screen.availHeight;
   if(wsh > wah){ wfh = wah; }else{ wfh = wsh; }
   $('#yourElementGoesHere').height(wfh);
})
$(window).resize();


// SMOOTH SCROLLING LINKS
// Allows for smooth window scrolling to named anchor
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


// EMAIL VALIDATION
// Validates input to make sure email is valid
$.fn.validateEmail = function () {
    return this.each(function () {
        var $this = $(this);
        $this.change(function () {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if ($this.val() == "") {
                $this.removeClass("badEmail").removeClass("goodEmail")
            }else if(reg.test($this.val()) == false) {
                $this.removeClass("goodEmail");
                $this.addClass("badEmail");
            }else{
                $this.removeClass("badEmail");
                $this.addClass("goodEmail");
            }
        });
    });
};