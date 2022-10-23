import Livro from "../models/livro.model.js"

async function insertLivro(livro){
    try {
        return await Livro.create(livro);
    } catch (error) {
        throw error;
    }
}

async function getLivrosByAutorId(autorId) {
    try {
        return await Venda.findAll(
            {
                where: {
                    autorId: autorId
                }
            }
        )
    } catch (error) {
        throw error;
    } 
}

async function getLivros() {
    try {
        return await Livro.findAll();
    } catch (error) {
        throw error;
    }
}

async function getLivro(id) {
    try {
        return await Livro.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function updateLivro(livro) {
    try {
        await Livro.update(livro, {
            where: {
                livroId: livro.livroId
            }
        });
        return await getLivro(livro.livroId);
    } catch (error) {
        throw error;
    }
}

async function deleteLivro(id) {
    try {
        await Livro.destroy({
            where: {
                livroId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export default{
    insertLivro,
    getLivros,
    getLivrosByAutorId,
    getLivro,
    updateLivro,
    deleteLivro
}