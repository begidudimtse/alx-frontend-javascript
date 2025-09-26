// Define the Student interface
interface Teacher {
  readonly firstName: string;        // only set when initializing
  readonly lastName: string;         // only set when initializing
  fullTimeEmployee: boolean;         // always defined
  yearsOfExperience?: number;        // optional
  location: string;                  // always defined
  [key: string]: any;                // allows extra properties dynamically
}

// Create two students
const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher1)
interface Director extends Teacher {
  numberOfReports: number; 
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//Define the function interface (all lowercase as required)

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration (not arrow function)
// Using destructuring in the parameters
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

