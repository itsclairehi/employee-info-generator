const Employee = require('../lib/Employee')

test("see if jest is working", () => {
    expect(10).toEqual(10)
})

test("creates new employee", () => {
    const employee = new Employee('bob', 352, 'me@me.com');
    expect(employee.name).toEqual('bob')
    expect(employee.id).toEqual(352)
    expect(employee.email).toEqual('me@me.com')
})

test("get employee name", () =>{
    const employee = new Employee('bob', 352, 'me@me.com');

    expect(employee.getName()).toHaveProperty('name')
})

test("get employee id", () =>{
    const employee = new Employee('bob', 352, 'me@me.com');
    
    expect(employee.getId()).toHaveProperty('id')
})

test("get employee email", () =>{
    const employee = new Employee('bob', 352, 'me@me.com');
    
    expect(employee.getEmail()).toHaveProperty('email')
})

test("get employee role", () =>{
    const employee = new Employee('bob', 352, 'me@me.com');
    
    expect(employee.getRole()).toHaveProperty('role')
})