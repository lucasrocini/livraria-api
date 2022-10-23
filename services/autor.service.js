import AutorRepository from "../repositories/autor.repository.js"

async function createAutor(autor){
    return await AutorRepository.insertAutor(autor);
}

async function getAutores(){
    return await AutorRepository.getAutors();
}

async function getAutor(id){
    return await AutorRepository.getAutor(id);
}

async function updateAutor(autor){
    return await AutorRepository.updateAutor(autor);
}

async function deleteAutor(id){
    await AutorRepository.deleteAutor(id);
}

export default{
    createAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}