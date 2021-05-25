import React from 'react'
import { connect } from 'react-redux'

import { capitalize } from '../utils'

function UserDisplay (props) {
  return (
    <div>
      <h3>
        {props.activeUser ? capitalize(props.activeUser.username) : 'User not logged in'}
      </h3>

      { (props.watchlist.length > 0 && props.activeUser) && <ul>
        {props.watchlist.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul> }
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activeUser: globalState.activeUser,
    watchlist: globalState.watchList
  }
}

export default connect(mapStateToProps)(UserDisplay)
