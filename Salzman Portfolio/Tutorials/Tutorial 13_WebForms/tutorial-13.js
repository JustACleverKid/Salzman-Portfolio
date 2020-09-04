"use strict";

/*
  This JS file is intended for use with the Cengage Learning video tutorial
  entitled "Web Forms". It provides students with a starting point for the
  tutorial so that they may focus on the JavaScript event concepts that are
  presented in the video. The video will instruct students to add JavaScript
  code and functions to this file which will make the corresponding HTML web
  form interactive.
*/

//define variable arrays to initialize line item
//quantities, descriptions, prices and extensions
var quantities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var items = ["Ballpoint Pens (Box of 12)",
             "Wood Pencils (Box of 12)",
             "Sticky Notes (Pkg of 12)",
             "Writing Pads (Pkg of 12)",
             "Dry Erase Markers (Pkg of 4)",
             "Printer/Copier Paper (10 Reams)",
             "Envelopes (Box of 50)",
             "Transparent Tape (Pkg of 10)",
             "Stapler",
             "Staples (Box of 1200)"];
var prices = [3.99, 5.99, 8.49, 8.49, 6.99, 47.99, 14.99, 25.99, 13.99, 5.89];
var extensions = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];

//define summary variables for subtotal, sale tax, and grand total
var subtotal = 0.00;
var salesTax = 0.00;
var grandTotal = 0.00;

//define variable for 6% sales tax rate
var taxRate = 0.06;

//identify the function to call when the web page loads
window.onload = init;

/*
  This function is called after the HTML page loads. It will create a table
  row for each line item defined above. Each line item contains a quantity,
  a description, a price and an extension. The resulting table is displayed
  on the HTML web form.
*/
function init() {
  var html = "";
  for (var i = 0; i < items.length; i++) {
    html += "<tr>";
    html += "<td class=\"col1\">";
    html += "<input ";
    html += "class=\"quantity\" ";
    html += "id=\"qty" + i + "\" ";
    html += "size=\"2\" ";
    html += "value=\"0\">";
    html += "</input>";
    html += "</td>";
    html += "<td class=\"col2\">";
    html += items[i];
    html += "</td>";
    html += "<td class=\"col3\">";
    html += prices[i].toLocaleString('en-US', {style:"currency", currency:"USD"});
    html += "</td>";
    html += "<td class=\"col4\" id=\"ext" + i + "\">";
    html += extensions[i].toLocaleString('en-US', {style:"currency", currency:"USD"});
    html += "</td>";
    html += "</tr>";
  }
  var element = document.getElementById("lineItems");
  element.innerHTML = html;

  var qtyElements = document.getElementsByClassName("quantity");
  for (var i = 0; i < qtyElements.length; i++) {
    qtyElements[i].onchange = qtyChange;
  }
}

/*
  *** QUANTITY CHANGE FUNCTION ***
*/


/*
  *** UPDATE SUMMARY FUNCTION ***
*/

