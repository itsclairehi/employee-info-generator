const Intern = require('../lib/Intern')

test("school", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard', 'intern')
    expect(intern.school).toBe('Harvard')
}) 

test("get school", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard', 'intern')
    expect(intern.getSchool()).toHaveProperty('school')
}) 

test("get role", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard', 'intern')
    expect(intern.getRole()).toHaveProperty('role')
}) 