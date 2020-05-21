/*Toggle menu open-close
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
*/

//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

//custom date
let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthYear = ['January','February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mydate = new Date();
let weekname = weekDay[mydate.getDay()];
let monthname  = monthYear[mydate.getMonth()];
const dateoutput = document.querySelector('.theTime');
dateoutput.textContent = weekname + ', ' + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();
