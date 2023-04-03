

// 3. logic for anagram program with its time complexity. (for large strings)

// ===========================================

// 1. WAP to find Second largest element in an array :
//  arr[] = [12, 35, 1, 10, 34, 1, 35], without sorting, without using any built-in methods and 
//  without deleting duplicate elements. What will be the time complexity?


function findSecondLargestElem(arr){
    let first = 0 , second = 0;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1, 35];
findSecondLargestElem(arr);

// ---------------------
// 2. WAP to reverse an integer without converting it to a string, without using any builtin methods.
var n =1234;
var reverse=0;
var remainder;
while(n>0){
  remainder=n%10;
    reverse=reverse*10+remainder;
    n=Math.floor(n/10)
}
console.log(reverse)
// ------------------
// 2.a)Swap Values without using any variable a=10, b=12

let a = 10, b = 12;
    console.log(" a is  " +   a + " and  b is : " + b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a : "+a +" and b is : " +b);
    // -----------------------

    // Q.4)Find the reverse of the string
    let str="mohini";
    let rev=""
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    console.log(rev)    

    // ------------------------
    // 6. WAP to find the given string is Palindrome or not

    let str1="pop";
    let rev1=""
    for(let i=str1.length-1;i>=0;i--){
        rev1+=str1[i]
    }
if(str1===rev1){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")
}
// ---------------------
// 5. WAP to find missing elements from the array
var highest=0;
function test(nums) {

    for (let n = 1; n<= nums.length + 1; n++) {
        if(nums[n]>highest) 
        {
            highest=nums[n]   
        }
    }
//   console.log(highest)  

  var lastnum=0;
  if(highest>nums.length){
    lastnum=highest
  }
  else{
    lastnum=nums.length;
  }

  for (let n = 1; n<=lastnum; n++) {
    if (nums.indexOf(n) === -1) 
    console.log(n)
  }
}

nums = [1,2,5,6,7,10,12]
// console.log("nums = "+nums)
test(nums)

// ---------------------
// 7. WAP to print Fibonacci series without recursion

var fibnum=[];
function fibonacci(num)
{
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
        fibnum.push(num2)
    }
 
   
console.log("Fibonacci series : of "+num +" is : "+fibnum)
}
  
fibonacci(5)
// console.log(fibnum)

// --------------------------
// 7. WAP to print Fibonacci series with recursion
// program to display fibonacci sequence using recursion


// ---------------------
// 11. Find prime numbers from 1 ....n 


var n;
function primeNum(num){

for(let n=2;n<num;n++){
    if(n==2){
        console.log(n +" is a prime number")
       
    }
    else if(n%2==0){
        console.log(n +" is a not prime number")
    }
    else{   
        console.log(n +" is prime number")
    }
}
}

primeNum(5)

// --------------------------

// 12. WAP for getting a square root of a given number

var squreroot;
function squareRoot(num){
for(let i=2;i<num;i++){
 console.log("num...",num)
 if(i*i==num){
return i
 }
}
}

console.log(squareRoot(81))

// ------------------------
// Q)Find all duplicate number in array
// 14. [80, 60, 10, 50, 30, 100, 0, 50]

console.log()
// ------------------------------
const arry = [80, 60, 10, 50, 30, 100, 0, 50];
var k=arry.filter((item, index) => arry.indexOf(item) !== index)

console.log(k)
// ----------------------------
// Q.14. [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;

//WAP to find pairs whose sum is 100 from arr = [80,60,10,50,30,100,0,50]
const findPair = (arr) => {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 100) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  };
  
  const arr1 = [80, 60, 10, 50, 30, 100, 0, 50];
  console.log(findPair(arr1));
  
  