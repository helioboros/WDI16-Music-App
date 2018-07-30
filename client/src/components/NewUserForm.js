import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserForm = styled.div`
    background: #1B998B;
    border: 2px solid #2D3047;
    border-radius: 5%;
    max-width: 300px;
    color: #FFFD82;
`

class NewUserForm extends Component {
    state = {
        name: "",
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
            bio: this.state.bio
        }
        await axios.post('/api/users', payload)
        await this.props.fetchUsers()
    }

    render() {
        return (
            <UserForm>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="bio">bio: </label>
                        <input onChange={this.handleChange} type="text" name="bio" value={this.state.bio} />
                    </div>
                    <button>Submit</button>
                </form>
            </UserForm>
        )
    }
}

export default NewUserForm