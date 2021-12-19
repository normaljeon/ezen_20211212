import React, { useEffect, useState } from "react";

const Day02_test8 = () => {
  // let count = 1;
  // console.log(count + " - 초기값");
  // const increment = () => {
  //   count = count + 1;
  //   console.log(count);
  // };
  // const decrement = () => {
  //   count = count - 1;
  //   console.log(count);
  // };

  // return (
  //   <div>
  //     <h2>숫자:{count}</h2>
  //     <p>
  //       <button onClick={increment}>증가</button>
  //       <button onClick={decrement}>감소</button>
  //     </p>
  //   </div>
  // );

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const increment1 = () => {
    // 일괄처리로 간주함 (마지막 줄만))
    // setCount(count + 1);
    // setCount(count + 1);

    // 연속된 state 계산은 setCount( 매개변수(이전값) => 매개변수(이전값) + 1 ) 패턴으로 표현
    setCount((xxx) => xxx + 1);
    setCount((yyy) => yyy + 1);
  };
  const decrement1 = () => {
    setCount(count - 1);
    setCount(count - 1);
  };

  const increment2 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h2>숫자:{count}</h2>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </p>
      <p>
        <button onClick={increment1}>2증가</button>
        <button onClick={decrement1}>2감소</button>
      </p>
      <p>
        <button onClick={increment2}>5증가</button>
      </p>
    </div>
  );
};

export default Day02_test8;
