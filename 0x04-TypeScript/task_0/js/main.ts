interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Meron",
  lastName: "Solomon",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Daniel",
  lastName: "Tsegay",
  age: 24,
  location: "Mekelle",
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");
const headerRow = table.insertRow();

const nameHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";

const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  nameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
