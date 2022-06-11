import { User, Pet, Report } from "./models";

User.sequelize
  .sync({ alter: true })
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
console.log("Hola!, soy el user",User);

Pet.sequelize
  .sync({ alter: true })
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

Report.sequelize
  .sync({ alter: true })
  .then((res) => console.log(res))
  .catch((e) => console.log(e));