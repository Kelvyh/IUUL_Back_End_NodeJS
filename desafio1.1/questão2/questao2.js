import Vertice from '../questão1/questao1.js';

export default class Triangulo {
    #v1;
    #v2;
    #v3;

    get v1() {
        return this.#v1;
    }

    get v2() {
        return this.#v2;
    }

    get v3() {
        return this.#v3;
    }
    
    #isTriangulo(v1,v2,v3) {
        return (v1.getDistancia(v2) + v2.getDistancia(v3) > v1.getDistancia(v3) &&
                v1.getDistancia(v2) + v1.getDistancia(v3) > v2.getDistancia(v3) &&
                v2.getDistancia(v3) + v1.getDistancia(v3) > v1.getDistancia(v2));
    }

    //construtor com as coordenadas dos 3 vértices
    constructor(v1x, v1y, v2x, v2y, v3x, v3y) {
        let v1 = new Vertice(v1x, v1y);
        let v2 = new Vertice(v2x, v2y);
        let v3 = new Vertice(v3x, v3y);
        
        if (!this.#isTriangulo(v1,v2,v3)) {
            throw new Error('Os vértices não formam um triângulo');
        }
        this.#v1 = v1;
        this.#v2 = v2;
        this.#v3 = v3;
    }

    equals(triangulo2) {
        return (this.#v1.equals(triangulo2.#v1) || this.#v1.equals(triangulo2.#v2) || this.#v1.equals(triangulo2.#v3)) &&
                (this.#v2.equals(triangulo2.#v1) || this.#v2.equals(triangulo2.#v2) || this.#v2.equals(triangulo2.#v3)) &&
                (this.#v3.equals(triangulo2.#v1) || this.#v3.equals(triangulo2.#v2) || this.#v3.equals(triangulo2.#v3));
    }

    getPerimetro() {
        return this.#v1.getDistancia(this.#v2) + this.#v2.getDistancia(this.#v3) + this.#v1.getDistancia(this.#v3);
    }

    tipo() {
        if(this.#v1.getDistancia(this.#v2) == this.#v2.getDistancia(this.#v3)) {
            if(this.#v1.getDistancia(this.#v2) == this.#v1.getDistancia(this.#v3)) {
                return 'equilátero';
            } else {
                return 'isósceles';
            }
        } else if(this.#v1.getDistancia(this.#v2) == this.#v1.getDistancia(this.#v3) || this.#v2.getDistancia(this.#v3) == this.#v1.getDistancia(this.#v3)) {
            return 'isósceles';
        } else {
            return 'escaleno';
        }
    }

    clone() {
        return new Triangulo(this.#v1.x, this.#v1.y, this.#v2.x, this.#v2.y, this.#v3.x, this.#v3.y);
    }

    getArea() {
        let s = this.getPerimetro() / 2;
        return Math.sqrt(s*(s-this.#v1.getDistancia(this.#v2))*(s-this.#v2.getDistancia(this.#v3))*(s-this.#v1.getDistancia(this.#v3)));
    }
}