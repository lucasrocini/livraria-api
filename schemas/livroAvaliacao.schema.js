import mongoose from "mongoose";

const LivroAvaliacaoSchema = new mongoose.Schema(
    {
        nome: String,
        nota: Number,
        avaliacao: String
    }, { collection: "livroInfo" }
);

export default LivroAvaliacaoSchema;
