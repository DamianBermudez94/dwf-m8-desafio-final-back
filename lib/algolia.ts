import algoliasearch from "algoliasearch";

// Connect and authenticate with your Algolia app
const client = algoliasearch('JSTB90O92R', '991bef075cb0635a0c29681cf168fdd9')


const indexPets = client.initIndex("dwf-m8-desafio-final");
console.log("Hola, soy algolia",indexPets);


export { indexPets };