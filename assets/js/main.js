$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 3,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 2
            },
            720: {
                items: 3
            }
        }
    });

});