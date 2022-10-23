import LivroService from "../services/livro.service.js"

async function createLivro(req, res, next) {
    try{
        let livro = req.body;
        if( !livro.nome || !livro.valor || !livro.estoque || !livro.autorId ) {
            throw new Error("Nome, valor, estoque e autorId são obrigatórios!")
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
        if( !livro.livroId ||!livro.nome || !livro.valor || !livro.estoque || !livro.autorId ) {
            throw new Error("livroId, Nome, valor, estoque e autorId são obrigatórios!")
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

async function createAvaliacao(req, res, next){
    try {
        let params = req.body;
        if(!req.params.id || !params.avaliacao){
            throw new Error("Livro ID e avaliacao são obrigatórios");
        }
        await LivroService.createAvaliacao(params.avaliacao, req.params.id);
        res.end();
        logger.info(`POST /livro/${req.params.id }/review/`)
    } catch (error) {
        next(error);
    }
}

async function deleteAvaliacao(req, res, next){
    try {
        await LivroService.deleteAvaliacao(req.params.id, req.params.index);
        res.end();
        logger.info(`DELETE /livro/${req.params.id}/review/${req.params.index}`)
    } catch (error) {
        next(error);
    }
}

async function createLivroInfo(req, res, next){
    try {
        let livroInfo = req.body;
        if(!livroInfo.livroId){
            throw new Error("Livro ID é obrigatório");
        }
        await LivroService.createLivroInfo(livroInfo)
        res.end();
        logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`)
    } catch (error) {
        next(error);
    }
}

async function updateLivroInfo(req, res, next){
    try {
        let livroInfo = req.body;
        if(!livroInfo.livroId){
            throw new Error("Livro ID é obrigatório");
        }
        await LivroService.updateLivroInfo(livroInfo)
        res.end();
        logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`)
    } catch (error) {
        next(error);
    }
}

async function deleteLivroInfo(req, res, next) {
    try {
        res.send(await LivroService.deleteLivroInfo(req.params.id));
        logger.info(`DELETE /livro/info`);
    } catch (err) {
        next(err);
    }
}


export default {
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro,
    createAvaliacao,
    deleteAvaliacao,
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}