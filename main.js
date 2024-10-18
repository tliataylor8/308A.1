
// Part 1
let counter = 5;

function incrementCounter() {
    try{
        console.log(counter+1);
        counter++;
        if (counter<0){
            console.log(incrementCounter());
    }
    // console.log("Counter: " + counter);
    } catch(error){
    console.error("An error occurred:", error);
    console.error("Counter value:", counter);
    }   
}

incrementCounter();

// Part 2
const flatArr = (arr) => {
    return arr.reduce((acc, val)) => {
        if(Array.isArray(value)) {
            return acc.concat(flatArr(val));
        } else {
            return acc.concat(val);
        }
    }
}

console.log(flatArr([ [ [ 1, 2, 3 ] ], [ [ 'a', 'b', 'c' ] ], [ [ true, false ] ] ]));
// caused stack overflow


const trampoline = (fn) => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
  
  const flatTram = trampoline(function flatten(arr) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        // Return a function instead of directly calling flatten
        return () => acc.concat(flatten(val));
      } else {
        return acc.concat(val);
      }
    }, []);
  });
  
  console.log(flatTram([[[1, 2, 3]], [['a', 'b', 'c']], [[true, false]]]));
  

//   Part 3

const primeContainer = document.getElementById('primeContainer');
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};


const addPrimes = (n) => {
  let primes = []; 

  const findPrimes = (current) => {
    if (current > n) {
      alert('Calculation completed.');
      return;
    }

    if (isPrime(current)) {
      primes.push(current); 
      primeContainer.textContent = primes.join(', '); 
    }

    
    setTimeout(() => findPrimes(current + 1), 0);
  };
  findPrimes(2);
};

addPrimes(10000);
