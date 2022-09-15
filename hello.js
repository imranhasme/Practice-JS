var bananaPrice = 12;
 console.log(bananaPrice);
 var seenAfter = 21;
console.log(typeof seenAfter)
var SirName = 'TeacherHighSchool JamsheedMojumdar';
 console.log(typeof SirName)
 var isHot = true;
var isCool = false;
 console.log(typeof isCool)




// lowerCase, upper case and toString--------------

 var promise = "I will do HARD work, i will be success";
 console.log(promise.toUpperCase())


 var promise = "I will do hard work  22, i WILL be  success 1 day";
 console.log(promise.toString())



// when use indexof----------------------
 var promise = "I will do hard work , i WILL be  success one day";
 console.log(promise.indexOf('one'))








// variable name call types//
var myName = 'Bongo';
myName = 'other name can i declear in it- Bondhu';
myName = 'Sheikh';
myName = 'Mojibur';
myName = 'Rahman';




// i can in call any letter to String [indexof('it is that!')]//

 var promise = "I am the person, Who never success in any exam  ";
 console.log(promise.indexOf('in'));


//split------------------------
// when we write a word same we will find the call of letter ! but when we are write not same ! then result will -1
var promise = "I am the person, Who never success in any exam ";
console.log(promise.indexOf('In'));






//split is use for space---------------
var promise = "how are you Imran? I am fine also."
console.log(promise.split(' '))




 //uses of parsefloat------------------
 var number1 = 25;
 var number2 = '15.5';
 // console.log(number1+number2)
// //result is 2515.5 it is wrong . because 25 is number and 15.5 is string.........change the string to number use it {parsefloat}
 number2 = parseInt(number2)
 console.log(number1+number2)
//result is 40.5





 //---------shortcut
 //when we use  [+] it will be play as number!
 var number1 = 25;
 var number2 = '15.5';

 number2 = +number2;
console.log(number1+number2)








 //number to string---------------
 var number1 = 25;
 var number2 = 15.5;
 number1 = ''+number1;
 console.log(typeof number1)
// //number1 is a string!




//number use tofixed----------------
var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(5)
console.log(total)


