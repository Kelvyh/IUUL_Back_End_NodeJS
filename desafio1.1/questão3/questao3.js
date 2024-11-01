export default class Poligono {
    #vertices;

    constructor(...vertices) {
        if (vertices.length < 3) {
            throw new Error('O polígono deve ter pelo menos 3 vértices');
        }
        this.#vertices = vertices;
    }

    addVertice(vertice) {
        if (this.#vertices.some(v => v.equals(vertice))) {
            return false;
        }
        this.#vertices.push(vertice);
        return true;
    }

    getPerimetro() {
        let perimetro = 0;
        for (let i = 0; i < this.#vertices.length; i++) {
            perimetro += this.#vertices[i].getDistancia(this.#vertices[(i + 1) % this.#vertices.length]);
        }
        return perimetro;
    }

    getQtdVertices() {
        return this.#vertices.length;
    }
}