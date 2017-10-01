import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Beer = ({ beer = {} }) => {
  if (beer.hasOwnProperty('style')) {
    return(
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{beer.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <h4>{beer.abv}% Alcohol</h4>
            <h4>STYLE: {beer.style.short_name}</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <h5>ABOUT THIS BEER:</h5>
            <p>{beer.description}</p>
            <h5>ABOUT THIS STYLE:</h5>
            <p>{beer.style.description}</p>
          </Grid.Column>
        </Grid>
      </Container>
    )
  } else {
    return(
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{beer.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <h4>{beer.abv}% Alcohol</h4>
            <h4>STYLE: unspecified</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <h5>ABOUT THIS BEER:</h5>
            <p>{beer.description}</p>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  background: {
    backgroundColor: 'grey',
    padding: '10px',
    borderRadius: '15px',
  },
}

const mapStateToProps = (state, props) => {
  return { beer: state.beers.find( b => b.id === props.match.params.id )}
}

export default connect(mapStateToProps)(Beer);
