"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Midterm Homepage

   Class Timer
   Author: Jack Salzman
   Date:   9.15.2020

*/

//run showClock Function

showClock();
setInterval("showClock()", 1000);

function showClock() {

//define the dates

var thisDay;
thisDay = new Date();
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();

//local date and times

document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

//Define the next instance of July 4

function nextOctober7(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("October 7, 2020");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

//Set the time of nextOctober7 to 9:00 P.M.

var o7Date = nextOctober7(thisDay);
o7Date.setHours(21);

//added date variables and mapped them to ID's

var days = (o7Date - thisDay)/(1000*60*60*24);
var hrs  = (days - Math.floor(days))* 24;
var mins = (hrs - Math.floor(hrs))* 60;
var secs = (mins - Math.floor(mins))* 60;

document.getElementById("dLeft").textContent = Math.floor(days)
document.getElementById("hLeft").textContent = Math.floor(hrs)
document.getElementById("mLeft").textContent = Math.floor(mins)
document.getElementById("sLeft").textContent = Math.floor(secs)
}