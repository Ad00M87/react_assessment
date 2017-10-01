const locations = ( state = [], action ) => {
  switch(action.type) {
    case 'LOCATIONS':
      return action.locations;
    default:
      return state;
  }
}

export default locations;
