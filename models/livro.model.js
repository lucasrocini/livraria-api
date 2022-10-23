import  Sequelize  from "sequelize";
import db from "../repositories/db.js";

const Livro = db.define('livros', {
    livroId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

Product.belongsTo(Autor, {foreignKey: "autorId"});

export default Livro;