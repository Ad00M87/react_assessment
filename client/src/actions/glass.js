import axios from 'axios';

export const getGlass = () => {
  return(dispatch) => {
    axios.get(`/api/all_glassware`)
      .then( res => dispatch({ type: 'GLASS', glass: res.data.entries}))
  }
}
