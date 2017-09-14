import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import React from 'react'
import reducers from './reducers'
import rootSaga from './sagas'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers, 
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default class Bootstrap extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
