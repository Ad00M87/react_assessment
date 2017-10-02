import axios from 'axios';

export const searchAll = (input) => {
  return(dispatch) => {
    axios.get(`/api/search_all?query=${input}`)
      .then( res => dispatch({ type: 'SEARCH', search: res.data.entries}))
  }
}
