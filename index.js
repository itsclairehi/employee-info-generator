const inquirer = require('inquirer')
const Employee = require('./lib/Employee');


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

        //end manager section


    ]
    )
    .then(answers =>{
        //push answers into employee data array
        
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
    name: 'engineerName',
    message: "engineer's name: ",
   
},
{
    type: 'input',
    name: 'engineerId',
    message: "engineer's id: ",
    
},
{
    type: 'input',
    name: 'engineerEmail',
    message: "engineer's email: ",
   
},
{
    type: 'input',
    name: 'engineerGit',
    message: "engineer's GitHub username: ",
   
},
        
    ])  
    .then(answers =>{
        //push answers into employee data array

        menu()
    })
}


function addIntern() {
       //intern section
       inquirer.prompt([
       {
        type: 'input',
        name: 'internName',
        message: "intern's name:",
        // when: ({ nextStep }) => {
        //     if (nextStep === "add intern") {

        //         return true
        //     } else {
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        name: 'internId',
        message: "intern's ID:",
        // when: ({ nextStep }) => {
        //     if (nextStep === "add intern") {

        //         return true
        //     } else {
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "intern's email:",
        // when: ({ nextStep }) => {
        //     if (nextStep === "add intern") {

        //         return true
        //     } else {
        //         return false
        //     }
        // }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "intern's school:",
        // when: ({ nextStep }) => {
        //     if (nextStep === "add intern") {

        //         return true
        //     } else {
        //         return false
        //     }
        // }
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
        // when: ({ nextStep }) => {
        //     if (nextStep === "add intern") {

        //         return true
        //     } else {
        //         return false
        //     }
        // }
    },
])
.then(answers =>{
    //push answers into employee data array
    
    menu()
})
}

function finishText() {
 // done section
 console.log("you're done!");
 
 //writes file
}


addManager()