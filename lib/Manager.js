const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
        // return{
        //     role: 'Manager'
        // }
    }

} 

module.exports = Manager