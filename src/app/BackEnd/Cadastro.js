const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

// Configura para o express entender requisições JSON
app.use(express.json());
app.use(cors({
  origin: '*' // ou '*' para permitir de qualquer origem
}));

// Endpoint para cadastro
app.post("/BackEnd/Cadastro", async (req, res) => {
  const { nome, email, senha, confirmarSenha } = req.body;

  // Validação básica
  if (!nome || !email || !senha || !confirmarSenha) {
    return res.status(400).json({ error: "Por favor, preencha todos os campos." });
  }

  if (senha !== confirmarSenha) {
    return res.status(400).json({ error: "As senhas não coincidem." });
  }

  try {
    // Verifica se o email já está cadastrado
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Este email já está cadastrado." });
    }

    // Criptografando a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criando o novo usuário no banco de dados
    const user = await prisma.user.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar usuário.", details: error.message });
  }
});

// Inicia o servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
