const Api = require('./Api')
const jwt = require('jsonwebtoken')
require('dotenv').config()

test('Authenticate Testing', async () => {
    // Configuration Authenticate
    const response = await Api.post('login', {
        username: 'Max',
        password: '1234'
    });
    expect(response.data.data).toEqual({
        id: 3,
        is_active: 0,
        email: 'max@mail.com',
        username: 'Max',
        password: '81dc9bdb52d04dc20036dbd8313ed055',
        createdAt: '2024-08-05T19:48:54.000Z',
        updatedAt: '2024-08-05T19:48:54.000Z'
    });
    
    const verify = jwt.verify(response.data.token, process.env.APP_KEY_TOKEN);
    expect(verify.username).toBe('Max')
})