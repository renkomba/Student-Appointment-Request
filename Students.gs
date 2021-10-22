// Student ids for each class period. Fake ids here to protect student information.
const period = {
  2: ['1234567', '2345678', '3456789', '4567890', '5678901', '6789012'],
  3: ['7890123', '8901234', '9012345', '0123456', '7654321', '6543210'],
  5: ['5432109', '4321098', '3210987', '2109876', '1098765', '0987654'],
  6: ['9876543', '8765432', '1357902', '2468013', '3579024', '4680135']
}

// Create object with info that applies to all students
function createStudentObject() {
  return student = {
  contact: 'Yes',
  room: '###',
  subject: 'World Languages',
  teacher: 'My Last Name'
  }
}

// Extract appointment date & student name/ID from calendar appointment
function createReservationInfo() {
  let [events, students] = [getComingAppointments(), []];

  if (events.items && events.items.length > 0) {
    for (let i = 0; i < events.items.length; i++) {
      let [event, student] = [events.items[i], createStudentObject()];
      let guest = event.attendees.map( e => e.displayName ? '' : e.email ).filter( e => e )[0];
      let [monthDay, year, time] = splitDateAndTime(event.start.dateTime.toString());

      [student.firstName, student.lastName] = getStudentName(event.summary);
      student.id = guest ? guest.split('@') : 'teacher override';
      [student.period, student.requestedDate] = [getClassPeriod(student.id), monthDay];
      students.push(student);
    }
  }
  return students;
}

// Find which class period the student is in
function getClassPeriod(studentId) {
  let classPeriods = Object.entries(period);

  for (let i = 0; i < classPeriods.length; i++) {
    let [period, studentIds] = [classPeriods[i][0], classPeriods[i][1]];
    if (studentIds.includes(studentId)) return period;
  }
}

// Strip "Heure de Permanence ()" from around the student's name
function getStudentName(appointmentTitle) {
  let fullName = appointmentTitle.slice(21, -1);
  return fullName.split(' ');
}
