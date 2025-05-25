// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher Class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create employee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function for Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Test data
const employees = [
  { salary: 200, label: "Employee 1 (Salary: 200)" },
  { salary: 1000, label: "Employee 2 (Salary: 1000)" },
  { salary: "$500", label: "Employee 3 (Salary: '$500')" },
];

// Console output: show created employee objects
employees.forEach(({ salary, label }) => {
  const employee = createEmployee(salary);
  console.log(label, employee);
});

// DOM output
const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
    <h1>Employee Role Demonstration</h1>
    <ul>
      ${employees
        .map(({ salary, label }) => {
          const emp = createEmployee(salary);
          const role = isDirector(emp)
            ? emp.workDirectorTasks()
            : emp.workTeacherTasks();

          return `<li><strong>${label}</strong>: ${role}</li>`;
        })
        .join("")}
    </ul>
  `;
}
