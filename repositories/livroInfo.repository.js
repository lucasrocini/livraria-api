import LivroInfoSchema from "../schemas/livroInfo.schema.js";
import { connect } from "./mongo.db.js"

async function createLivroInfo(livroInfo){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
        livroInfo = new LivroInfo(livroInfo);
        await livroInfo.save();
    } catch (error) {
        throw error;
    }
}

async function updateLivroInfo(livroInfo){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
        await LivroInfo.findOneAndUpdate( {livroId: livroInfo.livroId}, livroInfo);
    } catch (error) {
        throw error;
    }
}

async function getLivroInfo(livroId){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
        const query = LivroInfo.findOne( {livroId});
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function createAvaliacao(avaliacao, livroId){
    try {
        const livroInfo = await getLivroInfo(livroId);
        livroInfo.avaliacoes.push(avaliacao);
        await updateLivroInfo(livroInfo);
    } catch (error) {
        throw error;
    } 
}

async function deleteAvaliacao(livroId, index){
    try {
        const livroInfo = await getLivroInfo(livroId);
        livroInfo.avaliacoes.splice(index, 1);
        await updateLivroInfo(livroInfo);
    } catch (error) {
        throw error;
    } 
}

async function getLivrosInfo(){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
        const query = LivroInfo.find({});
        return await query.exec();
    } catch (error) {
        throw error;
    }
}

async function deleteLivroInfo(livroId){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
        return LivroInfo.deleteOne( { livroId } );
    } catch (error) {
        throw error;
    }
}


export default {
    createLivroInfo,
    updateLivroInfo,
    getLivroInfo,
    createAvaliacao,
    deleteAvaliacao,
    getLivrosInfo,
    deleteLivroInfo
}