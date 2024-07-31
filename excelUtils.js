const ExcelJS = require('exceljs');
const path = require('path');

const excelFilePath = path.join(__dirname, 'courses.xlsx');

// Initialize workbook and worksheet
async function initializeWorkbook() {
  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.readFile(excelFilePath);
  } catch (error) {
    // If the file does not exist, create a new one
    const worksheet = workbook.addWorksheet('Courses');
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Start Time', key: 'startTime', width: 10 },
      { header: 'End Time', key: 'endTime', width: 10 },
      { header: 'Available Seats', key: 'availableSeats', width: 15 },
      { header: 'Floor', key: 'floor', width: 10 },
      { header: 'Hall', key: 'hall', width: 10 },
      { header: 'Instructor', key: 'instructor', width: 30 },
      { header: 'Description', key: 'description', width: 50 },
    ];
    await workbook.xlsx.writeFile(excelFilePath);
  }
  return workbook;
}

// Read courses from Excel file
async function readCoursesFromExcel() {
  const workbook = await initializeWorkbook();
  const worksheet = workbook.getWorksheet('Courses');
  const courses = [];
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (rowNumber > 1) { // Skip header row
      courses.push({
        id: row.getCell(1).value,
        name: row.getCell(2).value,
        date: row.getCell(3).value,
        startTime: row.getCell(4).value,
        endTime: row.getCell(5).value,
        availableSeats: row.getCell(6).value,
        floor: row.getCell(7).value,
        hall: row.getCell(8).value,
        instructor: row.getCell(9).value,
        description: row.getCell(10).value,
      });
    }
  });
  return courses;
}

// Write courses to Excel file
async function writeCoursesToExcel(courses) {
  const workbook = await initializeWorkbook();
  const worksheet = workbook.getWorksheet('Courses');
  
  // Clear existing data (except headers)
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (rowNumber > 1) {
      worksheet.spliceRows(rowNumber, 1);
    }
  });

  // Write new data
  courses.forEach((course, index) => {
    const rowIndex = index + 2; // Start from 2nd row (1-based index)
    const row = worksheet.getRow(rowIndex);
    row.getCell(1).value = course.id;
    row.getCell(2).value = course.name;
    row.getCell(3).value = course.date;
    row.getCell(4).value = course.startTime;
    row.getCell(5).value = course.endTime;
    row.getCell(6).value = course.availableSeats;
    row.getCell(7).value = course.floor;
    row.getCell(8).value = course.hall;
    row.getCell(9).value = course.instructor;
    row.getCell(10).value = course.description;
    row.commit();
  });

  await workbook.xlsx.writeFile(excelFilePath);
}

module.exports = { initializeWorkbook, readCoursesFromExcel, writeCoursesToExcel };
