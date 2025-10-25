const getInitials = (firstName, lastName) => { 
    return firstName[0] + lastName[0];
}
//console.log(getInitials("Charlie", "Brown")); // this should console.log "CB"

function getStudentGrade(finalExamPoints, assignmentsPoints) {
  const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100; 
  let grade = "Unknown";
  console.log(percent)
  if (percent >= 90) {
    grade = "A";
    console.log(grade)
  }
  if (percent >= 80) {
    grade =  "B";
    console.log(grade)
  } 
  else if (percent >= 70) {
    grade =  "C";
    console.log(grade)
  } 
  if (percent >= 60) {
    grade =  "D";
    console.log(grade)
  } 
  if (percent < 60) {
    grade =  "F";
    console.log(grade)
  }
  return grade;
}
//console.log(getStudentGrade(70, 180)); // this should console.log "

/****************************** Challenge 5 ******************************/
const randomValue = (min, max) => { 
  const val = (Math.random() * (max-min)) + min;
  return val;
};
//console.log(randomValue(2,6)) // should return a random numeric value between 2 and 6.

//console.log(["apple", "banana", "cherry", "grape"][2])
console.log(Math.random()*10 +1)