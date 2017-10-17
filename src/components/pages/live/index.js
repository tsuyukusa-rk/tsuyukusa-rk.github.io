import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLiveSchedule } from '../../../redux/modules/schedule'

class Live extends Component {
  componentDidMount () {
    this.props.fetchLiveSchedule()
  }
  render () {
    return (
      <div>contact</div>
    )
  }
}

export default connect(
  ({ schedule: { liveSchedule } }) => liveSchedule,
  (dispatch) => bindActionCreators({ fetchLiveSchedule }, dispatch)
)(Live)
