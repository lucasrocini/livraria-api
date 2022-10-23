import AutorService from "../services/autor.service.js"

async function createAutor(req, res, next) {
    try{
        let autor = req.body;
        if( !autor.nome ||  !autor.email || !autor.telefone ) {
            throw new Error("Nome, email e telefone são obrigatórios!")
        }
        autor = await AutorService.createAutor(autor)
        res.send(autor);
        logger.info(`POST /autor - ${JSON.stringify(autor)}`);
    } catch (err) {
        next(err);
    }
}

async function getAutores(req, res, next) {
    try {
        res.send(await AutorService.getAutores());
        logger.info(`GET /autor`);
    } catch (err) {
        next(err);
    }
}

async function getAutor(req, res, next) {
    try {
        res.send(await AutorService.getAutor(req.params.id));
        logger.info(`GET /autor`);
    } catch (err) {
        next(err);
    }
}

async function updateAutor(req, res, next) {
    try {
        let autor = req.body;
        if( !autor.autorId || !autor.nome ||  !autor.email || !autor.telefone ) {
            throw new Error("autorId, Nome, email e telefone são obrigatórios!")
        }
        autor = await AutorService.updateAutor(autor);
        res.send(autor);
        logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAutor(req, res, next) {
    try {
        res.send(await AutorService.deleteAutor(req.params.id));
        res.end();
        logger.info(`DELETE /autor`);
    } catch (err) {
        next(err);
    }
}

export default {
    createAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}