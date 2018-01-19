import { takeEvery, put, call } from 'redux-saga/effects'
import axios from 'axios'

/**
 * selectors
 */
export const liveScheduleSelector = ({ schedule }) => schedule.liveSchedule

/**
 * actions
 */
const FETCH_LIVE_SCHEDULE = 'app/schedule/FETCH_LIVE_SCHEDULE'
const UPDATE_LIVE_SCHEDULE = 'app/schedule/UPDATE_LIVE_SCHEDULE'

/**
 * initialState
 */
const initialState = {
  liveSchedule: {}
}

/**
 * reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIVE_SCHEDULE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

/**
 * actionCreaters
 */
export const fetchLiveSchedule = () => ({
  type: FETCH_LIVE_SCHEDULE
})
export const updateLiveSchedule = (value) => ({
  type: UPDATE_LIVE_SCHEDULE,
  payload: {
    liveSchedule: value
  }
})

/**
 * sagas
 */
export const saga = function * () {
  yield takeEvery(FETCH_LIVE_SCHEDULE, fetchLiveScheduleSaga)
}
export const fetchLiveScheduleSaga = function * () {
  const { data } = yield call(axios.get, '/data/live_schedule.json')
  yield put(updateLiveSchedule(data))
}
