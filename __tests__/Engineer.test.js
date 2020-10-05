const Engineer = require('../lib/Engineer')

test("github function", () => {
    const engineer = new Engineer('bob', 1, 'me@me.com', 'coolguy')
    expect(engineer.getGithub()).toBe("coolguy")
})

test("github variable", () => {
    const engineer = new Engineer('bob', 1, 'me@me.com', 'coolguy')
    expect(engineer.github).toBe("coolguy")
})

test("role function", () => {
    const engineer = new Engineer('bob', 1, 'me@me.com', 'coolguy')
    expect(engineer.getRole()).toBe("Engineer")
})




