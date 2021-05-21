import React from 'react'
import { connect } from 'react-redux'

import { capitalize } from '../utils'

function UserDisplay (props) {
  return (
    <div>
      <img />
      <h3>
        {props.activeUser ? capitalize(props.activeUser) : 'User not logged in'}
      </h3>

      <ul>
        <li>stock 1</li>
        <li>stock 2</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activeUser: globalState.activeUser
  }
}

export default connect(mapStateToProps)(UserDisplay)
