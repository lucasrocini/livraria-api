import LivroRepository from "../repositories/livro.repository.js"
import LivroInfoRepository from "../repositories/livroInfo.repository.js"

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(autorId){
    if (autorId) {
        return await LivroRepository.getLivrosByAutorId(autorId);
    } 
    return await LivroRepository.getLivros();
}

async function getLivro(id){
    const livro = await LivroRepository.getLivro(id);
    livro.info = await LivroInfoRepository.getLivroInfo(parseInt(id));
    return livro;
}

async function updateLivro(livro){
    return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id){
    await LivroRepository.deleteLivro(id);
}

async function createLivroInfo(livroInfo){
    await LivroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo){
    await LivroInfoRepository.updateLivroInfo(livroInfo);
}

async function createAvaliacao(avaliacao, livroId){
    await LivroInfoRepository.createAvaliacao(avaliacao, livroId);
}

async function deleteAvaliacao(livroId, index){
    await LivroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
}

async function deleteLivroInfo(livroId){
    await LivroInfoRepository.deleteLivroInfo(parseInt(livroId));
}

export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro,
    createLivroInfo,
    updateLivroInfo,
    createAvaliacao,
    deleteAvaliacao,
    deleteLivroInfo
}