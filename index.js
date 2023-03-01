import { countries } from "./countries.js";

/*const teste = process.argv[2]

console.log(teste)*/

const query = process.argv[2]
//console.log(query)

//const result = countries.filter(country => country.name === (query))
//console.log(result)

if(!query){
    console.log("Faltou o argumento de busca")
}else {
    const result =countries.filter(country => country.name.includes(query))
    console.log(result)
}

//console.log("oi mundo")
