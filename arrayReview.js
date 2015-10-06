var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var threeItems = [boat,car,bike];
console.log(years[0]);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
var evenArray = [1,2,3,6,22,98,45,23,22,12];
function removeOddNumbers(arr) {
    var notOdd = [];

    for (var i = 0; i < arr.length; i++) {
       if (arr[i] % 2 === 0) {
           notOdd.push(arr[i]);
       }
    }

    console.log (notOdd);
}

removeOddNumbers(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var getRandomArbitrary = function () {
    return Math.floor(Math.random() * (30 - 0) + 0);
};

var arr = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

var checkNum = function() {
    var x = getRandomArbitrary();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            var y = arr[i];
        } 
    }
        if (y === undefined){
            alert(false);
        } else alert(true);
};
checkNum();
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
var first = [1,2,3,4,5];
var second = [1,2,3,4,5,6,7];

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
function find_longest_word(str)  
{  
  var array1 = str.match(/\w[a-z]{0,}/gi);  
  var result = array1[0];  
  
  for(var x = 1 ; x < array1.length ; x++)  
  {  
    if(result.length < array1[x].length)  
    {  
    result = array1[x];  
    }   
  }  
  return result;  
}  
alert(find_longest_word('Dev Mountain is the best'));  
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
var str = 'What is a jQuery but a misunderstood object';
str.replace(/\b./g, function(m){ return m.toUpperCase(); });


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var theOdyssey = "function expression or function declaration? Tis an obvious choice";

//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var str = 'function expression or function declaration? Tis an obvious choice' ;
var matches = str.match(/[aeiou]/gi);
    var count = matches ? matches.length : 0;
    alert(count + " vowel(s)");