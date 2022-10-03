function Example1(props) {
  return <h1>{props.name}</h1>;
}

function Example2(props) {
  return (
    <h1>
      {props.firstName} {props.lastName}
    </h1>
  );
}

function App() {
  return (
    <div>
      <h2>teste</h2>
      <Example1 name="Pedro"></Example1>
      <Example2 firstName="João" lastName="Palma"></Example2>
    </div>
  );
}

export default App;
