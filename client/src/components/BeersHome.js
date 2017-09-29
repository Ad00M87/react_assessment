import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import BeerList from './BeerList';
import Beer from './Beer';
import { getBeers } from '../actions/beers';


class BeersHome extends Component {

  componentDidMount() {
    this.props.dispatch(getBeers())
  }

  render() {
    return(
      <Segment>
        <Route exact path='/api/all_beers' component={BeerList} />
        <Route exact path='/api/all_beers/:id' component={Beer} />
      </Segment>
    )
  }
}

export default connect()(BeersHome);
