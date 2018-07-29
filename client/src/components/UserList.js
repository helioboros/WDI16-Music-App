import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <UserCard key={user.id}>
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
        <div>
          {usersList}
        </div>
      </div>
    )
  }
}

export default UserList