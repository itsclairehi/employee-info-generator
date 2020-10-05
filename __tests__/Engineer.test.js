const Engineer = require('../lib/Engineer')

test("github function", () => {
    const engineer = new Engineer
    expect(engineer.getGithub()).toHaveProperty("github")
})

test("github variable", () => {
    const engineer = new Engineer('bob', 1, 'me@me.com', 'coolguy', 'Engineer' )
    expect(engineer.github).toBe("coolguy")
})

test("role function", () => {
    const engineer = new Engineer
    expect(engineer.getRole()).toHaveProperty("role")
})

test("role property", () => {
    const engineer = new Engineer('bob', 1, 'me@me.com', 'coolguy', 'Engineer')
    expect(engineer.role).toBe("Engineer")
})


