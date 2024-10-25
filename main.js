
let counter = 2;

function incrementCounter() {
    counter = counter + 1;  
    console.log(counter);  
    if (counter < 10) {  
        incrementCounter();  
    }
}


try {
    incrementCounter();
} catch (error) {
    console.error("Stack overflow or other error occurred:", error);
    console.log("Counter value at the time of error:", counter);  // Log the value of the counter
}


// PART 2 
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const nestedArray = [1, [2, [3, [4, 5]]], 6];
console.log(flattenArray(nestedArray)); 

function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();  
    }
    return fn;
}

function flattenArrayTrampolined(arr) {
    let result = [];
    let index = 0;

    function step() {
        if (index >= arr.length) return result; 
        if (Array.isArray(arr[index])) {
            return () => {
                let nestedResult = flattenArrayTrampolined(arr[index]);
                result = result.concat(nestedResult);
                index++;
                return step();  
            };
        } else {
            result.push(arr[index]);
            index++;
            return step();  
        }
    }

    return step;  
}

const trampolinedArray = trampoline(flattenArrayTrampolined([1, [2, [3, [4, 5]]], 6]));
console.log(trampolinedArray);  


// PART 3
function isPrime(num) {
    if (num < 2) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function isPrime(num) {
  if (num < 2) return false;  
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function displayPrimeNumbers(n) {
  let primes = [];


  function findNextPrime(i) {
      if (i > n) {
          console.log('Prime number calculation finished!');  
          return;
      }

      if (isPrime(i)) {
          primes.push(i);  
          console.log(i);  
      }

      setTimeout(() => findNextPrime(i + 1), 0);
  }

 
  findNextPrime(2);
}

displayPrimeNumbers(100);

