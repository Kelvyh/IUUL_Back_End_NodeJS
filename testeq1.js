import Vertice from './questao1.js';
import promptSync from 'prompt-sync';
var prompt = promptSync();

function main() {
    const vertices = [];
    for (let i = 0; i < 3; i++) {
        const x = prompt(`Digite o x do ${i + 1}º vértice: `);
        const y = prompt(`Digite o y do ${i + 1}º vértice: `);
        vertices.push(new Vertice(parseFloat(x), parseFloat(y)));
    }

    console.log(`Distância entre o vértice 1 e o vértice 2: ${vertices[0].getDistancia(vertices[1])}`);
    console.log(`Distância entre o vértice 2 e o vértice 3: ${vertices[1].getDistancia(vertices[2])}`);
    console.log(`Distância entre o vértice 1 e o vértice 3: ${vertices[0].getDistancia(vertices[2])}`);

    console.log(`Vértice 1 é igual ao vértice 2?: ${vertices[0].equals(vertices[1])}`);
    console.log(`Vértice 2 é igual ao vértice 3?: ${vertices[1].equals(vertices[2])}`);
    console.log(`Vértice 1 é igual ao vértice 3?: ${vertices[0].equals(vertices[2])}`);
}

main();