import { useState, useMemo, useEffect } from 'react';

function MemoExample() {
  const [num, setNum] = useState(10);
  const [redColor, setRedColor] = useState(false);

  // const doubledNum = double(num);
  const doubledNum = useMemo(() => double(num), [num]);

  // const colorStyle = { background: redColor ? '#ff0000' : '' };
  const colorStyle = useMemo(
    () => ({ background: redColor ? '#ff0000' : '' }),
    [redColor]
  );

  useEffect(() => {
    console.log('color changed');
  }, [colorStyle]);

  function double(n) {
    for (let i = 0; i < 999999999; i++) {}

    return n * 2;
  }

  return (
    <div>
      <p>{doubledNum}</p>
      <button onClick={() => setNum((prev) => prev + 1)}>add</button>
      <button onClick={() => setRedColor((prev) => !prev)} style={colorStyle}>
        toggle color
      </button>
    </div>
  );
}

export default MemoExample;
