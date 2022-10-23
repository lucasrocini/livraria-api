import VendaRepository from "../repositories/venda.repository.js"
import ClienteRepository from "../repositories/cliente.repository.js"
import LivroRepository from "../repositories/livro.repository.js"
import AutorRepository from "../repositories/autor.repository.js"

async function createVenda(venda){
    let error = "";
    if(! await ClienteRepository.getCliente(venda.clienteId)) {
        error = "Cliente ID informado não existe!";
    }  
    const livro = await LivroRepository.getLivro(venda.livroId);
    if(!livro) {
        error += "Livro ID informado não existe!";
    }     
    if(error) {
        throw new Error(error);
    }

    
   if(livro.estoque > 0 ) {
        venda =  await VendaRepository.insertVenda(venda);
        livro.estoque--;
        await LivroRepository.updateLivro(livro);
        return venda;
   } else {
    throw new Error("O produto informado não possui estoque");
   }
}

async function getVendas(clienteId, livroId, autorId){
    if (clienteId) {
        return await VendaRepository.getVendasByClienteId(clienteId);
    } 
    if (livroId) {
        return await VendaRepository.getVendasByLivroId(livroId);
    } 
    if (autorId) {
        return await VendaRepository.getVendasByAutorId(autorId);
    } 
    return await VendaRepository.getVendas();
}

async function getVenda(id){
    return await VendaRepository.getVenda(id);
}



export default{
    createVenda,
    getVendas,
    getVenda    
}