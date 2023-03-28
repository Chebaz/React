import React from "react";

const LanguageContext = React.createContext("en");
export default class LanguageProvider extends React.Component {
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
        </div>
      </LanguageContext.Provider>
    );
  }
}
