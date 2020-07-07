// exercises #1, implement algorithms finding greatest common divisor (GCD)
function gcd(a, b) {
     while (a != 0 && b != 0){
	 if( a > b) { 
	 a = a % b 
	 } else {
		 b = b % a 
}
	 return a || b ;
}
}

// exercises #2, implement algorithms finding least common multiple (LCM)
function lcm(a, b) { 
     return a * b / gcd(a, b)
}

// exercises #3, inverse given array
function inverseArray(arr) {
    for( let i = 0; i < arr.length / 2 ; i++) {
       let b = arr[i]; 
       arr[i] = arr[arr.length - 1 - i]; 
       arr[arr.length -1 - i] = b;
    }
    return arr;
}
