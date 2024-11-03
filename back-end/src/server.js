import app from './app.js'

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando! Porta ${port}`)
})

app.use('/teste', (req, res) =>{
    res.send(
        `
        <!DOCTYPE html>
            <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Apresentação Pessoal</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        header {
                            background-color: #4CAF50;
                            color: white;
                            padding: 20px;
                            text-align: center;
                        }
                        .container {
                            width: 80%;
                            margin: auto;
                            overflow: hidden;
                            padding: 20px;
                            background: white;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1, h2 {
                            color: #333;
                        }
                        p {
                            line-height: 1.6;
                        }
                        footer {
                            text-align: center;
                            padding: 10px;
                            background: #4CAF50;
                            color: white;
                            position: relative;
                            bottom: 0;
                            width: 100%;
                        }
                    </style>
                </head>
                <body>

                    <header>
                        <h1>Bem-vindo à Minha Página de Apresentação</h1>
                    </header>

                    <div class="container">
                        <h2>Sobre Mim</h2>
                        <p>Olá! Meu nome é [Seu Nome]. Sou um entusiasta de tecnologia e desenvolvimento de software.</p>
                        <p>Atualmente, estou trabalhando com desenvolvimento web e buscando aprimorar minhas habilidades em programação.</p>

                        <h2>Habilidades</h2>
                        <ul>
                            <li>Desenvolvimento Front-end (HTML, CSS, JavaScript)</li>
                            <li>Desenvolvimento Back-end (Node.js, Express)</li>
                            <li>Banco de Dados (MongoDB, SQL)</li>
                            <li>TypeScript</li>
                        </ul>

                        <h2>Contato</h2>
                        <p>Você pode me encontrar nas redes sociais ou enviar um e-mail para: [seuemail@example.com]</p>
                    </div>

                    <footer>
                        <p>&copy; 2024 [Seu Nome]. Todos os direitos reservados.</p>
                    </footer>

                    </body>
            </html>

        `)})