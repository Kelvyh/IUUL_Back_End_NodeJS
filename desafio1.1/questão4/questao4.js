export class Aluno {
    #matricula
    #nome
    #p1
    #p2

    constructor(matricula, nome) {
        this.#matricula = matricula
        this.#nome = nome
    }

    get matricula() {
        return this.#matricula
    }

    get nome() {
        return this.#nome
    }

    get p1() {
        return this.#p1
    }

    get p2() {      
        return this.#p2
    }

    setNota(prova, nota) {
        if (prova === 'p1') {
            this.#p1 = nota
        } else if (prova === 'p2') {
            this.#p2 = nota
        }
    }
}


export class Turma {
    #alunos = []

    addAluno(aluno) {
        if (this.#alunos.some(a => a.matricula === aluno.matricula)) {
            throw new Error('Aluno já cadastrado')
        }
        this.#alunos.push(aluno)
    }

    removeAluno(matricula) {
        const index = this.#alunos.findIndex(a => a.matricula === matricula)
        if (index === -1) {
            throw new Error('Aluno não encontrado')
        }
        this.#alunos.splice(index, 1)
    }

    lancarNota(matricula, prova, nota) {
        const aluno = this.#alunos.find(a => a.matricula === matricula)
        if (!aluno) {
            throw new Error('Aluno não encontrado')
        }
        aluno.setNota(prova, nota)
    }

    imprimirAlunos() {
        const alunosOrdenados = this.#alunos.sort((aluno1, aluno2) => aluno1.nome.localeCompare(aluno2.nome));
        console.log(' —--------------------------------------');
        console.log('Matricula Nome P1 P2 NF');
        alunosOrdenados.forEach(aluno => {
            const p1 = aluno.p1 !== undefined ? aluno.p1.toFixed(1) : '-';
            const p2 = aluno.p2 !== undefined ? aluno.p2.toFixed(1) : '-';
            let nf;
            if (aluno.p1 !== undefined && aluno.p2 !== undefined) {
                nf = ((aluno.p1 + aluno.p2) / 2).toFixed(1);
            } else if (aluno.p1 !== undefined) {
                nf = (aluno.p1 / 2).toFixed(1);
            } else if (aluno.p2 !== undefined) {
                nf = (aluno.p2 / 2).toFixed(1);
            } else {
                nf = '0.0';
            }
            console.log(`${aluno.matricula} ${aluno.nome} ${p1} ${p2} ${nf}`);
        });
        console.log(' —--------------------------------------');
    }
}