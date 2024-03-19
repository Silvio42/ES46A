const Turma = require('./turma');

class TurmaPresencial extends Turma {
  constructor(codigo) {
    super(codigo);
    this.frequencia = 0;
  }

  aprovar() {
    this.aprovado = this.nota >= 6 && this.frequencia >= 75; // Supondo que 7 e 75 seje necessário para aprovação
    return this.aprovado;
  }

  verificarAprovacao(aluno) {
    const status = this.aprovar() ? 'aprovado' : 'reprovado';
    console.log(`Aluno ${aluno.nome} ${status}.`);
  }
}

module.exports = TurmaPresencial;
