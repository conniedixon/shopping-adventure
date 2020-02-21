import React from "react";
import "./App.css";
import Croissant from "./assets/croissant.jpg";
import Biscuit from "./assets/biscuit.png";
import Baguette from "./assets/baguette.jpeg";
import Macaron from "./assets/macaron.jpeg";
import PainAuChocolat from "./assets/painauchocolat.png";

import Shop from "./components/Shop";
// import Basket from "./components/Basket";
import List from "./components/List";

class App extends React.Component {
  state = {
    currentItem: {
      english: "Baguette",
      french: "Une baguette",
      img: Baguette
    },
    shopItems: [
      {
        english: "Baguette",
        french: "Une baguette",
        img: Baguette
      },
      {
        english: "Eclair",
        french: "Un eclair",
        img:
          "https://laduree-laduree-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/540/405/1da267c93ec833de057e01551144fd1f0bc07135_image-6016-1.png"
      },
      {
        english: "Croissant",
        french: "Un croissant",
        img: Croissant
      },
      {
        english: "Pain au chocolat",
        french: "Un pain au chocolat",
        img: PainAuChocolat
      },
      {
        english: "Macaron",
        french: "Un macaron",
        img: Macaron
      },
      {
        english: "Madeleine",
        french: "Une madeleine",
        img:
          "https://cdn.shopify.com/s/files/1/0006/7698/6938/products/Madeleines_bg_yellow_2048x.jpg?v=1564443850"
      },
      {
        english: "Biscuit",
        french: "Un biscuit",
        img: Biscuit
      }
    ],
    lives: [null, null, null],
    basketItems: []
  };

  randomiseList = list => {
    return [...list].sort((item1, item2) => {
      return 0.5 - Math.random();
    });
  };

  setCurrentItem = () => {
    const newCurrentItem = this.randomiseList(this.state.shopItems)[0];
    this.setState(currentState => {
      return { currentItem: newCurrentItem };
    });
  };

  handleAttempt = event => {
    const { target } = event;
    const chosenItem = this.state.shopItems.find(
      item => item.english === target.alt
    );
    if (chosenItem.english === this.state.currentItem.english) {
      this.setCurrentItem();
      console.log("correct :)");
    } else {
      console.log("Booo idiot, don't you know french?! ");
    }
  };

  // setCurrentItem = item => {
  //   this.setState(currentState => {
  //     return {
  //       currentItem: item
  //     };
  //   });
  // };

  render() {
    return (
      <>
        <header>
          <h1>Shopping Adventure</h1>
          <h3>Allons faire du shopping!</h3>
        </header>
        <List currentItem={this.state.currentItem} />
        <Shop
          shopItems={this.randomiseList(this.state.shopItems)}
          handleAttempt={this.handleAttempt}
        />
        {/* <Basket basketItems={this.state.basketItems} /> */}
      </>
    );
  }
}

export default App;
