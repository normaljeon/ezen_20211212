import React from "react";

const Day02_Test10 = () => {
  // event, evt, e
  const onView = (e) => {
    console.log(e.target); // 가리키는 대상
    console.log(e.currentTarget); // 이벤트가 걸려있는 대상
  };
  return (
    <div>
      <button onClick={onView}>
        <span>확인확인</span>
        <b>클릭클릭</b>
      </button>
    </div>
  );
};

export default Day02_Test10;
