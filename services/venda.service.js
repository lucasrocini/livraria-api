import VendaRepository from "../repositories/venda.repository.js"
import ClienteRepository from "../repositories/cliente.repository.js"
import LivroRepository from "../repositories/livro.repository.js"
import AutorRepository from "../repositories/autor.repository.js"

async function createVenda(venda){
    let error = "";
    if(! await ClienteRepository.getCliente(venda.clienteId)) {
        error = "Cliente ID informado não existe!";
    }  
    const product = await ProductRepository.getProduct(venda.productId);
    if(!product) {
        error += "Product ID informado não existe!";
    }     
    if(error) {
        throw new Error(error);
    }

    
   if(product.stock > 0 ) {
        venda =  await VendaRepository.insertVenda(venda);
        product.stock--;
        await ProductRepository.updateProduct(product);
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

async function updateVenda(venda){
    let error = "";
    if(! await ClienteRepository.getCliente(venda.clienteId)) {
        error = "Cliente ID informado não existe!";
    }  
    if(! await ProductRepository.getProduct(venda.productId)) {
        error += "Product ID informado não existe!";
    }     
    if(error) {
        throw new Error(error);
    }
    return await VendaRepository.updateVenda(venda);
}

async function deleteVenda(id){
    const venda = await VendaRepository.getVenda(id);
    if(venda){
        const product = await ProductRepository.getProduct(venda.productId);
        await VendaRepository.deleteVenda(id);
        product.stock++;
        await ProductRepository.updateProduct(product);
    } else {
        throw new Error("O ID da Venda informada não existe!")
    }
    
}

export default{
    createVenda,
    getVendas,
    getVenda,
    updateVenda,
    deleteVenda
}