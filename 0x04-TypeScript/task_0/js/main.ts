interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Kampala',
};

const student2: Student = {
  firstName: 'Paul',
  lastName: 'Brown',
  age: 25,
  location: 'Monrovia',
};

const studentList: Student[] = [student1, student2];
const tableElement = document.createElement('table');

const renderTable = (studentList: Student[]) => {
  const tbody = document.createElement('tbody');
  studentList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
    tableElement.appendChild(tbody);
    document.body.appendChild(tableElement);
  });
};

renderTable(studentList);
