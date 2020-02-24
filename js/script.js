
	let wrpInput = document.querySelectorAll('.wrpInput');
	let input = wrpInput.getAttribute('input');
	console.log(input)
	input.addEventlistener('click', function() {
		setTimeout(window.location='askSecond.html', 2000);
	})
