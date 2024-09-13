// @ts-ignore
import * as readline from 'readline';
// @ts-ignore
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// Es el reemplazo de leer en el pseint
const leerDatos = (mensaje: string): Promise<string> =>
    new Promise((resolve) => rl.question(mensaje, (respuesta: string) => resolve(respuesta)))


const main = async () => {
   // traer los ingredientes a usar
    const ingrediente1: string = await leerDatos('Ingrediente 1: ');
    const ingrediente2: string = await leerDatos('Ingrediente 2: ');

    // funcion para procesar la albahaca

function prepararAlbahacas(ingrediente1: string) {
    console.log(`lavar y cortar ${ingrediente1}, luego agregarlas a pizza`);
}

// funcion para procesar los pimientos
function prepararPimientos(ingrediente2: string) {
    console.log(`lavar y cortar los ${ingrediente2} en trozos,
         luego agregarlos a pizza`);
}

//llamado a las funciones de preparacion
prepararAlbahacas(ingrediente1);
prepararPimientos(ingrediente2);

// funcion para cocinar y servir la pizza
function cocinarPizza() {
    const pizza: string = "pizza";
const temperatura: number = parseInt((' ingrese la temperatura en grados celcius a cocinar la pizza: '));
const minutos: number = parseInt((' ingrese la cantidad de minutos a cocinar la pizza: '));

if (temperatura > 0 && minutos > 0) {
    console.log(`cocinando ${pizza} a ${temperatura} grados y durante ${minutos} horas`);
}

}

 // llamado a la funcion para cocinar la pizza
cocinarPizza();

// funcion para servir la pizza
function servirPizza() {
console.log(' pasado el tiempo de coccion, se saca la pizza del horno, se porciona y se sirve en platos individuales');
}

// llamado a la funcion para servir la pizza
servirPizza();

rl.close()
}
main()