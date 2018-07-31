import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'

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
      this.fetchUsers()
    })
  }

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <div className='card' key={user.id}>
          <div className="button" onClick={() => this.deleteUser(user.id)}>
            <button>delete</button>
          </div>
          <div>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>
          <div>
            <img src={user.photo_url} width='100px' height='100px' />
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className='header'>
          User Index
          <div className="button">
            <button onClick={this.toggleShowNewForm}>Add User</button>
            {this.state.showNewForm ? <NewUserForm fetchUsers={this.fetchUsers} /> : null}
          </div>
        </div>
        <div className='contentList'>
          {usersList}
        </div>
      </div>
    )
  }
}

export default UserList