class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
        // return {
        //     name: this.name
        // }
    }
    getId() {
        return this.id
        // return {
        //     id: this.id
        // }
    }
    getEmail() {
        return this.email
        // return {
        //     email: this.email
        // }
    }
    getRole() {
        return "Employee"
        // return {
        //     role: "Employee"
        // }
    }
}

module.exports = Employee