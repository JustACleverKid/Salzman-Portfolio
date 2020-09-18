"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jack Salzman
   Date:   Thursday, September 17

*/

//define "thisTime" and write to "timeStr"

var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//use defined variables to make more variables


var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2*thisMonth + thisHour) % 24
var imgStr = String("<img src='sd_sky"+mapNum+".png'>");

//set id's to variables

document.getElementById("timestamp").innerHTML(timeStr);
document.getElementById("planisphere").insertAdjacentHTML(imgStr);
