import { Aluno, Turma } from './questao4.js';
import promptSync from 'prompt-sync';
var prompt = promptSync();

//Menu para interação com ações da turma
function main() {
    const turma = new Turma();
    const opcoes = ['1 - Adicionar aluno', '2 - Remover aluno', '3 - Lançar nota', '4 - Imprimir alunos', '5 - Sair'];
    let opcao;
    do {
        console.log('Escolha uma ação para fazer na turma:');
        opcoes.forEach(opt => console.log(opt));
        opcao = prompt('Opção: ');
        switch (opcao) {
            case '1':
                const matricula = prompt('Digite a matrícula do aluno: ');
                const nome = prompt('Digite o nome do aluno: ');
                turma.addAluno(new Aluno(matricula, nome));
                break;
            case '2':
                const matriculaRemover = prompt('Digite a matrícula do aluno a ser removido: ');
                turma.removeAluno(matriculaRemover);
                break;
            case '3':
                const matriculaNota = prompt('Digite a matrícula do aluno: ');
                const prova = prompt('Digite a prova (p1 ou p2): ');
                const nota = parseFloat(prompt('Digite a nota: '));
                turma.lancarNota(matriculaNota, prova, nota);
                break;
            case '4':
                turma.imprimirAlunos();
                break;
            case '5':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida');
        }
    } while (opcao !== '5');
}

main();