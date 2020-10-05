const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");


//filter employeeArr by job

// const generateManager =employeeArr => {
//   let manager = employeeArr[0];

//   return `
//   <h1>Manager</h1>
//   <p>${manager.name}</p>`
  
  
// } 

function generateManager(){
  function manager(person){
    return person.getRole()==="Manager"
  }
 const managers = employeeArr.filter(manager)
}


//engineers
function generateEngineer(employeeArr) {
  function engineer(person){
    return person.getRole()==="Engineer"
  }
 const engineers = employeeArr.filter(engineer)

 for (let i = 0; i < engineers.length; i++) {
   let current = engineers[i]
   return `
  
   <div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${current.name}</h5>
     <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
     <p class="card-text">ID: ${current.id}</p>
     <p class="card-text">Email: ${current.email}</p>
     <p class="card-text">github: ${current.github}</p>
     
   </div>
 </div>

   `
   
 }

 
}
//interns
function generateInterns(){
  function intern(person){
    return person.getRole()==="Intern"
  }
 const interns = employeeArr.filter(intern)
}





 
 function test(employeeArr){
  //  console.log("HELLO????", employeeArr[1].getRole());
   
   return `
   
   ${generateEngineer(employeeArr)}`
 }
 

 
 

 
 
 

 module.exports =  test