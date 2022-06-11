import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    username: "jwacmxlwdocmko",
    password: "fc5aa116d81d84a4c13231fc6f05c03a339af6551278977b5ceb8597adf3485c",
    database: "dqrbg5n2r3bj4",
    port: 5432,
    host: "ec2-3-226-211-228.compute-1.amazonaws.com",
    ssl: true,
    // esto es necesario para que corra correctamente
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
});
async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
console.log("Soy la base de datos",sequelize);
