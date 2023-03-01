import { countries } from "./countries.js";

const query = process.argv[2]

if(!query){
    console.log("Faltou o argumento de busca")
} else {
    const resultado = countries.filter(country => country.name.toLowerCase()
    [0] === query.toLowerCase())
    console.log(resultado)
}