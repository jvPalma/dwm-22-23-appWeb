/**
 * objectivo: gerar um certo numeros definidos pelo "total"
 *  1º - GERAR UMA LISTA DE NUMEROS
 * 	2º - DEFINIR O TAMANHO DO ARRRAY
 * 	3º - ESPECIFICAR NUMERO MINIMO
 * 	4º - ESPECIFICAR NUMERO MAXIMO
 * 	5º - VERIFICAR QUE NAO EXISTEM NUMEROS REPETIDOS NA CHAVE
 */
const extrairNumeros = (total, min, max) => {
  const numeros = [];

  while (numeros.length < total) {
    // Math.floor() = Returns the greatest integer less than or equal to its numeric argument.
    // Math.random() = Returns a pseudorandom number between 0 and 1.
    const novoNumero = Math.floor(Math.random() * (max - min + 1)) + min;

    // [1, 2, 3, 4, 5].indexOf(3); //! EXISTE index = 2
    // [1, 2, 3, 4, 5].indexOf(10); //! NÃO EXISTE index = -1
    // se numero gerado ainda nao existir na lista
    if (numeros.indexOf(novoNumero) == -1) {
      // adicionar numero gerado à lista
      numeros.push(novoNumero);
    }
  }

  // devolver a lista dos numeros gerados
  return numeros;
};

const ordenaChave = (array) => {
  // res : -1 a  < b -> o A passa para o proximo index
  // res :  1 a  > b -> o B passa para o index anterior
  // res :  0 a == b - ficam como está
  return array.sort((a, b) => a - b).join(" - ");
};

const adicionarChaveHTML = (chave) => {
  const body = table.tBodies[0];

  const linha = document.createElement("tr");
  linha.innerHTML = `
  <td>
	  ${chave.numeros.join(" - ")} ** ${chave.estrelas.join(" - ")}
  </td>
  <td> ${ordenaChave(chave.numeros)} </td>
  <td> ${ordenaChave(chave.estrelas)} </td>
  `;

  body.appendChild(linha);
};

const geraChave = () => {
  // estado inicial da chave vazia
  const chaveGerada = {
    numeros: [],
    estrelas: [],
  };

  // gerar a numeros da chave
  chaveGerada.numeros = extrairNumeros(5, 1, 50);

  // gerar a estrelas da chave
  chaveGerada.estrelas = extrairNumeros(2, 1, 12);

  console.log(chaveGerada);
  adicionarChaveHTML(chaveGerada);
};
