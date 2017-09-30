import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import BreweryList from './BreweryList';
import Brewery from './Brewery';
import { getBreweries } from '../actions/breweries';


class BreweryHome extends Component {

  componentDidMount() {
    this.props.dispatch(getBreweries())
  }

  render() {
    return(
      <Segment style={styles.background}>
        <Route exact path='/api/all_breweries' component={BreweryList} />
        <Route exact path='/api/all_breweries/:id' component={Brewery} />
      </Segment>
    )
  }
}

const styles = {
  background: {
    backgroundColor: 'black'
  },
}

export default connect()(BreweryHome);
