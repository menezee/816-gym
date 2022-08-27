class Filme {
  constructor(nome, avaliacao) {
    this.nome = nome;
    this.avaliacao = 2.5;
  }

  setAvaliacao(avaliacao) {
    if (avaliacao < 0 || avaliacao > 5) {
      throw new Error('avaliacao nao é valida!!');
    }

    this.avaliacao = avaliacao;
  }
}

module.exports = Filme;
