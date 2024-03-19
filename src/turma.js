class Turma {
    constructor(codigo) {
      this.codigo = codigo;
      this.nota = 0;
      this.aprovado = false; 
    }
  
    aprovar() {
      this.aprovado = this.nota >= 6; // Supondo que a nota mimima seja 6
      return this.aprovado;
    }
  }
  
  module.exports = Turma;
  