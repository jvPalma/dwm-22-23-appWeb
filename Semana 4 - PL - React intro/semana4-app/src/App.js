import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#ffffff');

  function changeColor(newColor) {
    if (newColor === 'red') setColor('#ff0000');
    if (newColor === 'green') setColor('#00ff00');
    if (newColor === 'blue') setColor('#0000ff');
    if (newColor === 'white') setColor('#ffffff');
  }

  return (
    <div class="container" style={{ background: color }}>
      <h1>Muda a cor da pagina!</h1>

      <button onClick={() => changeColor('red')}>Vermelho</button>
      <button onClick={() => changeColor('green')}>Verde</button>
      <button onClick={() => changeColor('blue')}>Azul</button>
      <button onClick={() => changeColor('white')}>Branco</button>

      {color !== '#ffffff' && <h3>You changed the color</h3>}
    </div>
  );
}

export default App;
