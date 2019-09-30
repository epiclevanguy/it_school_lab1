'use strict';

function printYes() {
  let x = 1, y = 2;
  document.getElementById('content').innerHTML = x + y;
}

function printNo() {
	document.getElementById('content').innerHTML = "Нажмите кнопку для замены текста страницы";
}