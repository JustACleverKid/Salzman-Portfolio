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
   var thisDay;
   thisDay = new Date("May 19, 2018 9:31:27");
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
}

document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
   var j4Date = nextJuly4(thisDay)
}

var days = (nextJuly4 - thisDay)/(1000*60*60*24);
var hrs  = (nextJuly4 - thisDay)/(1000*60*60*24);
var mins = (nextJuly4 - thisDay)/(1000*60*60*24);
var secs = (nextJuly4 - thisDay)/(1000*60*60*24);
