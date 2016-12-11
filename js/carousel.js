$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1500, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [1024, 3], // betweem 900px and 601px
        itemsTablet: [992, 3], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: [
            "<img src='images/leftArrow.png' >",
            "<img src='images/rightArrow.png' >"
        ],
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

});