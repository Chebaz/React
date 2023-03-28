import React, { Component } from "react";

const LanguageContext = React.createContext("en");
class LanguageProvider extends Component {
  state = { selectedLanguage: "en" };

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.selectedLanguage}>
        <div>
          <h1>Language: {this.state.selectedLanguage}</h1>
          <select
            value={this.state.selectedLanguage}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
            <option value="fr">Francais</option>
          </select>
          {this.props.children}
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
