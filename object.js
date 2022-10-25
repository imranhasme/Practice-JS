

var student = { id:121, phone:1528, name:"Abir"}
var student2 = { id:142, phone:1646, name:"mahi"}
/**
simple way to call any object element-----------------
 

var phoneNo = student.phone;


*/
var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];
//update phone number-----------
student2.phone = 548724;
console.log(phoneNo1);
console.log(student2);



