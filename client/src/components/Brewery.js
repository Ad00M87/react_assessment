import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Default from '../images/Default.png'

const Brewery = ({ brewery = {} }) => {
  if (brewery.hasOwnProperty('images')) {
    return(
      <Container>
        <Header as='h2' textAlign='center'>{brewery.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={brewery.images.square_medium} />
            <h4>{brewery.email}</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>{brewery.description}</p>
          </Grid.Column>
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container>
        <Header as='h2' textAlign='center'>{brewery.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={Default} />
            <h4>{brewery.email}</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>{brewery.description}</p>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}


const mapStateToProps = (state, props) => {
  return { brewery: state.breweries.find( b => b.id === props.match.params.id )}
}

export default connect(mapStateToProps)(Brewery);
