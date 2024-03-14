var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
};
/* const employee1 = createEmployee(400); // Creating a Teacher instance
const employee2 = createEmployee(1000); // Creating a Director instance
 */
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
/*
console.log(employee2.workFromHome()); // Output: Working from home
console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks
 */
