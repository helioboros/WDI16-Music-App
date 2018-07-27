import React, { Component } from 'react'
import axios from 'axios'

class SoloUser extends Component {
  state = {
    user: {},
    songs: []
  }

  componentDidMount() {
    this.fetchUserAndSongs()
  }

  fetchUserAndSongs = async () => {
    const userId = this.props.match.params.id

    try {
      let userResponse = await axios.get(`/api/users/${userId}`)
      let songsResponse = await axios.get(`/api/users/${userId}/songs`)

      this.setState({
        user: userResponse.data,
        songs: songsResponse.data
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const songsList = this.state.songs.map((song) => {
      return (
        <div>
          <h4>{song.title}</h4>
          <iframe
            src={song.song_url}
          >
          </iframe>
        </div>
      )
    })

    return (
      <div>
        <h1>{this.state.user.name}</h1>
        {/* <h4>{this.state.user.nationality}</h4> */}
        <img width={200} src={this.state.user.photo_url} alt={this.state.user.name} />
        {songsList}
      </div>
    )
  }
}

export default SoloUser