let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})


$(document).ready(function () {
    tl.to('.slide-content', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2})
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        onInitialized: function(event) {
            // Target the navigation icons and attach a click event handler
            $(".owl-nav button").on("click", function(e) {
                tl.to('.slide-content', { 'clip-path': ' clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0,y:100}, "-=1")
              // Your code to handle the click event here
              console.log("Navigation icon clicked!");
              tl.to('.slide-content', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
            });
          }
    });
});





