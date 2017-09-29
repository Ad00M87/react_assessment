import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Beer = ({ beer = {} }) => (
  <Container>
    <Header as='h2' textAlign='center'>{beer.name}</Header>
    <Grid columns={2}>
      <Grid.Column width={6}>
        <h4>{beer.abv}% Alcohol</h4>
      </Grid.Column>
      <Grid.Column width={10}>
        <p>{beer.description}</p>
      </Grid.Column>
    </Grid>
  </Container>
)


const mapStateToProps = (state, props) => {
  return { beer: state.beers.find( b => b.id === props.match.params.id )}
}

export default connect(mapStateToProps)(Beer);
