var interventionSheetURL = 'https://docs.google.com/spreadsheets/d/1AqjqdiX_8gC8HrqAGOGFyC7OepjuhGJwwYZuu-MWPcI/edit#gid=270695029';
var testSheetURL = 'https://docs.google.com/spreadsheets/d/1K-q_ezftfoZ4P83Yvat46tBV7-tieaMO1DJbDgYKt3U/edit#gid=382370341';

var test = SpreadsheetApp.openByUrl(testSheetURL);
var ss = SpreadsheetApp.openByUrl(interventionSheetURL);

var sheets = ss.getSheets();
var testSheet = test.getSheetByName('Requests');

var lastRowWithData = testSheet.getRange(1, 1).getDataRegion().getValues().length;
// var interventionSheet = SpreadsheetApp

// Find the correct worksheet by date
function getUpcomingSheet(monthDay) {
  for (let i = 0; i < sheets.length; i++) {
    let sheet = sheets[i];
    // console.log(sheet.getSheetName().slice(2));
    // console.log(monthDay);

    if (sheet.getSheetName().slice(2).startsWith(monthDay)) {
      // console.log(sheet.getSheetValues(3, 2, 200, 9));
      return sheet;
    }
  }
}

function setRequestInTestSheet(student) {
  let [column, period, formattedDate] = [1, student[6], new Date(student[8])];
  let pastRequests = testSheet.getRange(1, 1).getDataRegion().getValues();
  // console.log(pastRequests);

  date = Utilities.formatDate(formattedDate, calendar.timeZone, 'MMMM d').toString();
  date = date.slice(-3).startsWith('0') ? date.splice(-3) : date;
  student[8] = date;
  console.log(`Student: ${student}`);

  for (lastRowWithData; lastRowWithData < testSheet.getMaxRows(); lastRowWithData++) {
    let oldRequestTeacher = testSheet.getRange(lastRowWithData, column).getValue();
    if (oldRequestTeacher.length > 1) continue;
    break;
  }

  // If this was a student request, add it to the sheet
  if (parseInt(period) && !pastRequests.includes(student.id)) {
    testSheet.getRange(lastRowWithData, column, 1, student.length).setValues([student]);
  }
}
