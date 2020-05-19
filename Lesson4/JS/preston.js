//Toggle menu open-close
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

//custom date
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tueday',
    'Weday',
    'Thuday',
    'Friday',
    'Satday'
  ];

const monthName = months[d.getMonth()];
const dayName = days[d.getDay()];
const formatted = `${dayName}, ${date} ${monthName} ${year}`;
document.getElementById("upTime").innerHTML = formatted;