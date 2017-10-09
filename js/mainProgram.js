/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prevId = 'main';
var tabName = "Tabs";
var tabExpires = 5;

window.onload = function()
{
  if (window.addEventListener) {
      window.addEventListener("keydown",keyChange);
  }
};

function keyChange(event) {
	switch(event.keyCode) {
		case 65:
			changePage('about');
			break;
		case 77:
			changePage('main');
			break;
		case 80:
			changePage('projects');
			break;
		case 68:
			changePage('documents');
			break;
	}
}
function print(x)
{
    console.log(x);
}
