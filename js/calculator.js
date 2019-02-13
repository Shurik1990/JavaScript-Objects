$(document).ready(function() {	

	$("#sum").on('click', function () {
		var action = $("button[name=sum]").val();
        var first = $("input[name=first]").val() * 1;
        var second = $("input[name=second]").val() * 1;
		var sum = sum(first, second);
		var result;
		
		function sum (first, second) {
            result = first + second;
        }
        
		$("input[name=result]").val(result);
    });
	
	$("#sub").on('click', function () {
		var action = $("button[name=sub]").val();
        var first = $("input[name=first]").val() * 1;
        var second = $("input[name=second]").val() * 1;
		var sub = sub(first, second);
		var result;
		
		function sub (first, second) {
            result = first - second;
        }
        
		$("input[name=result]").val(result);
    });
	
	$("#multi").on('click', function () {
		var action = $("button[name=multi]").val();
        var first = $("input[name=first]").val() * 1;
        var second = $("input[name=second]").val() * 1;
		var multi = multi(first, second);
		var result;
		
		function multi (first, second) {
            result = first * second;
        }
        
		$("input[name=result]").val(result);
    });
	
	$("#divide").on('click', function () {
		var action = $("button[name=divide]").val();
        var first = $("input[name=first]").val() * 1;
        var second = $("input[name=second]").val() * 1;
		var divide = divide(first, second);
		var result;
		
		function divide (first, second) {
            result = first / second;
        }
        
		$("input[name=result]").val(result);
    });

});

// Калькулятор с радио кнопками

$(document).ready(function() {	

	$("input[name=sum]").on('click', function () {
		var action = $("input[name=sum]").val();
        var firsts = $("input[name=firsts]").val() * 1;
        var seconds = $("input[name=seconds]").val() * 1;
		var sum = sum(firsts, seconds);
		var results;
		
		function sum (firsts, seconds) {
            results = firsts + seconds;
        }
        
		$("input[name=results]").val(results);
    });
	
	$("input[name=sub]").on('click', function () {
		var action = $("input[name=sub]").val();
        var firsts = $("input[name=firsts]").val() * 1;
        var seconds = $("input[name=seconds]").val() * 1;
		var sub = sub(firsts, seconds);
		var results;
		
		function sub (firsts, seconds) {
            results = firsts - seconds;
        }
        
		$("input[name=results]").val(results);
    });
	
	$("input[name=multi]").on('click', function () {
		var action = $("input[name=multi]").val();
        var firsts = $("input[name=firsts]").val() * 1;
        var seconds = $("input[name=seconds]").val() * 1;
		var multi = multi(firsts, seconds);
		var results;
		
		function multi (firsts, seconds) {
            results = firsts * seconds;
        }
        
		$("input[name=results]").val(results);
    });
	
	$("input[name=divide]").on('click', function () {
		var action = $("input[name=divide]").val();
        var firsts = $("input[name=firsts]").val() * 1;
        var seconds = $("input[name=seconds]").val() * 1;
		var divide = divide(firsts, seconds);
		var results;
		
		function divide (firsts, seconds) {
            results = firsts / seconds;
        }
        
		$("input[name=results]").val(results);
    });

});