const Intern = require('../lib/Intern')

test("create intern", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard', 'intern')
    expect(intern.name).toBe('bob')
    expect(intern.school).toBe('Harvard')
}) 

test("get school", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard', 'intern')
    expect(intern.getSchool()).toBe('Harvard')
}) 

test("get role", ()=>{
    const intern = new Intern('bob', 1, 'me@me.com', 'Harvard')
    expect(intern.getRole()).toBe('Intern')
}) 