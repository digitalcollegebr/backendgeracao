test('Server Test Runing', async () => {
    const response = await fetch('http://localhost:3000/')
    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toBe("Olá, eu sou um Backend com NodeJS + Express")
});