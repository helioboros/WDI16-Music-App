import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewUserForm from './NewUserForm'

const UserHeader = styled.h1`
  background-color: salmon;
`

const UserCard = styled.div`
`
const UserCardName = styled.div`
`
const UserCardImage = styled.div`
`

class UserList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    axios.get('/api/users')
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  toggleShowNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm })
  }
  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value
    this.setState({
      [inputName]: userInput
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state).then((res) => {
      this.props.history.push(`/users/${res.data._id}`)
    })
  }
  deleteUser = (userId) => {
    axios.delete(`/api/users/${userId}`).then((res) => {
      this.setState({
        users: res.data.users
      })
    })
    this.fetchUsers()
  }

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <UserCard key={user.id}>
          <div className="button" onClick={() => this.deleteUser(user.id)}>
            <button>delete</button>
          </div>
          <UserCardName>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </UserCardName>
          <UserCardImage>
            <img src={user.photo_url} width='100px' height='100px' />
          </UserCardImage>
        </UserCard>
      )
    })

    return (
      <div>
        <UserHeader>
          User Index
        </UserHeader>
        <div className="button">
          <button onClick={this.toggleShowNewForm}>Create New</button>
          {this.state.showNewForm ? <NewUserForm fetchUsers={this.fetchUsers} /> : null}
        </div>
        <div>
          {usersList}
        </div>
      </div>
    )
  }
}

export default UserList