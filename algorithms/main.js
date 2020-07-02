// exercises #1, implement algorithms finding greatest common divisor (GCD)
function gcd(a, b) {
     while (a != 0 && b != 0){
	 if( a > b) { 
	 a = a % b 
	 } else ( b > a ){
		 b = b % a 
}
	 return a || b ;
}
}

// exercises #2, implement algorithms finding least common multiple (LCM)
function lcm(a, b) {
     for (let j = a; ; j++){
		if (a%b == 0) continue;
	 return Math.min(j);
	 }
}

// exercises #3, inverse given array
function inverseArray(arr) {
    
    return arr;
}

