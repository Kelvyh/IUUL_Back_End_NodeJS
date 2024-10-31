import Vertice from './questao1.js';
import Poligono from './questao3.js';
import promptSync from 'prompt-sync';
var prompt = promptSync();

function main() {
    const vertices = [];
    const numVertices = parseInt(prompt('Digite o número de vértices do polígono (mínimo 3): '));

    for (let i = 0; i < numVertices; i++) {
        let v = prompt(`Digite as coordenadas do vértice ${i+1} - x y: `).split(' ').map(Number);
        vertices.push(new Vertice(v[0], v[1]));
    }

    const poligono = new Poligono(...vertices);

    console.log(`Perímetro do polígono: ${poligono.getPerimetro()}`);
    console.log(`Quantidade de vértices: ${poligono.getQtdVertices()}`);

    console.log(poligono.addVertice(new Vertice(1, 0)));
    console.log(`Nova quantidade de vértices: ${poligono.getQtdVertices()}`);
}

main();