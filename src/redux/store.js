import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import saga from './saga'

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  // predicate: () => process.env === 'development',
  // duration: true
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware, loggerMiddleware)

// mount it on the Store
const store = createStore(
  reducer,
  middleware
)

// then run the saga
sagaMiddleware.run(saga)

export default store
