import { fork } from 'redux-saga/effects'
import { saga as schedule } from './modules/schedule'

export default function * () {
  yield fork(schedule)
}
