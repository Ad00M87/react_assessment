import { combineReducers } from 'redux';
import flash from './flash';
import beers from './beers';
import breweries from './breweries';
import locations from './locations';
import glass from './glass';
import search from './search';

const rootReducer = combineReducers({
  flash,
  beers,
  breweries,
  locations,
  glass,
  search,
})

export default rootReducer
