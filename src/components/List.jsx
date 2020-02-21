import React from "react";

const List = ({ currentItem }) => {
  return (
    <>
      <aside>
        <h4> Liste de courses: </h4>
        <p>{currentItem.french}</p>
      </aside>
    </>
  );
};

export default List;
