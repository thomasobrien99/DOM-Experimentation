console.log("Javascript is alive!");

var konami = ["38", "38", "40","40", "37", "39", "37", "39", "66", "65"];
var konamiCounter = 0;

window.addEventListener("keydown", function(event){
	if(event.keyCode > 47 && event.keyCode < 58){
		alert("I HATE NUMBERZZZ");
	}
	if(event.keyCode == konami[konamiCounter])
	{
		konamiCounter++;
		if(konamiCounter === 10)
		{
			alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
		}
	}
	else
	{
		konamiCounter = 0;
	}
	
 }, true);

document.addEventListener("DOMContentLoaded", function(){
/*
1. Change the greeting from "Hello, There!" to "Hello, World!".
*/
  var greetingDiv = document.getElementById("greeting");
  greetingDiv.innerText = "Hello, World!";
/*
2. Set the background color of each `<li>` to `yellow`.
*/
  var listItems = document.getElementsByTagName('li');
  for(var i = 0; i < listItems.length; i++)
  {
	  listItems[i].style.backgroundColor = 'yellow';
  }
/*
3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
*/
  var newImageTag = document.createElement('img');
  newImageTag.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greetingDiv.appendChild(newImageTag);

});
window.onload = function(){
//4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
//5. Change the image to be the most recently clicked food item.
  var listItems = document.getElementsByTagName('li');
  var picture = document.getElementsByTagName('img')[1];
  
  for(var i = 0; i < listItems.length; i++)
  {
	  listItems[i].addEventListener("click", addClass); 
  }

  function addClass(){ 
	  for (var i = 0; i < listItems.length; i++)
	  {
		  listItems[i].removeAttribute('class');
    }
    this.className = 'selected';
    picture.src = "images/"+this.innerText+".jpeg";

  }

//6. When the gray div is moused over, it's removed from the DOM.
  var grayDiv = document.getElementById("ghosting");
  grayDiv.addEventListener("mouseover", function(){
	this.remove();
  });

//7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
  var orangeDiv = document.getElementById("resize");
  orangeDiv.addEventListener("mouseenter", function(){
  	orangeDiv.style.width = "400px";
  });
  orangeDiv.addEventListener("mouseleave", function(){
  	orangeDiv.style.width = "200px";
  });
//8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
	for(var i = 0; i < listItems.length; i++){
		listItems[i].removeAttribute('class');
	}
	picture.src = "images/panic.jpeg";
});

//9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
};


