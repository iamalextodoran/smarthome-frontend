import React, { Component } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Input from '../components/Input'
import Modal from '../components/Modal'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchRoomsforUser, createRoom } from "../actions/roomsActions";

class Home extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.props.fetchRoomsforUser(1)
    }
  }
  state = {
    showModal: false,
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  newRoom = () => {
    const data = { 
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      temperature: this.state.temperature,
      UserId: 1 
    };
    
    this.props.createRoom(data);
    this.setState({ name: '', description: '', image: '', value: '', temperature: '', showModal: false })
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout-row layout-align-end-start flex-wrap flex-70">
          <div className="layout-row layout-align-space-between-start flex-wrap">
            {this.props.rooms.rooms.length > 0 ? this.props.rooms.rooms.map((room) => (
              <div key={room.id} className="card flex-33" style={{ minHeight: "425px" }}>
                <h1>{room.name}</h1>
                <p>{room.description}</p>
                <div className="layout-row layout-align-space-between-center">
                  <div className="layout-column layout-align-none-center flex-60">
                    <img src={room.image} alt={room.name} style={{ borderRadius: "20px" }} width="80%" />
                  </div>
                  <div className="layout-column layout-align-start-start flex-30">
                    {room.temperature ? <p style={{ marginBottom: "-15px" }}>Temperature: {room.temperature} °C</p> : <p>No data</p>}
                    {room.Devices.filter(device => device.type === "Light").length > 0 ? <p style={{ marginBottom: "-15px" }}>Lights on: {room.Devices.filter(device => device.type === "Light").filter(light => light.value > 0).length}/{room.Devices.filter(device => device.type === "Light").length}</p> : <p style={{ marginBottom: "-15px" }}>No lights found</p>}
                    {room.Devices.filter(device => device.type === "Blind").length > 0 ? <p style={{ marginBottom: "-15px" }}>Blinds open: {room.Devices.filter(device => device.type === "Blind").filter(blind => blind.value > 0).length}/{room.Devices.filter(device => device.type === "Blind").length}</p> : <p style={{ marginBottom: "-15px" }}>No blinds found</p>}
                    {room.Devices.filter(device => device.type === "Window").length > 0 ? <p>Windows open: {room.Devices.filter(device => device.type === "Window").filter(window => window.value > 0).length}/{room.Devices.filter(device => device.type === "Window").length}</p> : <p>No windows found</p>}
                  </div>
                </div>
                <div className="interactions">
                  <NavLink to={`/room/${room.id}`}>
                    <Button raised="true" size="medium" type="primary" text="Get me there" />
                  </NavLink>
                </div>
              </div>
            ), [this.props.rooms]) : <div className="card flex-33" style={{ minHeight: "442px" }}><p>No rooms found</p></div>}

            <div id="new" className="card flex-33 layout-column layout-align-center-center" style={{ minHeight: "442px" }}  onClick={() => this.setState({ showModal: !this.state.showModal })} >
              <Icon icon="fas fa-plus" size="60"/>
            </div>

            <Modal isShowing={this.state.showModal}>
              <span className="close" onClick={() => this.setState({ showModal: !this.state.showModal })}>&times;</span>
              <h1>Add new room</h1>
              <Input placeholder="Name" width="75%" name="name" value={this.state.name} onChange={this.handleInputChange} />
              <Input placeholder="Description" width="75%" name="description" value={this.state.description} onChange={this.handleInputChange} />
              <Input placeholder="Image link" width="75%" name="image" value={this.state.image} onChange={this.handleInputChange} />
              <Input placeholder="Temperature" width="75%" name="temperature" value={this.state.temperature} onChange={this.handleInputChange} />
              <div className="interactions">
                <button className="m_button primary" onClick={this.newRoom}><Icon icon="fas fa-plus" />Add room</button>
              </div>
            </Modal>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  rooms: state.rooms
})

export default connect(mapStateToProps, { fetchRoomsforUser, createRoom })(Home);