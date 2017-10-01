import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getLocations } from '../actions/locations';

class LocationList extends Component {
  state = { num: 10 }

  locations = () => {
    const { locations } = this.props;

    return locations.map( location => {
      return(
        <Card key={location.id}>
          <Card.Content>
            <Card.Header><Link to={`/api/all_locations/${location.id}`}>{location.name}</Link></Card.Header>
          </Card.Content>
          <Card.Content extra>
            <h3>{location.locality}, {location.region}</h3>
          </Card.Content>
        </Card>
      )
    })
  }

  loadMore = (num) => {
    this.props.dispatch(getLocations(num))
    this.setState({ num })
  }

  render() {
    const { num } = this.state;
    if (num === 50) {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Locations</Header>
          <Card.Group itemsPerRow={2}>
            { this.locations() }
          </Card.Group>
        </Container>
      )
    } else {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Locations</Header>
          <Card.Group itemsPerRow={2}>
            { this.locations() }
          </Card.Group>
          <Grid>
            <Grid.Row centered>
              <Button onClick={ () => this.loadMore(num + 10)}>Load More</Button>
            </Grid.Row>
          </Grid>
        </Container>
      )
    }
  }

}

const styles = {
  scroller: { maxHeight: '200px', overflowY: 'scroll' },
  image: { height: '204px' },
}

const mapStateToProps = (state) => {
  const locations = state.locations;
  return { locations }
}

export default connect(mapStateToProps)(LocationList);
