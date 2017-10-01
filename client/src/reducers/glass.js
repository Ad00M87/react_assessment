const glass = ( state = [], action ) => {
  switch(action.type) {
    case 'GLASS':
      return action.glass;
    default:
      return state;
  }
}

export default glass;
