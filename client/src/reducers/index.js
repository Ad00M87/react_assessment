import { combineReducers } from 'redux';
import flash from './flash';
import beers from './beers';
import breweries from './breweries';
import locations from './locations';
import glass from './glass';

const rootReducer = combineReducers({
  flash,
  beers,
  breweries,
  locations,
  glass,
})

export default rootReducer
