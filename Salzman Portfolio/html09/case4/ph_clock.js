"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Jack Salzman
   Date:   Thursday, September 17

   Filename:   ph_clock.js     

*/

/* Time left variables */

var minsLeft = 0;
var secsLeft = 15;
var timeLeft = (minsLeft*60)+(secsLeft);

/* Countdown Timer */

function Countdown() {
   minsLeft = Math.floor(timeLeft/60)
   secsLeft = timeLeft - (60*minsLeft)
   var minsString = addLeadingZero(minsLeft)
   var secsString = addLeadingZero(secsLeft)
   document.getElementById("minutes").textContent(minsString)
   document.getElementById("seconds").textContent(secsString)
   checkTimer()
   timeLeft = timeLeft - 1
}

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
