import React from "react";
import Test2Sub from "./Day02_Test2Sub";

const Day02_Test2 = () => {
  return (
    <div>
      <Test2Sub
        name="송혜교"
        age={20}
        addr="서울"
        tel="010-0000-1111"
        color="tomato"
        done={true}
      />
      <hr />
      <Test2Sub name="김도현" addr="제주" tel="010-1111-2222" color="skyblue" />
      <hr />
      <Test2Sub name="홍길동" age={30} />
      <hr />
      <Test2Sub />
    </div>
  );
};

export default Day02_Test2;
