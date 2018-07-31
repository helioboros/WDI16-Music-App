import React, { Component } from 'react'
import axios from 'axios'

class NewUserForm extends Component {
    state = {
        name: "",
        photo_url: "",
        bio: ""
    }

    handleChange = (event) => {
        const title = event.target.name
        const newState = { ...this.state }
        newState[title] = event.target.value
        this.setState(newState)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            photo_url: this.state.photo_url,
            bio: this.state.bio
        }
        await axios.post('/api/users', payload)
        await this.props.fetchUsers()
    }

    render() {
        return (
            <div className = 'newForm'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="photo_url">Photo URL: </label>
                        <input onChange={this.handleChange} type="text" name="photo_url" value={this.state.photo_url} />
                    </div>
                    <div>
                        <label htmlFor="bio">bio: </label>
                        <input onChange={this.handleChange} type="text" name="bio" value={this.state.bio} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUserForm