window.onload = function () {
	
	function randomColour() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

  const button = 	document.getElementById('button');
  button.addEventListener('click', function () {
    const body = document.getElementById('body');
    body.style.background = randomColour();
	});
};