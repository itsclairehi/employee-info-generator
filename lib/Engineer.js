const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, role)

        this.github = github
        this.role = role
    }
    getGithub() {
        return this.github
        // return {
        //     github: this.github
        // }
    }
    getRole() {
        return "Engineer"
        // return {
        //     role: "Engineer"
        // }
    }
}






module.exports = Engineer