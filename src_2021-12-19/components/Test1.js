import React from "react";

const Test1 = () => {
  return (
    <>
      <h2>JSX문법</h2>
      <p>한줄이상일 경우 div, Fragment(그룹) 처리한다.</p>
      <p> Fragment = 공백태그</p>

      {/* 주석 */}
      {/* 실제 빈태그의 종류(Fragment와 별개임) : img , input , br , hr */}
      <p
      // 한줄 주석
      /* 
            여러줄 주석
       */
      >
        나는 연습입니다.
      </p>
    </>
  );
};

export default Test1;
