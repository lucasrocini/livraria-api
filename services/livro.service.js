import LivroRepository from "../repositories/livro.repository.js"

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(){
    return await LivroRepository.getLivros();
}

async function getVendas(autorId){
    if (clienteId) {
        return await LivroRepository.getLivros(autorId);
    } 
    return await LivroRepository.getLivros();
}

async function getLivro(id){
    return await LivroRepository.getLivro(id);
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