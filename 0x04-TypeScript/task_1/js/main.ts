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

