import LivroService from "../services/livro.service.js"

async function createLivro(req, res, next) {
    try{
        let livro = req.body;
        if( !livro.name || !livro.cpf || !livro.phone || !livro.email || !livro.address ) {
            throw new Error("Name, CPF, Email e Address são obrigatórios!")
        }
        livro = await LivroService.createLivro(livro)
        res.send(livro);
        logger.info(`POST /livro - ${JSON.stringify(livro)}`);
    } catch (err) {
        next(err);
    }
}

async function getLivros(req, res, next) {
    try {
        res.send(await LivroService.getLivros(req.query.autorId));
        logger.info(`GET /livro`);
    } catch (err) {
        next(err);
    }
}

async function getLivro(req, res, next) {
    try {
        res.send(await LivroService.getLivro(req.params.id));
        logger.info(`GET /livro`);
    } catch (err) {
        next(err);
    }
}

async function updateLivro(req, res, next) {
    try {
        let livro = req.body;
        if( !livro.livroId || !livro.name || !livro.cpf || !livro.phone || !livro.email || !livro.address ) {
            throw new Error("Livro ID, Name, CPF, Email e Address são obrigatórios!")
        }
        livro = await LivroService.updateLivro(livro);
        res.send(livro);
        logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteLivro(req, res, next) {
    try {
        res.send(await LivroService.deleteLivro(req.params.id));
        res.end();
        logger.info(`DELETE /livro`);
    } catch (err) {
        next(err);
    }
}

export default {
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}