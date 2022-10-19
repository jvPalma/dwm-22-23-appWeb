import { useState, useEffect } from 'react';
import Chave from './Chave';

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let NUMERO_CORRETO = gerarNumero(1, 10);

function App() {
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    if (numeros.some((chave) => chave.valor === NUMERO_CORRETO)) {
      alert('Chave encontrada!');
    }
  }, [numeros]);

  function adicionarNumero() {
    const novosnumeros = [...numeros];
    //push adds to the end of the array
    //unshift adds to the start of the array
    novosnumeros.unshift({
      id: gerarNumero(1, 9999),
      valor: gerarNumero(1, 10),
    });
    setNumeros(novosnumeros);
  }

  function reset() {
    setNumeros([]);
    NUMERO_CORRETO = gerarNumero(1, 10);
  }

  return (
    <div className="container">
      <div className="chaves">
        {numeros.length > 0 ? (
          numeros.map((numero) => (
            <Chave
              key={numero.id}
              numero={numero}
              numeroCorreto={NUMERO_CORRETO}
            ></Chave>
          ))
        ) : (
          <strong>Sem numeros</strong>
        )}
      </div>

      {numeros.some((chave) => chave.valor === NUMERO_CORRETO) ? (
        <button onClick={reset}>Começar de novo</button>
      ) : (
        <button onClick={adicionarNumero}>Gerar numero aleatorio</button>
      )}
    </div>
  );
}

export default App;
