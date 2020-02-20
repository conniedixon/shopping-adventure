import React from "react";
import "./App.css";

import Shop from "./components/Shop";
// import Basket from "./components/Basket";
import List from "./components/List";

class App extends React.Component {
  state = {
    currentItem: "Baguette",
    shopItems: [
      {
        english: "Baguette",
        french: "Une baguette",
        img:
          "https://lh3.googleusercontent.com/proxy/_zbnrWUfRWkmFslllChTVDDU5ysmwAwmf1yad_s0A8HctXBYuFHysKx4XdXstwPMmPEur3_xb8s4pOyMNJGRpiIkErRV9ud7w-nGunRQd-ap08s01ulBWs899A14NwqVb0uQCw"
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
        img: "https://www.neuhauser.fr/uploads/product/400481.jpg"
      },
      {
        english: "Pain au chocolat",
        french: "Un pain au chocolat",
        img:
          "https://medias.bridordefrance.com/media/sys_master/images/h6b/h50/8826251542558.png"
      },
      {
        english: "Macaron",
        french: "Un macaron",
        img:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bywoops.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fwoops-macaron-honey-lavender.jpg&imgrefurl=https%3A%2F%2Fwww.bywoops.com%2Fproduct%2Fhoney-lavender%2F&tbnid=pV1-dB3gSMKPCM&vet=12ahUKEwjXrsXQs-DnAhVO44UKHVecBD4QMyhKegUIARDOAQ..i&docid=yGIqrNo2vIOFeM&w=1333&h=886&q=macaron&ved=2ahUKEwjXrsXQs-DnAhVO44UKHVecBD4QMyhKegUIARDOAQ"
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
        img:
          "https://www.commander-insudiet.fr/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biscuits-facon-petits-beurre_format_web.png"
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

  handleAttempt = event => {
    const { target } = event;
    if (target.alt === this.state.currentItem) {
      console.log("correct! :)");
    } else {
      console.log("Booo idiot, don't you know french?! ");
    }
  };

  setCurrentItem = item => {
    this.setState(currentState => {
      return {
        currentItem: item
      };
    });
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping Adventure</h1>
          <h3>Allons faire du shopping!</h3>
        </header>
        <List
          listItems={this.randomiseList(
            this.state.shopItems.map(item => item.french)
          )}
        />
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
