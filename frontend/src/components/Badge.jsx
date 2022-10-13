import React from "react";

const Badge = ({ item, bgColor }) => {
  return (
    <div
      className={`rounded text-md text-center justify-center mr-2 px-2.5 py-0.5 my-1 inline-flex items-center`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {item}
    </div>
  );
};

export default Badge;
