'use strict';

/* toggle between adding and removing the 'responsive' class to the topnav when the user clicks the icon */

function myFunction() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// home page logo mouse over fade out
$(document).ready(() => {
	  $('.logo').on('mouseover', () => {
	  	$('.logo').fadeOut(500);
	});
});

