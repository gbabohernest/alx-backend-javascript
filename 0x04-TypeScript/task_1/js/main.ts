/**
 * *************** TEACHER INTERFACE CODE ********************
 */

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0).toUpperCase();
  return `${initial}. ${lastName}`;
};

// console.log(printTeacher('John', 'Doe'));

/**
 * *************** STUDENT CLASS CODE ********************
 */

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomeWork(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/* const student = new StudentClass('Jane', 'Doe');
console.log(student.workOnHomeWork());
console.log(student.displayName());
 */
