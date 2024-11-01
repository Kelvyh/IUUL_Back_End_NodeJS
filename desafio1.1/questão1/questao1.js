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
};