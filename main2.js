//((((((((((((((((problem 11))))))))))))))))
// Fahrenheit and centigrade are two temperature scales in use today. The Fahrenheit scale was developed by the German physicist Daniel Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32 degrees and boils at 212 degrees.

// The centigrade scale, which is also called the Celsius scale, was developed by Swedish astronomer Andres Celsius. In the centigrade scale, water freezes at 0 degrees and boils at 100 degrees. The centigrade to Fahrenheit conversion formula is:
// C = (5/9) * (F - 32)
// function cToF (celsius) {
//     const cTemp = celsius
//     const cToFahr = (cTemp * 9) / 5 + 32
//     const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`
//     console.log(message)
// }

// function fToC (fahrenheit) {
//     const fTemp = fahrenheit
//     const fToCel = ((fTemp - 32) * 5) / 9
//     const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`
//     console.log(message)
// }
// cToF(60)
// fToC(45)
//(((((((((((((((((My Clean Code)))))))))))))))))
// let toF=(c)=>{
//     let temp=c;
//     let tof=c*9/5+32
//     let msg=`${temp}\xB0F = ${tof}`
//     console.log(msg);
// }
// let toC=(f)=>{
//     let temp=f;
//     let toC=(f-32)*5/9
//     let msg=`${temp}\xB0F = ${toC}`
//     console.log(msg);
// }
// toF(60)
// toC(45)
//((((((((((((((((problem 12))))))))))))))))
// Write a JavaScript program to get the website URL (loading page).
// console.log(document.URL);
//((((((((((((((((problem 13))))))))))))))))
// Write a JavaScript exercise to get the extension of a filename.
// filename = "abc.js"
// console.log(filename.split('.').pop());
// console.log(filename.split('.').shift());
// let a=[1,2,4,5,6,6]
// a.pop()
// a.pop()
// a.pop()
// console.log(a.length);
// console.log(a[2])
//((((((((((((((((problem 14))))))))))))))))
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
// function difference(n)
//  {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
//  }
// console.log(difference(32))
// console.log(difference(11))
//(((((((((((((((((My Clean Code)))))))))))))))))
// let distance = n => (n <= 13 ? 13 - n : (n - 13) * 2)
// console.log(distance(32));
// console.log(distance(11));
//((((((((((((((((problem 15))))))))))))))))
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// let sum = (n1, n2) => (n1 == n2 ? (n1 + n2) * 3 : n1 + n2)
// console.log(sum(12,13));
//((((((((((((((((problem 16))))))))))))))))
// Write a JavaScript exercise to create a variable using a user-defined name.
// let a='abc'
// let b=120
// this[a]=b;
// console.log(this[a]);
//((((((((((((((((problem 17))))))))))))))))
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
// let d = n => (n > 19 ? (n - 19) * 3 : 19 - n)
// console.log(d(30));
// console.log(d(15));
//((((((((((((((((problem 18))))))))))))))))
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// let f=(n1,n2)=>n1==50||n2==50||n1+n2==50?'true':''
// console.log(f(10,40));
// console.log(f(10,50));
// console.log(f(10,10));
//((((((((((((((((problem 19))))))))))))))))
// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. //not ?:
// let a = x =>  Math.abs(400 - x) <= 20 || Math.abs(100 - x) <= 20
// console.log(a(10))
// console.log(a(90))
// console.log(a(99))
// console.log(a(199))
// console.log(a(200))
//((((((((((((((((problem 20))))))))))))))))
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
// let f=(n1,n2)=>n1<0&&n2>0||n1>0&&n2<0
// console.log(f(1,-1));
// console.log(f(-1,-1));
// console.log(f(-1,1));
// console.log(f(1,1));
