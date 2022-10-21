import { useState, useCallback, useEffect } from 'react';

function CallbackExample() {
  const [num, setNum] = useState(10);
  const [redColor, setRedColor] = useState(false);

  // const getNum = () => {
  //   return num * 2;
  // };

  // const getNum = useCallback(() => {
  //   return num * 2;
  // }, [num]);

  const getNum = useCallback(
    (newNum) => {
      return num * newNum;
    },
    [num]
  );

  const colorStyle = { background: redColor ? '#ff0000' : '' };

  useEffect(() => {
    console.log('change on number');
  }, [getNum]);

  return (
    <div>
      {/* <p>{getNum()}</p> */}
      <p>{getNum(5)}</p>
      <button onClick={() => setNum((prev) => prev + 1)}>+1</button>
      <button onClick={() => setRedColor((prev) => !prev)} style={colorStyle}>
        toggle color
      </button>
    </div>
  );
}

export default CallbackExample;
