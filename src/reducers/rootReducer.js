import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import increment from './increment.reducer'

const rootReducer = combineReducers({
    increment
})

export default rootReducer