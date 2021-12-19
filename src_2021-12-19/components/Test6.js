import React from "react";

const Dog = (props) => {
  return (
    <div>
      <h2>나는 {props.name} 입니다.</h2>
    </div>
  );
};

const Cat = (props) => {
  return (
    <div>
      <h2>나는 {props.name} 입니다.</h2>
    </div>
  );
};

const Test6 = () => {
  return (
    <div>
      {/* < 자식컴포넌트 변수 = 값 > */}
      <Cat name="강아지" />
      <hr />
      <Cat name="고양이" />
    </div>
  );
};

export default Test6;
