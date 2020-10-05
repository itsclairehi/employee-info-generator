const Employee = require("../lib/Employee");

class Intern extends Employee {
constructor(name, id, email, school){
    super(name, id, email)
    this.school = school
}
getSchool(){
    return this.school
    // return {
    //     school: this.school
    // }
}
getRole() {
    return "Intern"
    // return {
    //     role: "Intern"
    // }
}
}

// const intern = new Intern("bob", 12, "me@me.com", "harvard");
// console.log(intern.getSchool())

module.exports = Intern