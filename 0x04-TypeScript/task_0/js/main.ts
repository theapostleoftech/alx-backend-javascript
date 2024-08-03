// task_0/js/main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Chu",
    lastName: "Nwa",
    age: 20,
    location: "Nigeria"
  };
  
  const student2: Student = {
    firstName: "Sam",
    lastName: "Onyekwere",
    age: 22,
    location: "Ghana"
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Array<Student> = [student1, student2];
  
  // Function to render the table
  function renderTable(): void {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  // Call the renderTable function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', renderTable);


  // task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // Index signature to allow any additional properties
  }
  