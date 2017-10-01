import axios from 'axios';

export const getBreweries = (number) => {
  return(dispatch) => {
    axios.get(`/api/all_breweries?page=1&per_page=${number}`)
      .then( res => dispatch({ type: 'BREWERIES', breweries: res.data.entries}))
  }
}
