import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import LocationList from './LocationList';
import Location from './Location';
import { getLocations } from '../actions/locations';


class LocationHome extends Component {

  componentDidMount() {
    this.props.dispatch(getLocations(10))
  }

  render() {
    return(
      <Segment style={styles.background}>
        <Route exact path='/api/all_locations' component={LocationList} />
        <Route exact path='/api/all_locations/:id' component={Location} />
      </Segment>
    )
  }
}

const styles = {
  background: {
    backgroundColor: 'black'
  },
}

export default connect()(LocationHome);
