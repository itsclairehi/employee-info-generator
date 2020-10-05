const Manager = require('../lib/Manager')

test("office number", ()=>{
const manager = new Manager('bob', 1, 'me@me.com', 2)

expect(manager.officeNumber).toEqual(2)

}) 

test("manager role", ()=>{
    const manager = new Manager('bob', 1, 'me@me.com', 2)
    
    expect(manager.getRole()).toBe('Manager')
    
    }) 

