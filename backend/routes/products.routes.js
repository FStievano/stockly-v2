const express = require("express");
const router = express.Router();

let products = require("../data/products");

// LISTAR PRODUTOS
router.get("/", (req, res) => {
  res.json(products);
});

// ADICIONAR PRODUTO
router.post("/", (req, res) => {
  const { name, quantity } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    quantity
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// ATUALIZAR PRODUTO
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { quantity } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  product.quantity = quantity;
  res.json(product);
});

// REMOVER PRODUTO
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);

  res.status(204).send();
});

module.exports = router;
