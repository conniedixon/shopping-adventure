import React from "react";

const List = ({ currentItem }) => {
  return (
    <>
      <aside id="list">
        <h3> Liste de courses: </h3>
        <p>{currentItem.french}</p>
      </aside>
    </>
  );
};

export default List;
