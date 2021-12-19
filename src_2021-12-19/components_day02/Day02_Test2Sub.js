import React from "react";
import PropTypes from "prop-types";

const Day02_Test2Sub = (props) => {
  return (
    <div style={{ border: "2px solid red", padding: 25, margin: 30 }}>
      <ul>
        <li>이름:{props.name} </li>
        <li>나이:{props.age} </li>
        <li>주소: {props.addr} </li>
        <li>전화: {props.tel} </li>
        <li>컬러: {props.color} </li>
        <li>참거짓: {props.done ? "참" : "거짓"} </li>
      </ul>
    </div>
  );
};

Day02_Test2Sub.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  addr: PropTypes.string,
  color: PropTypes.string,
  done: PropTypes.bool,
};

Day02_Test2Sub.defaultProps = {
  name: "아무개",
  age: 999,
  addr: "서울",
  color: "green",
  tel: "010-0000-0000",
  done: false,
};

export default Day02_Test2Sub;
