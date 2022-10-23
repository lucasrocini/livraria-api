import express from "express";
import LivroController from "../controllers/livro.controller.js"

const router = express.Router();

router.post("/", LivroController.createLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivro);
router.delete("/:id", LivroController.deleteLivro);
router.put("/", LivroController.updateLivro);

router.post("/info", ProductController.createProductInfo);
router.put("/info", ProductController.updateProductInfo);
router.delete("/info/:id", ProductController.deleteProductInfo);

router.post("/:id/avaliacao", ProductController.createReview);
router.delete("/:id/avaliacao/:index", ProductController.deleteReview);


export default router;
