 // PART 1
function countDown(time){
    var timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
  console.log(countDown(5));

  // PART 2
function randomGame(){
      var num;
      var times = 0;
      var timer = setInterval(function(){
          num = Math.random();
          times++;
            if(num > 0.75){
                clearInterval(timer);
                console.log("It takes " + times + " try/tries.");
           }
        },1000)
    }
    randomGame();
    console.log(randomGame());

// PART 3
function isEven(num){
    if(num % 2 === 0){
        return "true";
    }else{
        return "false";
    }
}
console.log(isEven(4));
console.log(isEven(9));

 // PART 4
function isOdd(num){
    if(num % 2 !== 0){
        return "true";
    }else{
        return "false";
    }
}
console.log(isOdd(5));

// PART 5
function isPrime(num){
for(var x = 2; x <= num; x++){
    if(num % x === 0){
        return "false";
        } else {
        return "true";
        }
    }
}
console.log(isPrime(4));
console.log(isPrime(17));

// PART 6
function numberFact(num, fn){
    return fn (num);
}
console.log(numberFact(24, isEven));
console.log(numberFact(15, isPrime));

// PART 7
function find(arr, fn){
    for(var i=0; i<arr.length; i++){
        if(fn(arr[i])) 
        return arr[i];
    }
}
console.log(find([1,2,3,4], function(value){return value === 4}));
console.log(find([2,4,6,8,10,12], function(value){return value > 10}));

// PART 8
function findIndex(arr, fn){
    for(var i=0; i<arr.length; i++){
      if(fn(arr[i])) 
      return i;
    }
  }
  console.log(findIndex([1,2,3,4,5], function(value){return value === 3}));
// PART 9
function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }