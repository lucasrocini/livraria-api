import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "postgres://lzdyzbdc:al_M-CPndOp-3SS0VvBhv6OjVNhoZ-We@babar.db.elephantsql.com/lzdyzbdc",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;
