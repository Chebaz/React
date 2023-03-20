import React from "react";

export default class UncotrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const nome = this.inputRefName.value;
    const password = this.inputRefPsw.value;
    const check = this.inputCheck.value;
    console.log(`nome: ${nome} password: ${password} check:${check}`);
  };
  handleReset = () => {
    this.inputRefName.value = "";
    this.inputRefPsw.value = "";
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(input) => {
              this.inputRefName = input;
            }}
          />
          <input
            type="password"
            ref={(password) => {
              this.inputRefPsw = password;
            }}
          />
          <input
            type="checkbox"
            ref={(check) => {
              this.inputCheck = check;
            }}
          />
          <button type="submit">Submit</button>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
