import React, { useRef, useState } from "react";

// Ref(.current) 와 state를 동시에 이해 해야하며, 남용하면 안됨

// useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
// useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

// https://ko.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper
// https://ko.reactjs.org/docs/hooks-reference.html#useref

const Day02_Test11 = () => {
  const nameRef = useRef();
  const [username, setUsername] = useState("");
  const [userpw, setUserpw] = useState("");

  const changeInput1 = (e) => {
    setUsername(e.target.value);
  };
  const changeInput2 = (e) => {
    const { value } = e.target;
    setUserpw(value);
  };

  const onReset = () => {
    setUsername("");
    setUserpw("");
    nameRef.current.focus(); // 많이 사용하는 Ref예시
  };

  return (
    <div>
      <p>
        <input
          type="text"
          onChange={changeInput1}
          value={username}
          ref={nameRef}
        />
        <input type="text" onChange={changeInput2} value={userpw} />

        <button onClick={onReset}>초기화</button>
      </p>
      <h3>아이디: {username} </h3>
      <h3>비밀번호: {userpw} </h3>
    </div>
  );
};

export default Day02_Test11;
