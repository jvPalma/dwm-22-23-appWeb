/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const alunosAUX = [
  { numero: 123, username: "asd1", nome: "João" },
  { numero: 124, username: "asd2", nome: "Pedro" },
  { numero: 125, username: "asd3", nome: "Vieira" },
  { numero: 126, username: "asd4", nome: "Palma" },
];

function App() {
  const [alunos, setList] = useState(alunosAUX);

  // <h5> numero </h5>
  return (
    <div>
      {alunos.map((aluno, INDEX) => (
        <h5 key={aluno.numero} id={aluno.numero}>
          {aluno.nome + " com username: " + aluno.username}
        </h5>
      ))}
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
  //   const [name, setName] = useState("João from state");
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     // console.log("mount App");
  //     console.log(count);
  //   }, [count]);

  //   return (
  //     <div>
  //       {/* <h2>teste</h2> */}
  //       <Example1 name={name} />
  //       <button
  //         onClick={() => {
  //           setName("counter - " + count);
  //         }}
  //       >
  //         Click me
  //       </button>
  //       <button
  //         onClick={() => {
  //           setCount(count + 1);
  //         }}
  //       >
  //         add +1 to counter
  //       </button>
  //     </div>
  //   );
}

function Example1(props) {
  //   useEffect(() => {
  //     console.log("mount Example1");
  //   }, []);
  return <h1>{props.name}</h1>;
}

function Example2(props) {
  return (
    <h1>
      {props.firstName} {props.lastName}
    </h1>
  );
}

export default App;
