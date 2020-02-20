import React from "react";

const Shop = props => {
  return (
    <>
      <main>
        {props.shopItems.map(item => {
          return (
            <section key={item.english}>
              {console.log(item)}
              <img
                src={item.img}
                alt={item.english}
                onClick={props.handleAttempt}
              ></img>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default Shop;
