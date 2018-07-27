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
                    <iframe src="https://drive.google.com/file?id=1yWJ4jCPh7bY3U7P_67GYw5Q7s6cNNQW2/preview"></iframe>
                    {/* <iframe src={song.song_url}></iframe> */}
                </div>
            )
        })

        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <img width={200} src={this.state.user.photo_url} alt={this.state.user.name} />
                <p>{this.state.user.bio}</p>
                {songsList}
            </div>
        )
    }
}

export default SoloUser