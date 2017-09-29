import React from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import BeerList from './BeerList';
import BreweryList from './BreweryList';

const BeersHome = () => (
  <Container>
    <Divider hidden />
    <Grid columns={2}>
      <Grid.Column width={8}>
        <BeerList />
      </Grid.Column>
      <Divider vertical />
      <Grid.Column width={8}>
        <BreweryList />
      </Grid.Column>
    </Grid>
  </Container>

)

export default BeersHome;
