let lastDate = document.lastModified;
document.getElementById("upTime").innerHTML = lastDate;

var windowWidth = $(window).width();

$("#nav-toggle").click(function () {
    $("#nav ul").slideToggle();
    $("#nav ul").toggleClass("open");
});

$(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth > 767) {
        if ($("#nav ul").is(":hidden")) {
        	$("#nav ul").css("display","block");
        }
    }
    else {
        $("#nav ul").css("display","none");
    }
});