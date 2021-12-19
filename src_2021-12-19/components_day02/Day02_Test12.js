import React, { useRef } from "react";

const Day02_Test12 = () => {
  const nameRef = useRef(null);
  const pwRef = useRef(null);

  const onData = () => {
    const data = { name: nameRef.current.value, pw: pwRef.current.value };
    const json = JSON.stringify(data, null, 5);
    // mdn - JSON 검색 stringify  키값이 변수 (data) vs. 키값이 문자열 (json)
    console.log(data);
    console.log(json);
  };
  return (
    <div>
      {/* useRef 수업용 : 사용가능하나 좋은 예는 아니다. */}
      <input type="text" ref={nameRef} />
      <input type="text" ref={pwRef} />
      <button onClick={onData}>확인</button>
    </div>
  );
};

export default Day02_Test12;
