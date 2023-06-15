$(document).ready(function() {
		  "use strict";
		  $(".menu > ul > li").hover(function(e) {
		    if ($(window).width() > 943) {
		      $(this).children("ul").stop(true, false).slideToggle("easing");
			  document.getElementById("contenedor-blur-fondo").style.display = "block";
			  document.getElementById("contenedor-blur-fondo").style.backdropFilter = "blur(999px)";
			  document.getElementById("contenedor-blur-fondo").style.zIndex = "1";
			  document.getElementById("contenedor-blur-fondo").style.position = "absolute";
			  document.getElementById("submenu").style.height = "50vh";
			  document.getElementById("submenu").style.top = "0vh";
			  document.getElementById("submenu").style.transition = "all easing 0.4s";
			  document.getElementById("menu-container").style.transition = "all easing 3s";
			  document.getElementById("menu-container").style.backdropFilter = "blur(3rem)";
			  document.getElementById("menu-container").style.background = "#131313";
			  document.getElementById("menu-container").style.borderBottom = "0px";  
		    }
			
		  });
		  
		  
		});
		function fondonormal() {
			document.getElementById("contenedor-blur-fondo").style.display = "none";
			document.getElementById("contenedor-blur-fondo").style.transition = "all easing 3s";
			document.getElementById("menu-container").style.backdropFilter = "blur(3rem)";
			document.getElementById("menu-container").style.backgroundColor = "rgba(0, 0, 0, 0.727)";
			document.getElementById("menu-container").style.backgroundImage = "url(https://uploads-ssl.webflow.com/6245af0…/6245af0…_Grain%20Sample%20Large.png), linear-gradient(125deg, rgba(255, 255, 255, 0.2), transparent)";
			document.getElementById("menu-container").style.transition = "all easing 3s";
		  }