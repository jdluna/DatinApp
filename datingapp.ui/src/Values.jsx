import React, { Component } from "react";
import ValueService from "./services/valuesService";

class Values extends Component {
  state = {
    values: []
  };

  async componentDidMount() {
    const response = await ValueService.getValues();
    console.log("values : ", response.data);
  }

  render() {
    return <div />;
  }
}

export default Values;
