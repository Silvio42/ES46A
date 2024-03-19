const Aluno = require('./aluno');
const TurmaPresencial = require('./turmaPresencial');

// Aluno
const aluno = new Aluno('Silvio Jorge de Oliveira Filho', 'silviooliveirra', '2052261');

// Turma presencial
const turma = new TurmaPresencial('ES61');

turma.nota = 10; // Nota
turma.frequencia = 100; // Frequência

// Verificar se o aluno está aprovado
turma.verificarAprovacao(aluno);
