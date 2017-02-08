import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import shuki from './shuki'

const servantApp = combineReducers({
  todos,
  visibilityFilter,
  shuki
});

export default servantApp