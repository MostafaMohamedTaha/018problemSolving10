// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
//((((((((((((((((1))))))))))))))))
// let a=2,b=10
// let test=a>b?(b>15?'true':'f'):(a>5?'f':'t')
// console.log(test);
//(((((((((((((((((((test1)))))))))))))))))))
// let today = new Date()
// let day = today.getDay()
// let dayList = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday ',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ]
// console.log('Today is : ' + dayList[day] + '.')
// let hour = today.getHours()
// let minute = today.getMinutes()
// let second = today.getSeconds()
// let prePand = hour >= 12 ? ' PM ' : ' AM '
// hour = hour >= 12 ? hour - 12 : hour
// if (hour === 0 && prePand === ' PM ') {
//   if (minute === 0 && second === 0) {
//     hour = 12
//     prePand = ' Noon'
//   } else {
//     hour = 12
//     prePand = ' PM'
//   }
// }
// if (hour === 0 && prePand === ' AM ') {
//   if (minute === 0 && second === 0) {
//     hour = 12
//     prePand = ' Midnight'
//   } else {
//     hour = 12
//     prePand = ' AM'
//   }
// }
// console.log(
//   'Current Time : ' + hour + prePand + ' : ' + minute + ' : ' + second
// )
// let a=2,b=10
// let test=a>b?(b>15?'true':'f'):(a>5?'f':'t')
// console.log(test);
// ((((((((((((my clean code))))))))))))
// let today=new Date()
// let day=today.getDay()
// let dayList = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday ',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ]
// let minute=today.getMinutes()
// let second=today.getSeconds()
// let hour=today.getHours()
// let prepend=hour>=12?'PM':'Am'
// let dayStart=()=>{hour=12;prepend=''}
// let afternoon=()=>{hour=12;prepend='PM'}
// let midnight=()=>{hour=12;prepend='midnight'}
// let morning=()=>{hour=12;prepend='Am'}
// hour=hour>=12?hour-12:hour
// hour===0&&prepend==='PM'
// ?(minute===0&&second===0?dayStart():afternoon()):''
// hour===0&&prepend==='AM'
// ?(minute===0&&second===0?midnightStart():morning()):''
// console.log(`Today is: ${dayList[day]}.`)
// console.log(`current time : ${hour} ${prepend} :${minute} :${second}`);
//(((((((((((((((((second problem)))))))))))))))))
// Write a JavaScript function to print the contents of the current window.
// let print = () => this.print()
//(((((((((((((((((problem 3)))))))))))))))))
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// var today = new Date()
// var dd = today.getDate()

// var mm = today.getMonth() + 1
// var yyyy = today.getFullYear()
// if (dd < 10) {
//   dd = '0' + dd
// }

// if (mm < 10) {
//   mm = '0' + mm
// }
// today = mm + '-' + dd + '-' + yyyy
// console.log(today)
// today = mm + '/' + dd + '/' + yyyy
// console.log(today)
// today = dd + '-' + mm + '-' + yyyy
// console.log(today)
// today = dd + '/' + mm + '/' + yyyy
// console.log(today)
// ((((((((((((my clean code))))))))))))
// let today=new Date()
// let day=today.getDate()
// let month=today.getMonth()+1
// let year=today.getFullYear()
// let dayM=day<10?`0${day}`:day
// let monthM=month<10?`0${month}`:month
// console.log(`${dayM} - ${monthM} - ${year}`);
// console.log(`${dayM} / ${monthM} / ${year}`);
// console.log(`${monthM} - ${dayM} - ${year}`);
// console.log(`${monthM} / ${dayM} / ${year}`);
//(((((((((((((((((problem 4)))))))))))))))))
// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// let a = 5,
//   b = 6,
//   c = 7
// let s = (a + b + c) / 2
// let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)))
// console.log(area)
//(((((((((((((((((problem 5)))))))))))))))))
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// ((((((((((((my clean code))))))))))))
// function animate() {
//     let a=document.getElementById('target')
//     const  b= a.childNodes[0] // assuming no other children
//     let c=b.data

// setInterval(() => {
//     c = c[c.length - 1] + c.substring(0, c.length - 1)
//     b.data=c
// }, 111)
// }

// let b=document.getElementById('target')
// console.log(b.childNodes[0]);
//(((((((((((((((((problem 6)))))))))))))))))
//leap 100 leap ,400,4 no leap
// function leap(year) {
//     return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(leap(2016));
// console.log(leap(2000));
// console.log(leap(1700));
// console.log(leap(1800));
// console.log(leap(100));
//(((((((((((((((((problem 7)))))))))))))))))
// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
// for (let year = 2014; year <= 2050; year++) {
//     const d = new Date(year, 0, 1)
//     if (d.getDay() === 0) console.log(`1st January is being a Sunday  ${year}`)
// }
//(((((((((((((((((problem 8)))))))))))))))))
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
// let num = Math.ceil(Math.random() * 10);
// console.log(num);
// let guess = prompt('Guess the number between 1 and 10 inclusive');
// guess==num?console.log(`good ${guess}=${num}`):console.log(`not match ${guess}`);
//(((((((((((((((((problem 9)))))))))))))))))
// let a=new Date()
// let day=a.getDay()
// let hour=a.getHours()
// let minute=a.getMinutes()
// let second=a.getSeconds()
// let p=hour>=12?'pm':'am'
// let afternoonS=()=>{hour=12,p=''}
// let afternoon=()=>{hour=12,p='pm'}
// let midnightS=()=>{hour=12,p='midnight'}
// let midnight=()=>{hour=12,p='midnight'}
// hour>=12?hour-12:hour
// hour==0&&p==='pm'?
// (minute==0&&second==0?afternoonS():afternoon())
// :hour==0&&p==='pm'?
// (minute==0&&second==0?midnightS():midnight()):''
// console.log(`time now ${hour} ${p} ${minute} ${second}`);
//(((((((((((((((((problem 9)))))))))))))))))
// Write a JavaScript program to calculate number of days left until next Christmas.
// let a = new Date()
// let b = new Date(a.getFullYear(), 11, 25)
// a.getMonth() == 11 && a.getDate() > 25 ? b.setFullYear(b.getFullYear() + 1) : ''
// const one_day = 1000 * 60 * 60 * 24
// console.log(
// `${Math.ceil(
//     (b.getTime() - a.getTime()) / one_day
// )} days left until Christmas!`
// )
// ((((((((((((my clean code))))))))))))
// let now=new Date()
// let nextYear=new Date(now.getFullYear(),11,25)
// now.getMonth()==11 &&now.getDate()>25?nextYear.setFullYear(nextYear.getFullYear()+1):''
// console.log(Math.ceil((nextYear.getTime()-now.getTime())/(24*60*60*1000)));
//(((((((((((((((((problem 9)))))))))))))))))
// let f=document.getElementById('num1')
// let s=document.getElementById('num2')
// let result=document.getElementById('result')
// let multi=()=>result.innerHTML=f.value*s.value
// let divide=()=>result.innerHTML=f.value/s.value
// console.log(f);
//(((((((((((((((((problem 10)))))))))))))))))
