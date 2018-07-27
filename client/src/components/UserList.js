import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'

const UserHeader = styled.h1`
  background-color: salmon;
`

const CardStyle = styled(Card)`
  &&&& {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
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
        <CardStyle key={user.id}>
          <Card.Header>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </Card.Header>
          <Card.Content>
            <Image avatar src={user.photo_url} />
            {/* {user.nationality} */}
          </Card.Content>
        </CardStyle>
      )
    })

    return (
      <div>
        <UserHeader>
          User Index
        </UserHeader>
        <Card.Group centered>
          {usersList}
        </Card.Group>
      </div>
    )
  }
}

export default UserList