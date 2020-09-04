"use strict";

/*
  This JS file is intended for use with the Cengage Learning video tutorial
  entitled "JavaScript Events". It provides students with a starting point for
  the tutorial so that they may focus on the JavaScript event concepts that are
  presented in the video. The video will instruct students to add JavaScript
  code and functions to this file which will make the corresponding HTML web
  page interactive.
*/

//define the colors in the color palette and set the default active color
var paletteColors = ['black', 'blue', 'lime', 'cyan', 'red', 'magenta', 'yellow', 'white'];
var activeColor = 'black';

//identify the function to call when the web page loads
window.onload = init;

/*
  This function is called after the HTML page loads. It will call three functions
  to create the color palette, the active color indicator, and the color canvas.
  It will also call a function to add event handlers to the color palette and the
  color canvas.
*/
function init() {
  createPalette();
  createActive();
  createCanvas();
  addEventHandlers();
}

/*
  This function will create the color palette. The palette table contains 1 row
  and 8 columns. Each table cell is assigned a different background color from
  the paletteColors array defined above.
*/
function createPalette() {
  var html = "";

  html += "<tr>";
  for (var i = 0; i < paletteColors.length; i++)
  {
    html += "<td class=\"palette-color\" ";
	html += "id=\"" + paletteColors[i] + "\" ";
	html += "style=\"background-color:" + paletteColors[i] + "\">";
    html += "</td>";
  }
  html += "</tr>";

  var element = document.getElementById("paletteTable");
  element.innerHTML = html;
}

/*
  This function will create the active color indicator. The active color table
  contains 1 row and 1 column.
*/
function createActive() {
  var html = "";

  html += "<tr>";
  html += "<td class=\"active-color\" ";
  html += "id=\"activeColor\" ";
  html += "style=\"background-color:" + activeColor + "\">";
  html += "</td>";
  html += "</tr>";
  html += "</table>";

  var element = document.getElementById("activeTable");
  element.innerHTML = html;
}

/*
  This function will create the color canvas. The cancas table contains 8 rows
  and 8 columns.
*/
function createCanvas() {
  var html = "";

  for (var i = 0; i < 8; i++)
  {
    html += "<tr>";
	for (var j = 0; j < 8; j++)
	{
	  html += "<td class=\"canvas-color\">";
	  html += "</td>";
	}
    html += "</tr>";
  }

  var element = document.getElementById("canvasTable");
  element.innerHTML = html;
}

/*
  *** ADD EVENT HANDLERS ***
*/
function addEventHandlers() {

}

/*
  *** PALETTE CLICK FUNCTION ***
*/


/*
  *** CANVAS CLICK FUNCTION ***
*/

