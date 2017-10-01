import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import GlassList from './GlassList';
import { getGlass } from '../actions/glass';

class GlasswareHome extends Component {

  componentDidMount() {
    this.props.dispatch(getGlass())
  }

  render() {
    return(
      <Segment style={styles.background}>
        <Route exact path='/api/all_glassware' component={GlassList} />
      </Segment>
    )
  }
}

const styles = {
  background: {
    backgroundColor: 'black'
  },
}

export default connect()(GlasswareHome);
