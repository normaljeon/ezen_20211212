import React, { useState } from "react";
import "./Day02_Test9.css";

const Day02_Test9 = () => {
  const [isClass, setIsClass] = useState(false);

  const onAdd = () => {
    setIsClass(true);
  };
  const onRemove = () => {
    setIsClass(false);
  };
  const onToggle = () => {
    setIsClass(!isClass);
  };
  return (
    <div className="wrap">
      <p className="test on">오늘은 일요일 입니다.</p>
      <p className="on">오늘은 일요일 입니다.</p>
      <p className="on1">오늘은 일요일 입니다.</p>
      <hr />
      {/* test on */}
      {/* <p className={`test ${isClass && "on"}`}>오늘은 일요일 입니다.</p> */}
      <p className={`test ${isClass ? "on" : ""}`}>오늘은 일요일 입니다.</p>
      {/* on */}
      <p className={isClass && "on"}>오늘은 일요일 입니다.</p>
      {/* on1 */}
      <p className={isClass ? "on1" : ""}>오늘은 일요일 입니다.</p>
      <div>
        <button onClick={onAdd}>addClass</button>
        <button onClick={onRemove}>removeClass</button>
        <button onClick={onToggle}>toggleClass</button>
      </div>
      <p className="">오늘은 일요일 입니다.</p>
    </div>
  );
};

export default Day02_Test9;
