import React, {Component} from 'react'
import {connect} from 'react-redux'

class ComponentA extends Component {
  render() {
    return (
      <div>
        <p>The value is 0</p>
        <button>Add</button>
      </div>
    )
  }
}

export default connect()(ComponentA)
