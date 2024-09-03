let students = ["David", "Sophia", "Michael", "Emily", "Olivia"];

const isStudentName = (allStudents, studentName) => {
  const filterStudentName = allStudents.filter(name => {
    return name.toLowerCase().includes(studentName.toLowerCase());
  });

  filterStudentName.length > 0 ? console.log(`Student ${filterStudentName.join("")} Was found`) : console.log(`Student ${studentName} not found`);
}

isStudentName(students, "David");


