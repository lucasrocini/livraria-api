import VendaService from "../services/venda.service.js"

async function createVenda(req, res, next) {
    try{
        let venda = req.body;
        if( !venda.name || !venda.cpf || !venda.phone || !venda.email || !venda.address ) {
            throw new Error("Name, CPF, Email e Address são obrigatórios!")
        }
        venda = await VendaService.createVenda(venda)
        res.send(venda);
        logger.info(`POST /venda - ${JSON.stringify(venda)}`);
    } catch (err) {
        next(err);
    }
}

async function getVendas(req, res, next) {
    try {
        res.send(await VendaService.getVendas(req.query.clienteId, req.query.livroId, req.query.sutorId));
        logger.info(`GET /venda`);
    } catch (err) {
        next(err);
    }
}

async function getVenda(req, res, next) {
    try {
        res.send(await VendaService.getVenda(req.params.id));
        logger.info(`GET /venda`);
    } catch (err) {
        next(err);
    }
}

async function updateVenda(req, res, next) {
    try {
        let venda = req.body;
        if( !venda.vendaId || !venda.name || !venda.cpf || !venda.phone || !venda.email || !venda.address ) {
            throw new Error("Venda ID, Name, CPF, Email e Address são obrigatórios!")
        }
        venda = await VendaService.updateVenda(venda);
        res.send(venda);
        logger.info(`PUT /venda - ${JSON.stringify(venda)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteVenda(req, res, next) {
    try {
        res.send(await VendaService.deleteVenda(req.params.id));
        res.end();
        logger.info(`DELETE /venda`);
    } catch (err) {
        next(err);
    }
}

export default {
    createVenda,
    getVendas,
    getVenda,
    updateVenda,
    deleteVenda
}