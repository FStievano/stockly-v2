// Importa o Express
const express = require("express");
const cors = require("cors");

// Importa as rotas de produtos
const productRoutes = require("./routes/products.routes.js");

const app = express();

// Permite requisições do frontend
app.use(cors());

// Permite receber JSON no body
app.use(express.json());

// 🔹 ROTA RAIZ (ESSENCIAL pro front)
app.get("/", (req, res) => {
  res.send("Backend Stockly online 🚀");
});

// Usa as rotas de produtos
app.use("/products", productRoutes);

// Porta do servidor
const PORT = 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
