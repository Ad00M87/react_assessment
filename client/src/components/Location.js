import React from 'react';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Default from '../images/Default.png'

const Location = ({ location = {} }) => {
  if (location.hasOwnProperty('brewery')) {
    return(
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{location.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={location.brewery.images.square_medium} />
            <h4>{location.website}</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <h3>{location.street_address}</h3>
            <h3>{location.locality}, {location.region} {location.postal_code}</h3>
          </Grid.Column>
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container style={styles.background}>
        <Header as='h2' textAlign='center'>{location.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={Default} />
            <h4>{location.website}</h4>
          </Grid.Column>
          <Grid.Column width={10}>
            <h3>{location.street_address}</h3>
            <h3>{location.locality}, {location.region} {location.postal_code}</h3>
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
  return { location: state.locations.find( l => l.id === props.match.params.id )}
}

export default connect(mapStateToProps)(Location);
