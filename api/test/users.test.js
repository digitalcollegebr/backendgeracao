const Api = require('./Api')

test('Users testing', async () => {
    // Configuration testing users
    const response = await Api.post('users', {
        email: "jest@jest.com",
		username: "Jest",
		password: "123123"
    });
    
    expect(response.data.message).toBe("Usuário cadastrado com sucesso")
});