import { useState, useCallback, useMemo, useEffect } from 'react';

function CallbackExample() {
  const [num, setNum] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const calculateNumber = useCallback(
    (newNum) => {
      return num * newNum;
    },
    [num]
  );

  const randomNum1 = useMemo(() => {
    //numero aleatorio entre 6 e 9
    return Math.floor(Math.random() * (9 - 6) + 6);
  }, []);

  const randomNum2 = useMemo(() => {
    //numero aleatorio entre 11 e 14
    return Math.floor(Math.random() * (14 - 11) + 11);
  }, []);

  const darkThemeStyle = useMemo(() => {
    return {
      background: darkTheme ? '#000' : '',
      color: darkTheme ? '#fff' : '',
    };
  }, [darkTheme]);

  useEffect(() => {
    console.log('change on number');
  }, [calculateNumber]);

  useEffect(() => {
    console.log('color changed');
  }, [darkTheme]);

  return (
    <div className="content" style={darkThemeStyle}>
      <div className="theme-btn">
        {darkTheme ? (
          <button onClick={() => setDarkTheme(false)}>☀</button>
        ) : (
          <button onClick={() => setDarkTheme(true)}>☾</button>
        )}
      </div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>
        {calculateNumber(2)} <span>({num} x 2)</span>
      </p>
      <p>
        {calculateNumber(5)} <span>({num} x 5)</span>
      </p>
      <p>
        {calculateNumber(randomNum1)}{' '}
        <span>
          ({num} x {randomNum1})
        </span>
      </p>
      <p>
        {calculateNumber(10)} <span>({num} x 10)</span>
      </p>
      <p>
        {calculateNumber(randomNum2)}{' '}
        <span>
          ({num} x {randomNum2})
        </span>
      </p>
    </div>
  );
}

export default CallbackExample;
