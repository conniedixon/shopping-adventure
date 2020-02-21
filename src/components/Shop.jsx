import React from "react";

const Shop = props => {
  return (
    <>
      <main>
        {props.shopItems.map(item => {
          return (
            <section key={item.english}>
              <img
                src={`${window.location.origin}${item.img}`}
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
