// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
	let output = []
	let xArray = Array.from(x)
	// alert(newBin)
	xArray.forEach( ( x, i) => {
		if(Number(xArray[i]) > 4) {
			output[i] = 1
		}else{
			output[i] = 0
		}
	})
	return output.join('')
}

fakeBin('583109834193')