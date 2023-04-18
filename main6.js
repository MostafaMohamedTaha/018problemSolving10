//((((((((((((((51))))))))))))))
// Write a JavaScript program to convert a given number to hours and minutes.
// let a=(num)=>{
//     let hour=Math.floor(num/60)
//     let minute=num%60
//     // let minute=Math.ceil(hour/60) //not working
//     return  `${hour} : ${minute}`
// }
// console.log(a(71));
// console.log(a(450));
// console.log(a(1441));
//((((((((((((((52))))))))))))))
// Write a JavaScript program to convert the letters of a given string in alphabetical order.
// let a=(str)=>str.split('').sort().reduce((a,b)=>a+b)
// console.log(a("Python"));
// console.log(a("Exercises"));
//((((((((((((((53))))))))))))))
// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// let a=(str)=>(/a...b/).test(str)||(/b...a/).test(str)
// console.log(a("Chainsbreak"));
// console.log(a("pane borrowed"));
// console.log(a("abCheck"));
//((((((((((((((54))))))))))))))
// Write a JavaScript program to count the number of vowels in a given string
// let a=(str)=>str.replace(/[^aeiou]/g,'').length
// console.log(a("Python"));
// console.log(a("w3resource.com"));
//((((((((((((((55))))))))))))))
// Write a JavaScript program to check whether a given string contains equal number of p's and t's.
// let a=(str)=>str.replace(/[^p]/g,'').length===str.replace(/[^t]/g,'').length
// console.log(a("paatpss"));
// console.log(a("paattps"));
//((((((((((((((56))))))))))))))
// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
// let a=(n1=1000, n2=1)=> {
//   let b = Math.round(n1 / n2).toString(),
//     c = b.split("");
//   if (b >= 1000) {
//     for (let i = b.length - 3; i > 0; i -= 3) {
//       c.splice(i, 0, ",");
//     }
//     c
// }
//     return c;
// }
// console.log(a(2000,2));
////////////////////////////////
// let a=(n1,n2)=>{
//     let d=Math.round(n1/n2).toString()
//     let sd=d.split('')
//     for (let index = d.length-3; index >0; index-=3) { //1,000,000 properly formatted comma
//         d>=1000?sd.splice(index,0,','):sd
//     }
//     return sd
// }
// console.log(a(100000,1))
//((((((((((((((57))))))))))))))
// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
// let a=(str,n)=>n<=0?'there is no repeat':str.repeat(n)
// console.log(a('abc ',5))
// console.log(a('abc ',-5))
// console.log(a('abc ',0))
//((((((((((((((58))))))))))))))
// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
// let a = (str) =>
//   str.length < 3
//     ? `phase must have 3 characters at least`
//     : str
//         .split("")
//         .slice(-3)
//         .reduce((a, b) => a + b)
//         .repeat(4)
// console.log(a("Python 3.0"));
// console.log(a("JS"));
// console.log(a("JavaScript"));
//((((((((((((((59))))))))))))))
// let a=[1,2,3,4,5,6]
// a.splice(0,1,'mostafa',1,2,3,4,5) //must add postion <delete to delete
// console.log(a)
// Write a JavaScript program to extract the first half of a string of even length.
// let a=(str)=>str.length%2==0?str.slice(0,-(str.length/2)):str
// console.log(a("Python"));  
// console.log(a("JavaScript")); 
// console.log(a("PHP"));
//((((((((((((((60))))))))))))))
// Write a JavaScript program to create a new string without the first and last character of a given string.
// let a=(str)=>str.slice(1,-1)
// console.log(a('JavaScript'));
// console.log(a('JS'));
// console.log(a('PHP'));

