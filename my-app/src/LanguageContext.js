import React from "react";
const LanguageContext = React.createContext("en");

export default class LanguageProvider extends React.Component {
  state = {
    language: "en",
  };

  setLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
