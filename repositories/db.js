import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "postgres://trudtnwt:ymAVygaeuXvfbi79F6tKPV9RqAK0Uxxn@babar.db.elephantsql.com/trudtnwt",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;
