//const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
initialEyes();

function initialEyes() {
    console.clear();
const initPrompt = [{
    type: "list",
    message:"Would you like to add a team member?",
    choices: ["Yes", "No"],
    name: "initiate"
}];

const rolePromt = [{
    type: "list",
    message: "Select team member's role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"
}];

inquirer.prompt(initPrompt).then(function(resp){
    
    if(resp.initiate === initPrompt[0].choices[1]){
       console.clear();
       console.log("App has been exited");
    }else{
        inquirer.prompt(rolePromt).then(function(rsp) {
            console.log(rsp.role)
            console.clear();
            employeeData(rsp.role);
        }).catch(err=> {
            console.log(err)
        })
         
    }
       
}).catch(err => {
    console.log(err);
});
};

function employeeData(role){
    if(role === "Manager"){
        var managerInput = [{
            type: "input",
            message: "Manager's name?",
            name: "name"
        },{
            type: "input",
            message: "Manager's ID?",
            name: "id"
        },{
            type: "list",
            message: "Hit enter please",
            choices: ["Manager"],
            name: "role"
        },
        {
            type: "input",
            message: "What's the Manager's email?",
            name: "email"
        },{
            type: "input",
            message: "Manager's office number?",
            name: "officeNumber"
        }
    ];
    inquirer.prompt(managerInput).then(function(managerData){
        console.log(managerData);
        initialEyes();
    });

    }
    if(role === "Engineer"){
        var engineerInput = [{
            type: "input",
            message: "Engineer's name?",
            name: "name"
        },{
            type: "input",
            message: "Engineer's ID?",
            name: "id"
        },{
            type: "input",
            message: "What's the Engineer's email?",
            name: "email"
        },{
            type: "input",
            message: "Engineer's github username?",
            name: "githubUsername"
        }
    ];
    inquirer.prompt(engineerInput).then(function(engineerData){
        console.log('data is',engineerData);
        let endineer = new Engineer(engineerData.name, engineerData.id,engineerData.email,role, engineerData.githubUsername);
        console.log('class is ', endineer);
        //initialEyes();
    }).catch(err=>{console.log(err)});


    }
    if(role === "Intern"){
        var internInput = [{
            type: "input",
            message: "Intern's name?",
            name: "name"
        },{
            type: "input",
            message: "Intern's ID?",
            name: "id"
        },{
            type: "list",
            message: "Hit enter please",
            choices: ["Intern"],
            name: "role"
        },{
            type: "input",
            message: "What's the Intern's email?",
            name: "email"
        },{
            type: "input",
            message: "Name of the Intern's school?",
            name: "school"
        }
    ];
    inquirer.prompt(internInput).then(function(internData){
        console.log(internData);
        initialEyes();
    });
    }
};











// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
