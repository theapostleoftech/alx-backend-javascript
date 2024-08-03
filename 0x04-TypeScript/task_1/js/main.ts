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
  

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}
