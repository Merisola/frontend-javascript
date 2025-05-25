interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract?: boolean;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher);

// Render to the DOM
const app = document.createElement("div");
app.innerHTML = `
    <h1>Hello, ${teacher.firstName} ${teacher.lastName}!</h1>
    <p>Location: ${teacher.location}</p>
    <p>Full Time: ${teacher.fullTimeEmployee ? "Yes" : "No"}</p>
    <p>Contract: ${teacher.contract ? "Yes" : "No"}</p>
  `;

document.body.appendChild(app);
