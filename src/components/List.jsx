import React from "react";

const List = ({ listItems }) => {
  return (
    <>
      <h4> Liste de courses: </h4>
      <p>{listItems[0]}</p>
    </>
  );
};

export default List;
