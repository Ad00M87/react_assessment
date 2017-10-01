import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getBeers } from '../actions/beers';

class BeerList extends Component {
  state = { num: 10 }

  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => {
      return(
        <Card key={beer.id}>
          {/*TODO need to work out an image system for beers*/}
          <Card.Content>
            <Card.Header><Link to={`/api/all_beers/${beer.id}`}>{beer.name}</Link></Card.Header>
            <Card.Description style={styles.scroller}>
              {beer.description}
            </Card.Description>
            <Card.Content extra>
              <br />
              <h5>{beer.abv}% Alcohol</h5>
            </Card.Content>
          </Card.Content>
        </Card>
      )
    })
  }

  loadMore = (num) => {
    this.props.dispatch(getBeers(num))
    this.setState({ num })
  }

  render() {
    const { num } = this.state;
    if (num === 50) {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Beers</Header>
          <Card.Group itemsPerRow={2}>
            { this.beers() }
          </Card.Group>
        </Container>
      )
    } else {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Beers</Header>
          <Card.Group itemsPerRow={2}>
            { this.beers() }
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
  scroller: { maxHeight: '200px', overflowY: 'scroll' }
}

const mapStateToProps = (state) => {
  const beers = state.beers;
  return { beers }
}

export default connect(mapStateToProps)(BeerList);
