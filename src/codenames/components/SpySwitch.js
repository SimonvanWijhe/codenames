import React, { Component } from "react";
import Switch from "react-switch";

export default class SpySwitch extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.props.onSpySwitchChange(checked);
  }

  render() {
    const checked = this.props.spySwitch;
    return (
      <label className="d-flex mb-0">
        <span>Spieken: </span>
        <Switch
          onChange={this.handleChange}
          checked={checked}
          className={"ml-1"}
        />
      </label>
    );
  }
}
