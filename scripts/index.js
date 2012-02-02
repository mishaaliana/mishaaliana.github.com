//Makes #nav links appear at 50% opacity until hover event

$(document).ready(function () {
//on load #nav links appear at 50% opacity
    $('#nav a').animate({
        opacity: .5
    });
    $("#nav a").hover(function () {
    //when moused over opacity becomes 100%
        $(this).stop().animate({ "opacity": "1" }, "slow");
    }, function () {
    //when moused off opacity reverts to 50%
        $(this).stop().animate({ "opacity": ".5" }, "slow");
    });

 });

