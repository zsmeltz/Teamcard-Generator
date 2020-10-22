const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var html = []; 

initialEyes();

function initialEyes() {

const initPrompt = [{
    type: "list",
    message:"Would you like to add a team member?",
    choices: ["Yes", "No"],
    name: "initiate"
}];

const rolePrompt = [{
    type: "list",
    message: "Select team member's role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"
}];

inquirer.prompt(initPrompt).then(function(resp){
    
    if(resp.initiate === initPrompt[0].choices[1]){
       if(html.length > 0){
           let out = render(html);
           fs.writeFile(outputPath, out, function(err){
            if(err) throw err;
            console.log(err);
           });
       };
       console.clear();
       console.log("App has been exited");
    }else{
        inquirer.prompt(rolePrompt).then(function(rsp) {
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
        let managerInfo = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber, role);     
        html.push(managerInfo);
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
        let endineer = new Engineer(engineerData.name, engineerData.id,engineerData.email, engineerData.githubUsername, role);
        html.push(endineer);
        initialEyes();
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
       let internInfo = new Intern(internData.name, internData.id, internData.email, internData.school, role);
       html.push(internInfo);
     
        initialEyes();
    });
    }
};