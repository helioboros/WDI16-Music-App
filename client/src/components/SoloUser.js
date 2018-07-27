import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import styled from 'styled-components'

const AllBoxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: cornflowerblue;
    align-items: space-between;
    justify-content: space-between;
`
const Box = styled.div`
    width: 20vw;
    height: 20vh;
`

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
    deleteSong = async (songId) => {
        try {
            const userId = this.props.match.params.id
            await axios.delete(`/api/users/${userId}/songs/${songId}`)

            await this.fetchUserAndSongs()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const songsList = this.state.songs.map((song) => {
            return (
                <Box className='player-wrapper'>
                    <h4>{song.title}</h4>
                    {/* <ReactPlayer
                        className='react-player'
                        url={song.song_url}
                        width='50%'
                        height='50%' />
                        <button onClick={() =>this.deleteSong()}>Delete</button> */}
                    <div className="button" onClick={() => this.deleteSong(song.id)}>
                        <button>X</button>
                    </div>
                </Box>
            )
        })

        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <img width={200} src={this.state.user.photo_url} alt={this.state.user.name} />
                <p>{this.state.user.bio}</p>
                <AllBoxes>{songsList}</AllBoxes>
            </div>
        )
    }
}

export default SoloUser