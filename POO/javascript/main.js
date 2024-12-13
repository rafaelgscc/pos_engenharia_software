import Cao from './Cao.js';

const meuCao = new Cao("Rex", "marrom", 5, 20);

console.log(meuCao.getNome()); // Saída: Rex
console.log(meuCao.getCor()); // Saída: marrom

meuCao.setIdade(6);
console.log(meuCao.getIdade()); // Saída: 6
