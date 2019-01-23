var navCont = document.querySelector(".nav-container");
var icon1 = document.querySelector(".iconnav1");
var icon2 = document.querySelector(".iconnav2");
var navText = document.querySelector(".nav-text");
var smallTxt = document.querySelector(".smalltext");
var brandsmall = document.querySelector(".brandsmall");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navCont.style.top = "0";
    navText.style.color = "black";
    smallTxt.style.color = "#85929E";
    brandsmall.style.color = "black";
    icon1.style.borderRight = "1px solid #AEB6BF";
    icon2.style.borderLeft = "1px solid #AEB6BF";

  } else {
    navCont.style.top = "205px";
    navText.style.color = "white";
    smallTxt.style.color = "white";
    brandsmall.style.color = "white";
    icon1.style.border = "0";
    icon2.style.border = "0";
  }
}
// loopImg();
var adCont = document.querySelector(".add");
var adSrcLinks = ['./images/ad1.jpg', "./images/ad2.jpg", "./images/ad3.png"];
function loopColors(){
  var i = 0;
  setInterval(()=>{
    adCont.style.backgroundImage = 'url("'  + adSrcLinks[i++ % adSrcLinks.length] + '")';
  }, 10000);
};
loopColors();

// Date stuff 
var date = new Date();
var month = date.getMonth(); 
var year = date.getFullYear();
var day = date.getDate();
// get the day of the week 
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
var dayme = date.getDay();
var fullDate = dayOfWeek[dayme] + ", " + months[month] + " " + day + ", " + year;
var pageDay = document.querySelector(".date");
pageDay.textContent = fullDate;
