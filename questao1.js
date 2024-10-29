export default class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }

    getDistancia(vertice2) {
        return Math.sqrt(Math.pow(this.#x - vertice2.#x, 2) + Math.pow(this.#y - vertice2.#y, 2));
    }

    move(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(vertice2) {
        return this.#x === vertice2.#x && this.#y === vertice2.#y;
    }
}

// const prompt = require('prompt-sync')();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    const vertices = [];
    for (let i = 0; i < 3; i++) {
        const x = await askQuestion(`Digite o x do ${i + 1}º vértice: `);
        const y = await askQuestion(`Digite o y do ${i + 1}º vértice: `);
        vertices.push(new Vertice(parseFloat(x), parseFloat(y)));
    }

    console.log(`Distância entre o vértice 1 e o vértice 2: ${vertices[0].getDistancia(vertices[1])}`);
    console.log(`Distância entre o vértice 2 e o vértice 3: ${vertices[1].getDistancia(vertices[2])}`);
    console.log(`Distância entre o vértice 1 e o vértice 3: ${vertices[0].getDistancia(vertices[2])}`);

    console.log(`Vértice 1 é igual ao vértice 2?: ${vertices[0].equals(vertices[1])}`);
    console.log(`Vértice 2 é igual ao vértice 3?: ${vertices[1].equals(vertices[2])}`);
    console.log(`Vértice 1 é igual ao vértice 3?: ${vertices[0].equals(vertices[2])}`);
    rl.close();
}

main();