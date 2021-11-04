const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const { query } = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startCLI();
});

const startCLI = () => {
    // db.query(
    //     `SOURCE db/db.sql`,

    //     function(err, results) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         return 'built db!';
    //     }
    // );


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
            db.query(
                `SELECT * FROM department;`,
                function(err, results, fields) {
                    console.table(results);
                    startCLI();
                }
            );
        }
        if (choice.homescreen === "View all Roles") {
            db.query(
                `SELECT role.id, role.title, role.salary, department.name AS 'department name'
                FROM role
                LEFT JOIN department ON role.department_id = department.id;`,
                function(err, results, fields) {
                    console.table(results);
                    startCLI();
                }
            );;
        }
        if (choice.homescreen === "View all Employees") {
            db.query(
                ` SELECT employee.id, employee.first_name, employee.last_name,
                 role.title, department.name AS department, role.salary,
                 concat(managers.first_name,' ', managers.last_name) AS manager
                 FROM employee
                 LEFT JOIN role ON employee.role_id = role.id
                 LEFT JOIN department ON role.department_id = department.id
                 LEFT JOIN managers ON employee.manager_id = managers.id;`,
                function(err, results, fields) {
                    console.table(results);
                    startCLI();
                }
            );
        }
        if (choice.homescreen === "Add a Department") {
            inquirer
                .prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What would you like to call the department?'
                }]).then(input => {
                    const depName = [input.name];
                    db.query(
                        `INSERT INTO department (name) VALUES (?)`, depName, (err, result) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            startCLI();
                        }
                    )
                })
        }
        if (choice.homescreen === "Add a Role") {
            const question = db.query(
                `SELECT * FROM department;`,
                function(err, results, fields) {
                    //console.log(results);
                    inquirer
                .prompt([{
                    type: 'input',
                    name: 'title',
                    message: 'What would you like to call this role?'
                },{
                    type: 'input',
                    name: 'salary',
                    message: 'What would the salary be?'
                },{
                    type: 'rawlist',
                    name: 'department',
                    message: 'Choose a department for this role.',
                    choices: results,
                    default: 3
                }]).then(selection => {
                    async function getID() {
                        const mysql = require('mysql2/promise');
                        const connection = await mysql.createConnection({host:'localhost', user: 'root', password: 'password', database: 'company'});
                        
                     const id = await connection.execute(`SELECT id FROM department
                        WHERE name = ?`, [selection.department]);
                        const newId = id[0];
                        let result = newId.map(a => a.id);
                        //console.log(result[0]);
                        
                        async function getnewRole() {
                            const mysql = require('mysql2/promise');
                            const connection = await mysql.createConnection({host:'localhost', user: 'root', password: 'password', database: 'company'});
                            
                            const [role] = await connection.execute(
                            `INSERT INTO role (title, salary, department_id)
                             VALUES (?,?,?)`,
                            [selection.title, selection.salary, result[0]]);
                            //console.log(role);
                          };
                        getnewRole();
                      };
                      getID();
                      startCLI();
                });
                });
            
        }
        if (choice.homescreen === "Add an Employee") {
            console.log('6');
        }
        if (choice.homescreen === "Update an Employee's Role") {
            console.log('7');
        }
    });
}
