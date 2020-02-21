import React from "react";

const Basket = props => {
  return (
    <aside id="basket">
      <br />
      <h3>Basket</h3>
      {props.basketItems.map(item => {
        return <p key={item.english}>{item.french}</p>;
      })}
    </aside>
  );
};

export default Basket;
