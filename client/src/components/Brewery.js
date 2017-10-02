import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Default from '../images/Default.png'

const Brewery = ({ brewery = {} }) => {
  if (brewery.hasOwnProperty('images')) {
    return(
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{brewery.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={brewery.images.square_medium} />
            {brewery.website ? <h3>{brewery.website}</h3> : <h3>No Email provided</h3>}
          </Grid.Column>
          <Grid.Column width={10}>
            {brewery.description ? <p>{brewery.description}</p> : <h3>No Description was provided.</h3>}
          </Grid.Column>
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{brewery.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={Default} />
            {brewery.website ? <h3>{brewery.website}</h3> : <h3>No Email provided</h3>}
          </Grid.Column>
          <Grid.Column width={10}>
            {brewery.description ? <p>{brewery.description}</p> : <h3>No Description was provided.</h3>}
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
  return { brewery: state.breweries.find( b => b.id === props.match.params.id )}
}

export default connect(mapStateToProps)(Brewery);
