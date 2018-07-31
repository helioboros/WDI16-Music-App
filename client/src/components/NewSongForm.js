import React, { Component } from 'react'
import axios from 'axios'

class NewSongForm extends Component {
    state = {
        title: "",
        song_url: ""
    }

    handleSongChange = (event) => {
        const title = event.target.name
        const newState = { ...this.state }
        newState[title] = event.target.value
        this.setState(newState)
    }
    handleSongSubmit = async (event) => {
        event.preventDefault()
        //props don't include 'match' or 'params'? make sure its being passed down.
        const userId = this.props.match.params.id
        try {
            const payload = {
                title: this.state.title,
                song_url: this.state.song_url
            }
            await axios.post(`/api/users/${userId}/songs/`, payload)
        } catch (error) {
            console.log(error)
        }
        // await this.fetchUserAndSongs()
    }

    render() {
        return (
            <div className = 'newForm'>
                <form onSubmit={this.handleSongSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleSongChange} type="text" name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label htmlFor="song_url">URL: </label>
                        <input onChange={this.handleSongChange} type="text" name="song_url" value={this.state.song_url} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewSongForm