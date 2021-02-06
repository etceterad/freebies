$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin:30,
        startPosition: 1,
        dots: true,
        navText: ['<img src="img/left.png">','<img src="img/right.png">'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});    