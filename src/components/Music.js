import React, { Component } from 'react'
import '../styles/card.scss'
import Icon from './Icon'
import Slider from './Slider'

export default class Music extends Component {
  state = {
    playing: false,
    artistList: ["MGK", "G-Eazy", "Eminem", "Sandu Ciorba", "Florin Salam"],
    songList: ["Smoke and drive", "Moana", "Lose yourself", "Aragaz cu butelie", "Toate pozele cu tine"],
    songIndex: 0,
    volume: 100,
  }

  prevSong = () => {
    this.state.songIndex !== 0 && this.setState({ songIndex: (this.state.songIndex - 1) });
  }

  playSong = () => {
    this.setState({ playing: !this.state.playing })
  }

  nextSong = () => {
    this.state.songIndex !== this.state.songList.length - 1 && this.setState({ songIndex: (this.state.songIndex + 1) });
  }

  handleVolume = (e) => {
    this.setState({ volume: e.target.value })
  }

  render() {
    return (
      <div className="card">

        <div className="layout-column layout-align-center-center">
          <p>{this.state.artistList[this.state.songIndex]} - {this.state.songList[this.state.songIndex]}</p>
          <div className="layout-row layout-align-center-center">
            <Icon icon="fas fa-step-backward" size="40" onClick={this.prevSong} />
            <Icon icon={!this.state.playing ? 'fas fa-play' : 'fas fa-pause'} size="40" onClick={this.playSong} />
            <Icon icon="fas fa-step-forward" size="40" onClick={this.nextSong} />
          </div>
          <br></br>
          <Icon icon="fas fa-volume-up" />
          <br></br>
        </div>
        <Slider value={this.state.volume} onChange={this.handleVolume} />
      </div>
    )
  }
}
