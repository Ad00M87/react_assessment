import axios from 'axios';

export const getLocations = (number) => {
  return(dispatch) => {
    axios.get(`/api/all_locations?page=1&per_page=${number}`)
      .then( res => dispatch({ type: 'LOCATIONS', locations: res.data.entries}))
  }
}
