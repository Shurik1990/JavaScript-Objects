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