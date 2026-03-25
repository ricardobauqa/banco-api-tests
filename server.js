const express = require('express');
const app = express();

app.use(express.json());

// Rota de transference
app.post('/transferencias', (req, res) => {
    const { contaOrigem, contaDestino, valor, token } = req.body;
    // Simulação simples de transferência
    if (!contaOrigem || !contaDestino || !valor || !token) {
        return res.status(422).json({ message: 'Dados obrigatórios faltando' });
    }
    // Verificação simples de token
    if (token !== 'fake-jwt-token-123456') {
        return res.status(401).json({ message: 'Token inválido' });
    }
    // Sucesso
    return res.status(201).json({
        message: 'Transferência realizada com sucesso',
        transferencia: {
            contaOrigem,
            contaDestino,
            valor
        }
    });
});

app.post('/login', (req, res) => {
    console.log('Received body:', req.body);
    const { username, password } = req.body;

    if (username === 'julio.lima' && password === '123456') {
        return res.status(200).json('fake-jwt-token-123456');
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
