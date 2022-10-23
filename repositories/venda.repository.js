import connect from "./db.js";
import Venda from "../models/venda.model.js";
import Livro from "../models/livro.model.js";

async function insertVenda(venda){
    try {
        return await Venda.create(venda);        
    } catch (error) {
        throw error;
    }
}

async function getVendas() {
    try {
        return await Venda.findAll({
            include: [
                {
                    model: Livro
                }                
            ]
        });    
    } catch (error) {
        throw error;
    } 
}

async function getVendasByClienteId(clienteId) {
    try {
        return await Venda.findAll(
            {
                where: {
                    clienteId: clienteId
                },
                include: [
                    {
                        model: Livro
                    }                 
                ]
            }
        )
    } catch (error) {
        throw error;
    } 
}

async function getVendasByLivroId(livroId) {
    try {
        return await Venda.findAll(
            {
                where: {
                    livroId: livroId
                },
                include: [
                    {
                        model: Livro
                    }                
                ]
            }
        )
    } catch (error) {
        throw error;
    } 
}

async function getVendasByAutorId(autorId) {
    try {
        return await Venda.findAll(
            {
                where: {
                    autorId: autorId
                },
                include: [
                    {
                        model: Product
                    },
                    {
                        model: Cliente
                    }                   
                ]
            }
        )
    } catch (error) {
        throw error;
    } 
}


async function getVenda(id) {
    try {
        return await Venda.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function updateVenda(venda) {
    try {
        await Venda.update(
            {
                value: venda.value,
                date: venda.date,
                clienteId: venda.clienteId
            },
            {
                where: {
                    vendaId: venda.vendaId
                }
            }
        );
        return await getVenda(venda.vendaId);
    } catch (error) {
        throw error;
    } 
}

async function deleteVenda(id) {
    try {
        await Venda.destroy({
            where: {
                vendaId: id
            }
        })
    } catch (error) {
        throw error;
    } 
}

export default{
    insertVenda,
    getVendas,
    getVendasByClienteId,
    getVendasByLivroId,
    getVendasByAutorId,
    getVenda,
    updateVenda,
    deleteVenda
}