const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");


//filter employeeArr by job

//manager in case code needs to be updated to include more than 1
function generateManager(){
  const manager = employeeArr.filter(employee => employee.getRole() === "Manager")
 .map(manager =>{
   return `<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${manager.name}</h5>
     <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
     <p class="card-text">ID: ${manager.id}</p>
     <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
     <p class="card-text">Office Number: ${manager.officeNumber}</p>
     
   </div>
 </div>`
 }).join('')
 
 return manager;
}


//engineers
function generateEngineers(employeeArr) {
  
 const engineer = employeeArr.filter(employee => employee.getRole() === "Engineer")
 .map(engineer =>{
   return `<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${engineer.name}</h5>
     <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
     <p class="card-text">ID: ${engineer.id}</p>
     <p class="card-text">Email: 
     <a href="mailto:${engineer.email}">${engineer.email}</a>
     </p>
     <p class="card-text">github: 
     <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
     </p>
     
   </div>
 </div>`
 }).join('')
 
 return engineer;

}


//interns
function generateInterns(){
  const intern = employeeArr.filter(employee => employee.getRole() === "Intern")
  .map(intern =>{
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">ID: ${intern.id}</p>
      <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="card-text">School: ${intern.school}</p>
      
    </div>
  </div>`
  }).join('')
  
  return intern;
}


//return all html to writeToFile function
 function renderPage(employeeArr){
 
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel = "stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <header>
    <h1>My Team</h1>
    </header>
   
    <div class="container">
    <div class="row">
                 
    ${generateManager(employeeArr)}
    ${generateEngineers(employeeArr)}
    ${generateInterns(employeeArr)}

    </div>
    </div> 
    
</body>
</html>
   
   `
 }
 
 module.exports =  renderPage