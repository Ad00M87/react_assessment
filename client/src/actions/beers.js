import axios from 'axios';

export const getBeers = (number) => {
  return(dispatch) => {
    axios.get(`/api/all_beers?page=1&per_page=${number}`)
      .then( res => dispatch({ type: 'BEERS', beers: res.data.entries}))
  }
}
