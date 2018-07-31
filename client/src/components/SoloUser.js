import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import NewSongForm from './NewSongForm'

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
    // fuck man idk
    // createSong = () => {
    //     try {
    //         const userId = this.props.match.params.id
    //         await axios.post(`/api/users/${userId}/songs`)
    //         await this.fetchUserAndSongs()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    // toggleEditUserForm = () => {
    //     this.setState({ editUserForm: !this.state.editUserForm })
    // }
    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({
            [inputName]: inputValue
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const userId = this.props.match.params.id
        axios.post(`/api/users/${userId}/songs/`, this.state).then((res) => {
            this.props.history.push(`/users/${userId}/songs/${res.data._id}`)
        })
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
                <div className='musicCard'>
                    <h4>{song.title}</h4>
                    <ReactPlayer
                        className='react-player'
                        url={song.song_url}
                        width='50%'
                        height='50%' />
                    <div className="button" onClick={() => this.deleteSong(song.id)}>
                        <button>Delete</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className = 'userHead'>
                    <h1>{this.state.user.name}</h1>
                    <img width={200} src={this.state.user.photo_url} alt={this.state.user.name} />
                </div>
                {/* <div className="button">
                    <button onClick={this.toggleEditUserForm}>Edit User</button>
                    {this.state.editUserForm ? <EditUser /> : null}
                </div> */}
                <div className="button">
                    <button onClick={this.toggleShowNewForm}>Add New Song</button>
                    {this.state.showNewForm ? <NewSongForm fetchUserAndSongs={this.fetchUserAndSongs} /> : null}
                </div>
                <p>{this.state.user.bio}</p>
                <div classname='contentList'>{songsList}</div>
            </div>
        )
    }
}

export default SoloUser