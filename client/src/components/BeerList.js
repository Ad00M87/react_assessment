import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BeerList extends Component {

  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => {
      return(
        <Card key={beer.id}>
          {/*TODO need to work out an image system for beers*/}
          <Card.Content>
            <Card.Header><Link to={`/api/all_beers/${beer.id}`}>{beer.name}</Link></Card.Header>
            <Card.Description>
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

  render() {
    return(
      <Container>
        <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Beers</Header>
        <Card.Group itemsPerRow={3}>
          { this.beers() }
        </Card.Group>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  const beers = state.beers;
  return { beers }
}

export default connect(mapStateToProps)(BeerList);
