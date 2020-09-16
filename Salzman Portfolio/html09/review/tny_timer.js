"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Jack Salzman
   Date:   9.15.2020

*/

function showClock() {
   var thisDay = new Date("May 19, 2018 at 9:31:27 a.m.")
   var localDate = new Date("May 19, 2018 at 9:31:27 a.m.")
   var localTime = new Date("May 19, 2018 at 9:31:27 a.m.")
}

document.getElementById("currentTime").innerHTML = "<span>date</span><span>time</span>";

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}