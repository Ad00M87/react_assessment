import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import BeersHome from './BeersHome';
import BreweryHome from './BreweryHome';
import LocationHome from './LocationHome';
import GlasswareHome from './GlasswareHome';
import SearchHome from './SearchHome';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/api/all_beers' component={BeersHome} />
          <Route path='/api/all_breweries' component={BreweryHome} />
          <Route path='/api/all_locations' component={LocationHome} />
          <Route path='/api/all_glassware' component={GlasswareHome} />
          <Route path='/api/search_all' component={SearchHome} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
