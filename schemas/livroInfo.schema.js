import mongoose from "mongoose";
import LivroAvaliacaoSchema from "./livroAvaliacao.schema.js";

const LivroInfoSchema = new mongoose.Schema(
    {
        livroId: Number,
        descricao: String,
        paginas: Number,
        editora: String,
        avaliacoes: [LivroAvaliacaoSchema]
    }, { collection: "livroInfo" }
);

export default LivroInfoSchema;