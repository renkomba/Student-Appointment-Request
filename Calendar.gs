var calendar = {id: 'Calendar Name'};

calendar.self = CalendarApp.getCalendarById(calendar.id);
calendar.timeZone = calendar.self.getTimeZone()

/**
 * Find (max) 10 upcoming appointments that have 'permanence' in the title,
 * and do not pre-date the current date
 */
function getComingAppointments() {
  return Calendar.Events.list(calendar.id, {
    q: 'permanence',
    timeMin: Utilities.formatDate(new Date(), calendar.timeZone, "yyyy-MM-dd'T'HH:mm:ss'Z'")
  });
}

// get appointment month/day, year, and time
function splitDateAndTime(dateTime=String) {
  let [date, time] = dateTime.split('T');
  let [year, month, day] = date.split('-');

  time = time.slice(0, 5);
  if (day[0] === '0') day = day[1];
  let monthDay = `${month}/${day}`;

  return [monthDay, year, time];
}
