window.calculator = window.calculator || {};

(function() {
	var calculate = function() {
		var x = document.getElementById('x').value;
		var y = document.getElementById('y').value;
    var sum = Number(x) + Number(y);
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
  };

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();
