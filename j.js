$(document).ready(function() {
    $(".htxt").animate({
        right: "0px" 
    }, 2000);
});

$("#show").click(function() {
    $(".tog").slideDown(3000);
    $('#show').hide();
});

$("#aboutn").click(function() {
    $(".atxt").slideDown(2000);
});
$(".about").hover(function() {
    $(".atxt").slideDown(1500);
}).on("touchstart", function() {
    $(".atxt").slideDown(1500);
});

$("#shopn").click(function() {
    $(".showp").slideDown(2500);
});
$(".dptxt").hover(function() {
    $(".showp").slideDown(2000);
}).on("touchstart", function() {
    $(".showp").slideDown(2000);
});

$("#contactn").click(function() {
    $(".contact").slideDown(3000);
    $(".ctxt").slideDown(3000);
});
$(".ccontainer").hover(function() {
    $(".contact").slideDown(2000);
    $(".ctxt").slideDown(2000);
}).on("touchstart", function() {
    $(".contact").slideDown(2000);
    $(".ctxt").slideDown(2000);
});

$("#infon").click(function() {
    $(".icon").slideDown(2000);
    $(".d").slideDown(2000);
});

$(".info").hover(function() {
    $(".icon").slideDown(2000);
    $(".d").slideDown(2000);
}).on("touchstart", function() {
    $(".icon").slideDown(2000);
    $(".d").slideDown(2000);
});
