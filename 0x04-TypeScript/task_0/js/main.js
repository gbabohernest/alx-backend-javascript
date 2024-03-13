var student1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Kampala',
};
var student2 = {
    firstName: 'Paul',
    lastName: 'Brown',
    age: 25,
    location: 'Monrovia',
};
var studentList = [student1, student2];
var tableElement = document.createElement('table');
var renderTable = function (studentList) {
    var tbody = document.createElement('tbody');
    studentList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tbody.appendChild(row);
        tableElement.appendChild(tbody);
        document.body.appendChild(tableElement);
    });
};
renderTable(studentList);
