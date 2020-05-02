import React, { Component } from 'react'
import Slider from './Slider'
import '../styles/button.scss'
import Icon from './Icon'
export default class Blinds extends Component {
  state = {
    temperatures: [
      { id: 3, name: "Temperature", roomId: 1, value: 21, warm: null },
      { id: 16, name: "Temperature", roomId: 2, value: 22, warm: null },
      { id: 26, name: "Temperature", roomId: 3, value: 19, warm: null },
    ]
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h3>Temperatures</h3>
          <div className="">
            {this.state.temperatures.map((temperature) => (
              <div key={temperature.id}>
                <p style={{ color: "coral" }}>In room {temperature.roomId}</p>
                <p>Temperature is {temperature.value} °C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
