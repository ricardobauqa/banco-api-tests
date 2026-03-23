
const obterToken = async (usuario, senha) => {
    const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({ username: usuario, password: senha })
            })
        
            return token = response.body.token;