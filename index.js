const fs = require("fs");

if (fs.existsSync("./itens.json" && "./lista.json")) {
  const somaDosValores = [];

  const itensdata = fs.readFileSync("itens.json");

  const itens = JSON.parse(itensdata);

  if (itens.length <= 0) {
    return console.log("Insira uma lista com: Nome, Valor e Quantidade.");
  }

  for (i = 0; i < itens.length; i++) {
    if (itens[i].name === "" || itens[i].name === " ") {
      return console.log(`Por favor insira um nome no item ${i + 1}`);
    } else if (
      itens[i].quantity <= 0 ||
      itens[i].quantity === "" ||
      itens[i].quantity === " "
    ) {
      return console.log(
        `Informe uma quantidade valida no item ${itens[i].name}`
      );
    } else if (
      itens[i].value <= 0 ||
      itens[i].value === "" ||
      itens[i].value === " "
    ) {
      return console.log(`Informe um valor valido no item ${itens[i].name}`);
    }
  }

  const multiplicandoItens = itens.map((elemento) =>
    somaDosValores.push(Number(elemento.quantity * elemento.value))
  );

  const soma = (x, y) => x + y;
  const somaDosItens = somaDosValores.reduce(soma, 0);

  const conversaoParaDecimal = parseFloat(somaDosItens.toFixed(2));
  if (conversaoParaDecimal === 0) {
    return console.log("Por favor adicione valores aos itens.");
  }

  const listdata = fs.readFileSync("lista.json");
  const list = JSON.parse(listdata);

  const filtroDeCampo = [];
  list.map((elemento, index) => {
    if (
      elemento.email === "" ||
      elemento.email === Number ||
      elemento.email === " " ||
      elemento.email === "  "
    ) {
    } else {
      filtroDeCampo.push(elemento.email);
    }
  });

  const quantidadeDeEmails = filtroDeCampo.length;
  if (filtroDeCampo.length <= 0) {
    return console.log("É preciso uma lista para ser distribuido os valores.");
  }

  const conversaoParaCentavos = conversaoParaDecimal * 100;
  const restoDaDivisao = conversaoParaCentavos % quantidadeDeEmails;
  const correçãoSobreOIndex = restoDaDivisao - 1;
  const valorFinal = parseFloat(
    (conversaoParaCentavos / quantidadeDeEmails).toFixed(2)
  );

  function CriandoMapa() {
    filtroDeCampo.map((elemento, index) => {
      if (restoDaDivisao !== 0) {
        if (correçãoSobreOIndex >= index) {
          console.log(
            elemento + " => " + parseFloat(valorFinal / 100 + 0.01).toFixed(2)
          );
        } else {
          console.log(
            elemento + " => " + parseFloat(valorFinal / 100).toFixed(2)
          );
        }
      } else {
        console.log(elemento + " => " + valorFinal / 100);
      }
    });
  }
  CriandoMapa();
} else {
  console.log(
    "Ten certeza que os arquivos itens.json e lista.json estejam presentes na mesma pasta e ambos os arquivos com os titulos certos."
  );
}
