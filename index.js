//Lib para leitura de arquivos (File System === fs)
const fs = require("fs");

let sum = [];

//função para ler o arquivo json
const itensdata = fs.readFileSync("itens.json");

//Após o fs ler o arquivo ele retorna o buffer(região fisica de memória do hardware) dos dados, para resolver isso usamos o JSON.parse para formatar para json
const itens = JSON.parse(itensdata);

const numItens = itens.map((el) =>
  sum.push(parseFloat(el.quantity * el.value))
);
const plus = (x, y) => x + y;
const sumItens = sum.reduce(plus, 0);
const fixed = sumItens.toFixed(2);

const listdata = fs.readFileSync("list.json");
const list = JSON.parse(listdata);
const numList = list.length;

console.log(fixed / numList);
