// Define Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract?: boolean;
}

// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define printTeacherFunction type (preferred for function types)
type printTeacherFunction = (firstName: string, lastName: string) => string;

// Implement printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Create a Teacher instance
const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log("Teacher:", teacher);

// Create a Director instance
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Director:", director1);

// Use printTeacher
console.log(
  "Printed Teacher:",
  printTeacher(teacher.firstName, teacher.lastName)
);

// Render to the DOM
const app = document.createElement("div");
app.innerHTML = `
  <h2>Teacher Info</h2>
  <ul>
    <li><strong>Name:</strong> ${teacher.firstName} ${teacher.lastName}</li>
    <li><strong>Location:</strong> ${teacher.location}</li>
    <li><strong>Full Time:</strong> ${
      teacher.fullTimeEmployee ? "Yes" : "No"
    }</li>
    <li><strong>Contract:</strong> ${teacher.contract ? "Yes" : "No"}</li>
  </ul>

  <h2>Director Info</h2>
  <ul>
    <li><strong>Name:</strong> ${director1.firstName} ${director1.lastName}</li>
    <li><strong>Location:</strong> ${director1.location}</li>
    <li><strong>Full Time:</strong> ${
      director1.fullTimeEmployee ? "Yes" : "No"
    }</li>
    <li><strong>Number of Reports:</strong> ${director1.numberOfReports}</li>
  </ul>

  <h2>Formatted Teacher Name</h2>
  <p>${printTeacher(teacher.firstName, teacher.lastName)}</p>
`;

document.body.appendChild(app);
