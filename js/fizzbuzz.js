function fizzbuzz(input_number) {
    if(!isNaN(input_number) && parseInt(Number(input_number)) == input_number &&
       !isNaN(parseInt(input_number, 10)) && input_number > 0) {
	for(i = 1;i <= input_number; i++) {
	    if(i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	    } else if(i % 3 == 0) {
		console.log('Fizz');
	    } else if(i % 5 == 0) {
		console.log('Buzz');
	    } else {
		console.log(i);
	    }
	}
    } else {
	console.log('Not a positive integer.');
    }
}