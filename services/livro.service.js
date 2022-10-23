import LivroRepository from "../repositories/livro.repository.js"
import LivroInfoRepository from "../repositories/livroInfo.repository.js"

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(){
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

export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}