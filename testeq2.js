import Triangulo from './questao2.js';
import Vertice from './questao1.js';
import promptSync from 'prompt-sync';
var prompt = promptSync();

function main() {
    const triangulos = [];
    for (let i = 0; i < 3; i++) {
        console.log(`Digite as coordenadas do triângulo ${i+1}:`);

        let value = prompt('vértice 1 - x y: ').split(' ').map(Number);
        const v1 = new Vertice(value[0], value[1]);

        value = prompt('vértice 2 - x y: ').split(' ').map(Number)
        const v2 = new Vertice(value[0], value[1]);

        value = prompt('vértice 3 - x y: ').split(' ').map(Number)
        const v3 = new Vertice(value[0], value[1]);

        triangulos.push(new Triangulo(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y));
    }
    
    triangulos.forEach((triangulo, index) => {
        console.log(`Triângulo ${index + 1}:`);
        console.log(`Perímetro: ${triangulo.getPerimetro()}`);
        console.log(`Área: ${triangulo.getArea()}`);
        console.log(`Tipo: ${triangulo.tipo()}`);
    });
}

main();