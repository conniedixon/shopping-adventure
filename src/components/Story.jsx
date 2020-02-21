import React from "react";

class Story extends React.Component {
  state = {
    story: {
      french:
        "Quel dommage! Après une nuit de beuverie extrême, vous vous réveillez et vous souvenez que votre meilleur ami vous rend visite à Paris. Vous aimeriez ramasser quelques choses pour qu'elle s'épanouisse pendant son séjour. Cliquez sur l'article qui correspond au mot français dans votre liste d'achats pour le mettre dans votre panier.",
      english:
        "Oh no! After a night of extreme binge drinking, you wake up and remember your best friend is visiting you in Paris. You would like to pick up a few things for her to gorge on during her stay. Click the item that matches the french word in your shopping list to put it in your basket. "
    },
    currentLanguage: "french"
  };

  toggleLanguage = () => {
    this.setState(currentState => {
      return {
        currentLanguage:
          currentState.currentLanguage === "french" ? "english" : "french"
      };
    });
  };

  render() {
    return (
      <section id="story">
        <p>{this.state.story[this.state.currentLanguage]}</p>
        <button onClick={this.toggleLanguage}>
          {this.state.currentLanguage === "french"
            ? "Show Translation"
            : "Show Original"}
        </button>
      </section>
    );
  }
}

export default Story;
