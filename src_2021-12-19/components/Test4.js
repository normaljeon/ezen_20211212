import React from "react";
import "./Test4.css";

const Test4 = () => {
  return (
    <div>
      <h2>클래스 적용</h2>
      {/* <div class="con-box"> */}
      {/* 퍼블리셔 : html -> FE개발자 : 리액트 변경할 땐, class를 쓰면 안된다.  */}
      <p>class는 자바스크립트에서 사용하는 키워드</p>
      <div className="con-box">
        <article>test</article>
        <article>test</article>
        <article>test</article>
        <article>test</article>
      </div>
    </div>
  );
};

export default Test4;
