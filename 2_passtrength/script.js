window.onload = function() {
  init();
}

function init() {
  var x = document.getElementsByClassName("pass")[0];
  var style = window.getComputedStyle(x);
  if (!style.webkitTextSecurity && !style.textSecurity) {
    x.setAttribute("type", "password");
  }
}

const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 25 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});