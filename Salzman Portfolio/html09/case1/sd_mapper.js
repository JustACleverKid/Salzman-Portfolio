"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jack Salzman
   Date:   Thursday, September 17

*/

var thisTime = new Date("February 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleString();
document.getElementById("timestamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = ((2*thisMonth + thisHour) % 24)
var imgStr = String("<img src='sd_sky" + mapNum + ".png'>")
document.getElementById("planisphere").insertAdjacentHTML(imgStr);
