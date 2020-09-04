"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 3

   Author: 
   Date:   
   
   Filename: rb_build.js

*/





window.addEventListener("load", function() {
   // Preview image of the pizza 
   var pizzaPreviewBox = document.getElementById("previewBox"); 
   // Summary of the pizza order
   var pizzaSummary =  document.getElementById("pizzaSummary");
   // Pizza size selection list
   var pizzaSizeBox = document.getElementById("pizzaSize");
   // Pizza crust selection list
   var pizzaCrustBox = document.getElementById("pizzaCrust");
   // Pizza double sauce checkbox
   var pizzaDoubleSauceBox = document.getElementById("doubleSauce");
   // Pizza double cheese checkbox
   var pizzaDoubleCheeseBox = document.getElementById("doubleCheese");
   // Pizza topping option buttons
   var toppingOptions = document.querySelectorAll("input.topping");
   // Pizza quantity selection list
   var pizzaQuantityBox = document.getElementById("pizzaQuantity");
   // Add to cart button
   var addToCartButton = document.getElementById("addToCart");
   // Order table displaying the items in the shopping cart
   var cartTableBody = document.querySelector("table#cartTable tbody");   
   // Shopping cart total box
   var cartTotalBox = document.getElementById("cartTotal");   
    
   pizzaSizeBox.onchange = drawPizza;
   pizzaCrustBox.onchange = drawPizza;
   pizzaDoubleSauceBox.onclick = drawPizza;   
   pizzaDoubleCheeseBox.onclick = drawPizza; 
   pizzaQuantityBox.onchange = drawPizza;   
   for (var i = 0; i < toppingOptions.length; i++) {
      toppingOptions[i].onclick = drawPizza;
   }


   
   // Function to build the pizza
   function buildPizza(newPizza) {
   }  
   

   // Function to add the built pizza to the shopping cart
   function addPizzaToCart() { 
   }   
   


   /* Function to draw the pizza image on the page */
   function drawPizza() {
      pizzaPreviewBox.removeChildren();      
      var pizzaDescription = "";
      
      pizzaDescription += pizzaSizeBox.selectedValue() + '" pizza ';
      pizzaDescription += pizzaCrustBox.selectedValue() + ", ";
      if (pizzaDoubleSauceBox.checked) {
         var sauceImg = document.createElement("img");
         sauceImg.src = "rb_doublesauce.png";
         pizzaPreviewBox.appendChild(sauceImg);
         pizzaDescription += "double sauce, ";
      }
      if (pizzaDoubleCheeseBox.checked) {
         var cheeseImg = document.createElement("img");
         cheeseImg.src = "rb_doublecheese.png";
         pizzaPreviewBox.appendChild(cheeseImg);
         pizzaDescription += "double cheese, ";
      } 

      var checkedToppings = document.querySelectorAll("input.topping:checked");    
      for (var i = 0; i < checkedToppings.length; i++) {
         if (checkedToppings[i].value !== "none") {
            
            pizzaDescription += checkedToppings[i].name + "(" + checkedToppings[i].value + "), ";
            var toppingImage = document.createElement("img");
            toppingImage.src = "rb_" + checkedToppings[i].name + ".png";
            pizzaPreviewBox.appendChild(toppingImage);                                  
            
            if (checkedToppings[i].value === "left") {
               toppingImage.style.clip = "rect(0px, 150px, 300px, 0px)";
            }  else if (checkedToppings[i].value === "right") {
               toppingImage.style.clip = "rect(0px, 300px, 300px, 150px)";
            }
      
         }
      }   
      
      pizzaSummary.textContent = pizzaDescription;
   }
   
   // Function to reset the pizza drawing 
   function resetDrawPizza() {
      // Object collection of all topping option buttons with a value of 'none'
      var noTopping = document.querySelectorAll("input.topping[value='none']");
      
      pizzaSizeBox.selectedIndex = 1;
      pizzaCrustBox.selectedIndex = 0;
      pizzaDoubleSauceBox.checked = false;
      pizzaDoubleCheeseBox.checked = false;
      
      for (var i = 0; i < noTopping.length; i++) {
         noTopping[i].checked = true;
      }      
      pizzaSummary.textContent = '14" pizza, thin';
      pizzaPreviewBox.removeChildren();
      pizzaQuantityBox.selectedIndex = 0;
   }
   
});



/*-------------------- Custom Methods --------------------*/

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function() {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};

