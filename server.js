const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startCLI();
});

const startCLI = () => {

return inquirer
    .prompt([{
        type: 'list',
        name: 'homescreen',
        message: 'What would you like to do?',
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee's Role"
                ],
            default: 2
    }]).then(choice => {
        if (choice.homescreen === "View all Departments") {
            console.log('1');
        }
        if (choice.homescreen === "View all Roles") {
            console.log('2');
        }
        if (choice.homescreen === "View all Employees") {
            db.query(
                `SELECT first_name, last_name FROM employee;`,
                function(err, results, fields) {
                    console.table(results);
                }
            );
        }
        if (choice.homescreen === "Add a Department") {
            console.log('4');
        }
        if (choice.homescreen === "Add a Roles") {
            console.log('5');
        }
        if (choice.homescreen === "Add an Employee") {
            console.log('6');
        }
        if (choice.homescreen === "Update an Employee's Role") {
            console.log('7');
        }
    });
}
