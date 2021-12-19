import React from "react";

const Test2 = () => {
  // 함수영역 if , for , foreach 등등
  const title = "신상명세서";
  const name = "홍길동";
  const age = 20;
  const addr = "서울";
  const tel = "010-0000-1111";

  return (
    <>
      {/* jsx영역은 (1) if문/for문 등 사용못함 * (2) <h2></h2>와 같은 태그는 js이다. html이 아니다. */}
      <h2>{title}</h2>
      <ul>
        {/* 단축키 : opt + shift + 화살표-아래 */}
        <li>이름: {name}</li>
        <li>나이: {age}</li>
        <li>주소: {addr}</li>
        <li>전화: {tel}</li>
      </ul>
      {/* 주석 */}
      <p
      // 한줄
      >
        신상명세서 입니다.
      </p>
    </>
  );
};

export default Test2;
