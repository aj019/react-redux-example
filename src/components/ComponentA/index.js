import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add} from '../../actions'

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

const mapStateToProps = store => {
  const {reducer1} = store
  const {data1} = reducer1
  return {
    data1
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne: dispatch(add())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA)
