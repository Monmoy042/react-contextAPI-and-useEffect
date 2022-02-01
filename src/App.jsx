import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am Clicked!");
    console.log("I am Clicked Again");
  }, [num]);

  const clickMe = () => {
    setNum(num + 1);
  };

  const clickMe2 = () => {
    setNums(nums + 1);
  };

  return (
    <>
      <button onClick={clickMe}>Click Me {num} </button>
      <br />
      <button onClick={clickMe2}>Click Me {nums} </button>
    </>
  );
};

export default App;
