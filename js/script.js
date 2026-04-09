// console.log("Hello")

// let a= 10
// let b= 20
// let c = a+b

// console.log(c);

// let student = {
//     name: "Ujjawal",
//     age:19
// }

// let jsonData = JSON.stringify(student)

// let obj = JSON.parse(jsonData)
// console.log(obj.name);

let student = {
    name : "Ujjawal",
    age:22,
    course: "CSE"
}

for(let key in student){
    console.log(key + ": "+ student[key]);
}


let numbers = [10,334,343,2,43]
for (let value of numbers){
    console.log(value);
}

