import Vertice from '../questão1/questao1.js';
import Poligono from './questao3.js';
import promptSync from 'prompt-sync';
var prompt = promptSync({ sigint: true });

function main() {
    const vertices = [];
    var numVertices = 0;
    while(numVertices < 3) {
        try {
            numVertices = parseInt(prompt('Digite o número de vértices do polígono (mínimo 3): '));
            if (numVertices < 3) {
                throw new Error('O polígono deve ter pelo menos 3 vértices');
            }
        } catch (e) {
            console.log(e.message);
        }
    }


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