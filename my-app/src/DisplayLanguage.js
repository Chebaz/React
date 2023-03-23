import React from "react";
import LanguageContext from "./LanguageContext";
export default class DisplayLanguage extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { language } = this.context;

    return <p>la lingua selezionata è {language}</p>;
  }
}
