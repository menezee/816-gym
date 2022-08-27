class Cliente {
  #nome;

  constructor(nome, filmesLocados) {
    this.#nome = nome;
    this.filmesLocados = filmesLocados;
  }

  getNome() {
    return this.#nome;
  }
}

module.exports = Cliente;
