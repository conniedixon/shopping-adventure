import React from "react";
import "./App.css";
import boulangerie from "./data/boulangerie.json";
import marché from "./data/marché.json";

import Shop from "./components/Shop";
import List from "./components/List";
import Basket from "./components/Basket";
import Story from "./components/Story";

class App extends React.Component {
  state = {
    defaultCurrentItem: {
      english: "DefaultItem",
      french: "",
      img: ""
    },
    currentItem: this.defaultCurrentItem,
    shopItems: [],
    levels: { 1: boulangerie, 2: marché },
    currentLevel: 1,
    basketItems: []
  };

  componentDidMount() {
    this.setShopItems();
  }

  componentDidUpdate() {}

  setShopItems = level => {
    this.setState(currentState => {
      return {
        shopItems: currentState.levels[currentState.currentLevel].shopItems
      };
    }, this.setCurrentItem);
  };

  randomiseList = list => {
    return [...list].sort((item1, item2) => {
      return 0.5 - Math.random();
    });
  };

  moveCurrentItemToBasket = CB => {
    this.setState(currentState => {
      return {
        basketItems: [...currentState.basketItems, currentState.currentItem],
        shopItems: [...currentState.shopItems].filter(
          item => item.english !== currentState.currentItem.english
        )
      };
    }, CB);
  };

  progressLevel = CB => {
    this.setState(currentState => {
      return { currentLevel: ++currentState.currentLevel };
    }, CB);
  };

  setCurrentItem = () => {
    this.setState(currentState => {
      const newCurrentItem = this.randomiseList(this.state.shopItems)[0];
      return { currentItem: newCurrentItem };
    });
  };

  setMessage = message => {
    this.setState(currentState => {
      return { message };
    });
  };

  handleAttempt = event => {
    const { target } = event;
    const chosenItem = this.state.shopItems.find(
      item => item.english === target.alt
    );
    if (
      chosenItem.english === this.state.currentItem.english &&
      this.state.shopItems.length > 1
    ) {
      this.moveCurrentItemToBasket(this.setCurrentItem);
      this.setMessage("Tres bien! \u2713");
      console.log("correct :)");
    } else if (
      chosenItem.english === this.state.currentItem.english &&
      this.state.shopItems.length === 1
    ) {
      this.moveCurrentItemToBasket(this.setCurrentItem);
      this.setMessage(
        "Bien joué! votre panier est plein. Cliquez ici pour passer au niveau suivant."
      );
    } else {
      console.log("Booo idiot, don't you know french?! ");
      this.setMessage("Mais non! Réessayez \u2718");
    }
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping Adventure</h1>
          <h3>Allons faire du shopping!</h3>
        </header>
        <Story />
        <Shop
          shopItems={this.randomiseList(this.state.shopItems)}
          handleAttempt={this.handleAttempt}
        />
        <List
          currentItem={this.state.currentItem || this.state.defaultCurrentItem}
        />
        {this.state.message && <p id="message">{this.state.message}</p>}
        <Basket basketItems={this.state.basketItems} />
      </>
    );
  }
}

export default App;
