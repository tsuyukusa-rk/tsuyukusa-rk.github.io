import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, lifecycle, setPropTypes } from 'recompose'
import {
  fetchLiveSchedule,
  liveScheduleSelector
} from '../../../redux/modules/schedule'

export default compose(
  connect(
    (state) => ({ liveSchedule: liveScheduleSelector(state) }),
    { fetchLiveSchedule }
  ),
  lifecycle({
    componentDidMount () { this.props.fetchLiveSchedule() }
  }),
  setPropTypes({
    liveSchedule: PropTypes.array.isRequired,
    fetchLiveSchedule: PropTypes.func.isRequired
  })
)(({
  liveSchedule,
  fetchLiveSchedule
}) => (
  <div>
    {liveSchedule.map((item, i) => (
      <p key={i}>{item.date}</p>
    ))}
  </div>
))
