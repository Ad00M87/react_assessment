import React from 'react';
import axios from 'axios';
import { Container, Grid, Card, Divider } from 'semantic-ui-react';
import BeerList from './BeerList';
import BreweryList from './BreweryList';

const BeersHome = () => (
  <Container>
    <Grid columns={2}>
      <Grid.Column width={8}>
        <BeerList />
      </Grid.Column>
      <Grid.Column width={8}>
        <BreweryList />
      </Grid.Column>
    </Grid>
  </Container>

)

export default BeersHome;
