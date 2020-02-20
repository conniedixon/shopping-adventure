import React from "react";

const Shop = props => {
  return (
    <>
      <main>
        {props.shopItems.map(item => {
          return (
            <section>
              <img src={item.img} alt={item.english}></img>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default Shop;
