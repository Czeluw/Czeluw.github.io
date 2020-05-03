//out the last modified date on main page
let lastDate = document.lastModified;
document.getElementById("upTime").innerHTML = lastDate;

//function to open navigation bar
function openNav() {
    document.getElementById("boopbar").style.width = "250px";
}
  
//function to close navigation bar
function closeNav() {
    document.getElementById("boopbar").style.width = "0";
}