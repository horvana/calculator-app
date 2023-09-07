import { createStore } from 'redux'
import rootReducer from './reducers/inputReducer'

const store = createStore(rootReducer)

export default store;