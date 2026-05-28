# Banco API Tests

Projeto de automação de testes para API REST utilizando JavaScript, Mocha, Supertest e Chai.

## 📌 Objetivo

Este projeto tem como objetivo validar o comportamento da API REST do projeto Banco API, garantindo a integridade dos endpoints, regras de negócio, contratos de resposta e códigos HTTP esperados através de testes automatizados.

API testada:

* Repositório da API:
  https://github.com/ricardobauqa/banco-api

* Repositório dos testes:
  https://github.com/ricardobauqa/banco-api-tests

---

# 🚀 Stack Utilizada

O projeto utiliza as seguintes tecnologias e bibliotecas:

| Tecnologia  | Finalidade                             |
| ----------- | -------------------------------------- |
| Node.js     | Ambiente de execução JavaScript        |
| Mocha       | Framework de testes                    |
| Chai        | Biblioteca de assertions               |
| Supertest   | Testes de APIs HTTP                    |
| Mochawesome | Geração de relatórios HTML             |
| Dotenv      | Gerenciamento de variáveis de ambiente |

---

# 📂 Estrutura do Projeto

```bash
banco-api-tests/
│
├── mochawesome/          # Relatórios HTML gerados
├── node_modules/         # Dependências do projeto
├── test/                 # Arquivos de testes
│
├── .env                  # Variáveis de ambiente (criado pelo usuário)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

* Node.js
* NPM

Verificar versões:

```bash
node -v
npm -v
```

---

# 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/ricardobauqa/banco-api-tests.git
```

Acesse o diretório:

```bash
cd banco-api-tests
```

Instale as dependências:

```bash
npm install
```

---

# 🌎 Configuração do arquivo .env

O projeto utiliza variáveis de ambiente para configuração da URL base da API.

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

## 📌 Exemplo

Caso a API esteja rodando localmente na porta 3000:

```env
BASE_URL=http://localhost:3000
```

---

# ▶️ Execução dos Testes

## Executar todos os testes

```bash
npm test
```

ou

```bash
npx mocha
```

---

# 📊 Relatórios HTML com Mochawesome

O projeto utiliza o Mochawesome para geração de relatórios HTML dos testes executados.

## Executar testes gerando relatório

```bash
npm run test:report
```

Após a execução, o relatório será gerado no diretório:

```bash
/mochawesome
```

Abra o arquivo `.html` no navegador para visualizar os resultados.

---

# ✅ Tipos de validações realizadas

Os testes automatizados podem validar:

* Status code HTTP
* Estrutura da resposta
* Headers
* Payloads JSON
* Regras de negócio
* Contratos da API
* Fluxos positivos e negativos

---

# 📚 Documentação das Dependências

## Node.js

https://nodejs.org/

## Mocha

https://mochajs.org/

## Chai

https://www.chaijs.com/

## Supertest

https://github.com/ladjs/supertest

## Mochawesome

https://github.com/adamgruber/mochawesome

## Dotenv

https://github.com/motdotla/dotenv

---

# 📌 Exemplo de fluxo de execução

1. Subir a API Banco API
2. Configurar o arquivo `.env`
3. Executar os testes
4. Validar o relatório HTML

---

# 🧪 Exemplo de comando completo

```bash
npm install
npm run test:report
```

---

# 👨‍💻 Autor

Ricardo Bauqa

GitHub:
https://github.com/ricardobauqa

---

# 📄 Licença

Este projeto é destinado para fins de estudo, prática e demonstração de automação de testes de API REST.
