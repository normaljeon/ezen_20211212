import React, { useState } from "react";

const Day02_Test5 = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const onName1 = (e) => {
    // setter(값, 수식)
    // setName(e.target.value);
    console.log(e.target);
  };
  const onName2 = () => {
    setName("전지현");
  };
  const onName3 = () => {
    setName("유재석");
  };

  return (
    <div>
      <h2>
        이름 {name} / 컬러 {color}
      </h2>
      <p>
        {/* <button onClick={onName1()}>송혜교</button> */}
        <button onClick={onName1}>송혜교</button>
        <button onClick={onName2}>전지현</button>
        <button onClick={onName3}>유재석</button>
      </p>
      <p>
        <button onClick={() => setColor("pink")}>pink</button>
        <button onClick={() => setColor("tomato")}>tomato</button>
        <button onClick={() => setColor("skyblue")}>skyblue</button>
      </p>
    </div>
  );
};

export default Day02_Test5;

/*
    useState : 값이 유동으로 변할 때

    import React, { useState } from 'react';
    const [변수, 함수] = useState(초기값)
    const [변수, 함수] = React.useState(초기값)

    const [상태데이터, 상태데이터를변경도와주는함수] = React.useState(초기값)
    const [상태데이터, 상태를 위한 setter함수] = React.useState(초기값)

    초기값 : 문자, 숫자, {}, []
    const [A, B] = useState(0);
    A = 0;
    A = B(10) => A = 10

    // 암묵적 약속 : set 다음의 첫문자는 대문자(setter함수의 네번째글자는 대문자)
    const [abc, setAbc] = useState(0);
*/
