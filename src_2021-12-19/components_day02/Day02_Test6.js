import React, { useState } from "react";

const Day02_Test6 = () => {
  const [bgColor, setBgcolor] = useState("pink");

  // 클릭 함수 bgColor
  // pink => tomato, 글자, 배경색
  return (
    <div>
      <p>문제:h1을 클릭시 배경색 바꾸기</p>
      <h1
        onClick={() => {
          // 아래 코드 생각 못했다;; (물론 베스트는 아닌 것 같긴하다.)
          setBgcolor(bgColor === "pink" ? "tomato" : "pink");
        }}
        style={{
          border: "1px solid #000",
          padding: 20,
          margin: 10,
          backgroundColor: bgColor,
          cursor: "pointer",
        }}
      >
        배경색 : {bgColor}
      </h1>
    </div>
  );
};

export default Day02_Test6;
