import React, { useState } from "react";

const Day02_test7 = () => {
  const [visible, setVisble] = useState(false);

  const onShow = () => {
    setVisble(true);
  };
  const onHide = () => {
    setVisble(false);
  };
  const onToggle = () => {
    // setVisble(visible ? false : true);
    setVisble(!visible);
  };

  return (
    <div>
      <p>
        <button onClick={onShow}>보이기</button>
        <button onClick={onHide}>숨기기</button>

        {/* <button onClick={onToggle}>보이기/숨기기</button> */}
        <button onClick={onToggle}>{visible ? "숨기기" : "보이기"}</button>
      </p>
      {visible ? (
        <div
          style={{ width: 400, height: 150, margin: 10, background: "tomato" }}
        ></div>
      ) : null}
      <hr />
      {visible && (
        <div
          style={{ width: 400, height: 150, margin: 10, background: "tomato" }}
        ></div>
      )}
    </div>
  );
};

export default Day02_test7;
