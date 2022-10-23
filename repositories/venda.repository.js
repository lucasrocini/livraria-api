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
                include: [
                    {
                        model: Livro,
                        where: {
                            autorId: autorId
                        }
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


export default{
    insertVenda,
    getVendas,
    getVendasByClienteId,
    getVendasByLivroId,
    getVendasByAutorId,
    getVenda
}