/*
<<<<<<< HEAD
let age1 = 25;
let age2 = 30;
let age3 = 35;

let ages = [25,30,35]
console.log(ages)
console.log(ages[1]);

//แทนที่ค่าใน array
ages = [40,45,50]
console.log(ages);

//ต่อ array
ages.push(55);
console.log(ages);

//ค่าความางของ array
console.log(ages.length);

//ลบสมาชิกตัวสุดท้ายของ array
ages.pop();
console.log(ages);

//เช็คว่ามีข้อมูลใน array มั้ย
if (ages.includes(45)) {
    console.log("45 is in array"); }

//จัดเรียงข้อมูล มากไปน้อย
let numbers = [90,60,80,40,50];
numbers.sort();
console.log(numbers);

let names = ["Michael","Josh","Rafael"];
names.push("Shingen");
console.log(names);
console.log(names.length);

for (let i = 0; i < names.length; i++;) {
    console.log(names[i]); }


let student = [{
    age: 20,
    name: "Shaq",
    grade: "F"
},{
    age: 22,
    name: "Kobe",
    grade: "A"
}];

for (let i = 0; i < student.length; i++;) {
    console.log("Student " + (i + 1) + ":")
    console.log("Name: " + student[i].name)
    console.log("Age: " + stdent[i].age)
    console.log("Grade: " + student[i].grade)
}

student.push({
    age: 20,
    name: Parinya,
    grade: "F"
});

console.log(student);
console.log(student.name);


function calculate_grade(score) {
    if (score >= 80) {
        return 'A'; }
    else if (score >= 70) {
        return 'B'; }
    else if (score >= 60) {
        return 'C'; }
    else if (score >= 50) {
        return 'D'; }
    else {
        return 'F'; }
}

let student_score = 84;
let student_grade = calculate_grade(student_score);
console.log("Student grade is: " + student_grade);


let score = [10,20,30,40,50];

for (let i = 0; i < score.length; i++) {
    console.log(`Score at index ${i} is ${score[i]}`); }

score.forEach((s) => {
    console.log(`score`,s)
})
score = score.map((s) => {
    return s * 2
})

score.forEach((s) => {
    console.log('new score',s)
})


let score = [10,20,30,40,50];

let newscore = []

for (let index = 0; index < score.lengthl; index++) {
    console.log('score',score[index])
    if (score[index] >= 30)
        newscore.push(score[index])
}

let newScore = score.filter((s) => {
    if (s >= 30) {
        return true
    } else {
        return false
    }
})

console.log('new score :',newscore)

newscore.forEach((ns) => {
    console.log('new score: ',ns)
})
*/

let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '40',
        grade: 'B'

    }
]

console.log("student :",students[0])

let student = students.find((s) => {
    if (s.name == 'bb') {
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})
console.log("student:",student)

console.log(doublescore_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 110) {
        return true
    }
})

console.log("highscore_student",highScore_student)
=======
let firstname = "John";
let age = 30;
let height = 1.78;
const PI = 3.14;

console.log("firstname",firstname);
console.log("age",age);
console.log("height",height);

let number1 = 10;
let number2 = 3;
let result1 = number1 + number2;
console.log("ผลบวก =",result1);


let number1 = 10;
let number2 = 20;
let condition = number1 < number2;
console.log("condition",condition);


let score = prompt;
if (score >= 80) {
    console.log("Grade A"); }
else if (score >= 70) {
    console.log("Grade B"); }
else if (score >= 60) {
    console.log("Grade C"); }
else if (score >= 50) {
    console.log("Grade D"); }
else {
    console.log("Grade F"); }
*/

let counter = 0;
while (counter <= 4) {
    counter += 1;
    console.log("while:",counter);
}
for (let i = 1; i <= 5; i += 1) {
    console.log("for:",i);
}
>>>>>>> 46022a83c0ce4b9d0d271ae102e3e7f3e4fb3433
