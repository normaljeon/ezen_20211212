import React from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({ data }) => {
  return (
    <ul className="list">
      {data.map((item) => {
        return <BusinessItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default BusinessList;
