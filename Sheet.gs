var interventionSheetURL = 'URL REDACTED';
var testSheetURL = 'URL REDACTED';

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
//   console.log(`Student: ${student}`);

  for (lastRowWithData; lastRowWithData < testSheet.getMaxRows(); lastRowWithData++) {
    let oldRequestTeacher = testSheet.getRange(lastRowWithData, column).getValue();
    if (oldRequestTeacher.length > 1) continue;
    break;
  }

  // If this was a student request (aka email address is numeric), add it to the sheet
  if (parseInt(period) && !pastRequests.includes(student.id)) {  // requires that each day's request is in a separate sheet
    testSheet.getRange(lastRowWithData, column, 1, student.length).setValues([student]);
  }
}
