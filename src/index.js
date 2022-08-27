const Cliente = require('./cliente');
const Filme = require('./filme');

const filme1 = new Filme('Filme 1');
const filme2 = new Filme('Filme 2');
const filmes = [filme1, filme2, filme1, filme1, filme1, filme2];

const cliente = new Cliente('Johnny', filmes);

function temLealdade(cliente) {
  return cliente.filmesLocados.length > 5;
}

console.log(
  temLealdade(cliente)
);
