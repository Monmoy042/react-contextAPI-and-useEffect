import React, { useEffect, useState } from "react";

const ClickMe = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You have clicked me ${num} times`;
  }, [num]);

  const clickEvent = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1>Title Change App</h1>
      <button onClick={clickEvent}>Click Me {num}</button>
    </>
  );
};

export default ClickMe;
