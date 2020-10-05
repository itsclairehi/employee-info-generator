const inquirer = require('inquirer')
const fs = require('fs');

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');

// employeeObj={
//     manager: [],
//     engineers: [],
//     interns: []
// }

employeeObj = []





const addManager = () => {
    inquirer.prompt([
        //manager section
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's id? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is your team manager's office number? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
    ]
    )
        .then((answers) => {
            //is this what they want us to do?
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
            
            console.log(manager);
            employeeObj.push(manager)
            //this syntax works too
            // employeeObj.manager.push(answers)
            
            
            

            menu()
        })

}

function menu() {
    //menu
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextStep',
            message: "how would you like to proceed?",
            choices: ["addEngineer", "addIntern", "finish"]
        },
    ])
        .then(userChoice => {
            switch (userChoice.nextStep) {
                case "addEngineer":
                    addEngineer()
                    break;

                case "addIntern":
                    addIntern()
                    break;

                default:
                    finishText()
            }
        })
}


function addEngineer() {

    inquirer.prompt([

        //engineer section
        {
            type: 'input',
            name: 'name',
            message: "engineer's name: ",

        },
        {
            type: 'input',
            name: 'id',
            message: "engineer's id: ",

        },
        {
            type: 'input',
            name: 'email',
            message: "engineer's email: ",

        },
        {
            type: 'input',
            name: 'github',
            message: "engineer's GitHub username: ",

        },

    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeeObj.push(engineer)
            // employeeObj.engineers.push(answers)

            menu()
        })
}


function addIntern() {
    //intern section
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "intern's name:",

        },
        {
            type: 'input',
            name: 'id',
            message: "intern's ID:",

        },
        {
            type: 'input',
            name: 'email',
            message: "intern's email:",

        },
        {
            type: 'input',
            name: 'school',
            message: "intern's school:",
        },
        
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            console.log("LOOK"+JSON.stringify(intern.getRole()));
             
            employeeObj.push(intern)
            // employeeObj.interns.push(answers)

            menu()
        })
}

function finishText() {
    // done section
    console.log("you're done!");
    // console.log("employee array " + JSON.stringify(employeeObj));
    console.log(employeeObj);
    // console.log(employeeObj.manager);


    //writes file


}

//writes file using fs
function writeToFile(data) {

    fs.writeFile(`./dist/index.html`, data, err => {
        if (err) {
            console.log(err)
        }
        console.log("success!");

    })
}




addManager()



// writeToFile("hello")
// .then((data)=>{
// writeToFile(data)
// })
// .catch(err => {
//     console.log(err);
//   });

module.exports = employeeObj