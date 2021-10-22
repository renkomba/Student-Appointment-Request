function pullSheet() {
  var students = createReservationInfo();
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let studentRequestInfo = [
      student.teacher,
      student.room,
      student.lastName,
      student.firstName,
      student.id,
      student.subject,
      student.period,
      student.contact,
      student.requestedDate
    ];
    
    getUpcomingSheet(student.requestedDate);
    setRequestInTestSheet(studentRequestInfo);
  }
}
