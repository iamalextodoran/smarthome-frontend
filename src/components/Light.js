import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Toggle from './Toggle'
import Toast, { notify } from './Toast'

export default class Light extends Component {
  state = {
    isAnyLightOn: true,
    lightsOn: 21,
    totalLights: 30,
  }

  componentWillMount() {
    this.state.lightsOn === 0 ? this.setState({isAnyLightOn: false}): this.setState({isAnyLightOn: true});
  }

  lightSwitch = () => {
    this.setState({ isAnyLightOn: !this.state.isAnyLightOn });
    if (this.state.isAnyLightOn) {
      this.setState({ lightsOn: 0 })
      notify("Turned off all", "primary")
    } else {
      this.setState({ lightsOn: this.state.totalLights })
    }
  }

  render() {
    return (
      <div className="card">
        <Toast />
        <div className="layout-row layout-align-space-between-center">
          <Icon icon="fas fa-lightbulb" size="40" color={this.state.lightsOn === 0 ? "grey" : "gold"} />
          <div className="layout-column layout-align-end-end">
            <h2 style={{ paddingLeft: "5px" }}>Lights</h2>
            <p style={{ marginLeft: "0px", marginTop: "-25px" }}>{this.state.lightsOn} out of {this.state.totalLights}</p>
          </div>
          <Toggle id="1" name="lights" onChange={this.lightSwitch} checked={this.state.isAnyLightOn} />
        </div>
      </div>
    )
  }
}