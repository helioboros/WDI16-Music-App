import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const SongForm = styled.div`
    background: #1B998B;
    border: 2px solid #2D3047;
    border-radius: 5%;
    max-width: 300px;
    color: #FFFD82;
`

class NewSongForm extends Component {
    state = {
        title: "",
        song_url: ""
    }

    handleChange = (event) => {
        const title = event.target.name
        const newState = { ...this.state }
        newState[title] = event.target.value
        this.setState(newState)
    }
    handleSubmit = async (event) => {
        const userId = this.props.match.params.id
        event.preventDefault()
        const payload = {
            title: this.state.title,
            song_url: this.state.song_url
        }
        await axios.post(`/api/users/${userId}/songs`, payload)
        await this.fetchUserAndSongs()
    }

    render() {
        return (
            <SongForm>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label htmlFor="song_url">URL: </label>
                        <input onChange={this.handleChange} type="text" name="song_url" value={this.state.song_url} />
                    </div>
                    <button>Submit</button>
                </form>
            </SongForm>
        )
    }
}

export default NewSongForm