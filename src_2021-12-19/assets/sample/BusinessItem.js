import React from "react";

const BusinessItem = ({ item }) => {
  const { id, image, title, titleeng, des } = item;

  // 아래와 같이 한줄로는 못씀... props가 복수면 받을 수 없게 됨
  // const BusinessItem = ({ id, image, title, titleeng, des }) => {
  return (
    <li>
      <a href="#">
        <div>
          <img src={image} alt="" />
        </div>
        <h3>
          {title}
          <span>{titleeng}</span>
        </h3>
        <p>{des}</p>
      </a>
    </li>
  );
};

export default BusinessItem;
