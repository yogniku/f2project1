/** @format */
 let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(`Name: ${arr.name}, Marks: ${arr.marks}`);
    }
  });
}
function PrintStudentbyForEach() {
  students.forEach(student => {
    if (student.marks > 50) {
      console.log(`${student.name} scored ${student.marks} marks.`);
    }
  });
}

PrintStudentbyForEach();

function addData() {
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  students.push(newStudent);
  console.log("New student added:");
  console.log(newStudent);
}

addData();
console.log("Updated students array:");
console.log(students);


function removeFailedStudent() {
  for (let i = students.length - 1; i >= 0; i--) {
    if (students[i].marks < 50) {
      students.splice(i, 1);
    }
  }
  console.log("Removed students who failed:");
  console.log(students);
  //Write your code here, just console.log
}
removeFailedStudent();
function ConcatenateArray() {
  let additionalStudents = [
    { id: 4, name: "emma", age: "21", marks: 90 },
    { id: 5, name: "alex", age: "19", marks: 75 },
    { id: 6, name: "olivia", age: "22", marks: 60 }
  ];

  const concatenatedArray = [...students, ...additionalStudents];

  console.log("Concatenated array:");
  console.log(concatenatedArray);
}
ConcatenateArray();



  //Write your code here, just console.log

