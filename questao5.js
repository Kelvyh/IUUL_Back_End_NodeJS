import promptSync from 'prompt-sync';
import { DateTime } from 'luxon';
var prompt = promptSync();

var nome;
var cpf;
var cpfMascara;
var dataNascimento;
var rendaMensal;
var estadoCivil;
var dependentes;

function testeNome(nome) {
    if(nome.length < 5) {
        throw new Error('Nome precisa ter no mínimo 5 caracteres');
    }
}

while(true) {
    nome = prompt('Digite o seu nome: ');
    try {
        testeNome(nome);
        break;
    } catch (e) {
        console.log(e.message);
    }
}

function adicionaMascaraCpf(cpf) {
    return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9);
}

function testaCpf(cpf) {
    if(cpf.length !== 11) {
        throw new Error('CPF precisa ter exatamente 11 caracteres');
    }
}

while(true) {
    cpf = prompt('Digite o seu CPF (somente números): ');
    try {
        testaCpf(cpf);
        cpfMascara = adicionaMascaraCpf(cpf);
        cpf = Number(cpf);
        break;
    } catch (e) {
        console.log(e.message);
    }
}

function testeFormatoData(dataNascimento) {
    if(!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
        throw new Error('Data de nascimento precisa estar no formato DD/MM/AAAA');
    }
}

function testeIdade(dataNascimento) {
    dataNascimento = DateTime.fromJSDate(dataNascimento);
    let idade = DateTime.now().diff(dataNascimento, 'years').years;
    if(idade < 18) {
        throw new Error('Idade precisa ser maior ou igual a 18 anos');
    }
}

while(true) {
    dataNascimento = prompt('Digite a sua data de nascimento no formato (DD/MM/AAAA): ');
    try {
        testeFormatoData(dataNascimento);
        let [dia, mes, ano] = dataNascimento.split('/').map(part => parseInt(part));
        dataNascimento = new Date(ano, mes-1, dia);
        testeIdade(dataNascimento);
        break;
    } catch (e) {
        console.log(e.message);
    }
}

function testeRendaMensal(rendaMensal) {
    if(isNaN(rendaMensal)) {
        throw new Error('Renda mensal precisa ser um número');
    }
    if(rendaMensal < 0) {
        throw new Error('Renda mensal precisa ser maior ou igual a 0');
    }

}

while(true) {
    rendaMensal = prompt('Digite a sua renda mensal - Ex: 1400,00: ').replace(',', '.');
    try {
        rendaMensal = Number(rendaMensal);
        testeRendaMensal(rendaMensal);
        break;
    } catch (e) {
        console.log(e.message);
    }
}

while(true) {
    estadoCivil = prompt('Digite o seu estado civil (S - Solteiro, C - Casado, D - Divorciado ou V - Viúvo): ').toLowerCase();
    try {
        if(estadoCivil === 's') {
            estadoCivil = 'Solteiro';
        } else if(estadoCivil === 'c') {
            estadoCivil = 'Casado';
        } else if(estadoCivil === 'd') {
            estadoCivil = 'Divorciado';
        } else if(estadoCivil === 'v') {
            estadoCivil = 'Viúvo';
        } else {
            throw new Error('Estado civil inválido');
        }
        break;
    } catch (e) {
        console.log(e.message);
    }
}

function testeDependentes(dependentes) {
    if(isNaN(dependentes)) {
        throw new Error('Dependentes precisa ser um número inteiro');
    }
    if(dependentes < 0 || dependentes > 10) {
        throw new Error('A quantidade de dependentes precisa estar entre 0 e 10');
    }
}

while(true) {
    dependentes = prompt('Digite a quantidade de dependentes: ');
    try {
        dependentes = Number(parseInt(dependentes));
        testeDependentes(dependentes);
        break;
    } catch (e) {
        console.log(e.message);
    }
}


console.log("---------------------------------")
console.log(">>>>> Dados do usuário <<<<<")
console.log("Nome:", nome);
console.log("CPF:", cpfMascara);
console.log("Data de Nascimento:", dataNascimento.toLocaleDateString("pt-BR"));
console.log("Renda Mensal:", rendaMensal.toFixed(2).replace('.', ','));
console.log("Estado Civil:", estadoCivil);
console.log("Dependentes:", dependentes);

