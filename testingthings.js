let associatedStudents = []; 

const teacher = {name: "name", email: "email"}
const studentValues = associatedStudents.map(student => student.dataValues);

studentValues.unshift(teacher)
console.log(studentValues)