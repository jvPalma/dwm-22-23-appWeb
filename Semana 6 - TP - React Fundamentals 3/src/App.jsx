/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, useCallback } from "react";

const alunosAUX = [
  { numero: 123, username: "asd1", nome: "João" },
  { numero: 124, username: "asd2", nome: "Pedro" },
  { numero: 125, username: "asd3", nome: "Vieira" },
  { numero: 126, username: "asd4", nome: "Palma" },
];

function App() {
  const [alunos, setList] = useState(alunosAUX);

  // HOOKS -
  // useState
  // useEffect
  // useReducer --> redux
  // useMemo
  // useCallBack

  const numero = 5;

  useEffect(() => {
    console.log("API REQUEST");
    console.log("Mount");

    return () => {
      console.log("Unmount");
      console.log(" clear previous API REQUEST");
    };
  }, []);

  useEffect(() => {
    // render 1º --> 1x
    // render 2º --> 2x
    // render 3º --> 3x

    // 1 - render 1º --> 1x
    console.log(" paginação (limit = 10, page =1)  "); // guardamos a info da API numa var

    // 3 - render 2º --> 2x
    console.log(" paginação (limit = 10, page =2)  "); // guardamos a info da API numa var

    return () => {
      // 2 render 1º --> null
      // vai preparar o codigo para limpar os dados do 1 render na var -> e depois é que executa o codigo o useEffect em si
      // 4 render 2º --> 1x
      // vai preparar o codigo para limpar os dados do 2 render na var -> e depois é que executa o codigo o useEffect em si
      // render 3º --> 2x
      // vai preparar o codigo para limpar os dados do 3 render na var -> e depois é que executa o codigo o useEffect em si
    };
  }, [alunos]);

  const functionName = () => console.log("teste");

  const alunosRender = useMemo(() => {
    const str = " com username: ";
    return alunos.map((aluno, INDEX) => (
      <h5 key={aluno.numero} id={aluno.numero}>
        {aluno.nome + str + aluno.username}
      </h5>
    ));
  }, [alunos]);

  const functionToCreateAlunosH5 = (listaDeAlunos) => {
    return listaDeAlunos.map((aluno) => (
      <h5 key={aluno.numero} id={aluno.numero}>
        {aluno.nome + " exemplo callback: " + aluno.username}
      </h5>
    ));
  };

  const functionToCreateAlunosH5callback = useCallback(
    (lista) => {
      return lista.map((aluno) => (
        <h5 key={aluno.numero} id={aluno.numero}>
          {alunos.length + aluno.nome + " exemplo callback: " + aluno.username}
        </h5>
      ));
    },
    [alunos.length]
  );

  const varasdasd1 = functionToCreateAlunosH5callback(alunos);

  console.log("tamanho lista: ", alunos.length);

  return (
    <div>
      {varasdasd1}
      <button
        onClick={() => {
          const newList = [...alunos];
          newList.push({
            numero: 166,
            username: "NEWALUNO",
            nome: "NEW ALUNO NOME",
          });
          setList(newList);
        }}
      >
        ADD ITEM TO LIST
      </button>
    </div>
  );
}

export default App;
