const inquirer = require('inquirer')
const Employee = require('./lib/Employee');


const promptUser = () => {
    return inquirer.prompt([
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
            name: 'id',
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
        //menu
        {
            type: 'list',
            name: 'nextStep',
            message: "how would you like to proceed?",
            choices: ["add engineer", "add intern", "finish"]
        },
        //end manager section


        //intern section
        {
            type: 'input',
            name: 'internName',
            message: "intern's name:",
            when: ({ nextStep }) => {
                if (nextStep === "add intern") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "intern's ID:",
            when: ({ nextStep }) => {
                if (nextStep === "add intern") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "intern's email:",
            when: ({ nextStep }) => {
                if (nextStep === "add intern") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "intern's school:",
            when: ({ nextStep }) => {
                if (nextStep === "add intern") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'nextStep',
            message: "how would you like to proceed?",
            choices: ["add engineer", "add intern", "finish"]
        },
        {
        type: 'input',
            name: 'internSchool',
            message: "intern's school:",
            when: ({ nextStep }) => {
                if (nextStep === "add intern") {

                    return true
                } else {
                    return false
                }
            }
        },
        //engineer section
        {
            type: 'input',
            name: 'engineerName',
            message: "engineer's name: ",
            when: ({ nextStep }) => {
                if (nextStep === "add engineer") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "engineer's id: ",
            when: ({ nextStep }) => {
                if (nextStep === "add engineer") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "engineer's email: ",
            when: ({ nextStep }) => {
                if (nextStep === "add engineer") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "engineer's GitHub username: ",
            when: ({ nextStep }) => {
                if (nextStep === "add engineer") {

                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'nextStep',
            message: "how would you like to proceed?",
            choices: ["add engineer", "add intern", "finish"]
        },

        // done section
        {
        type: 'text',
        name: 'done',
        message: "you're done!",
        when: ({nextStep}) => {
            if(nextStep=== "finish") {
                console.log("you're done!");
                
        }
    }
    },



    ]
    )
    
}

const promptEngineer = employeeData => {
    // If there's no 'employee' array property, create one
    // if (!employeeData.employeeArr) {
    //   employeeData.employeeArr = [];
    // }

    return inquirer.prompt([

        
        //end engineer section
    ])
    
    // .then(engineerData => {
    //     employeeData.employeeArr.push(engineerData);
    //     if (engineerData.nextStep=== "add engineer") {
    //       promptEngineer()
    //     } else {
    //       return employeeData;
    //     }
    //   })
}

// promptEngineer()
promptUser()