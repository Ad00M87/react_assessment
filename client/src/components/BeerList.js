import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Header } from 'semantic-ui-react';
import { getBeers } from '../actions/beers';

class BeerList extends Component {

  componentDidMount() {
    this.props.dispatch(getBeers());
  }

  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => {
      return(
        <Card>
          {/*TODO need to work out an image system for beers*/}
          <Card.Content>
            <Card.Header>{beer.name}</Card.Header>
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
      <div>
      <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Beers</Header>
      <Card.Group itemsPerRow={1}>
        { this.beers() }
      </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const beers = state.beers;
  return { beers }
}

export default connect(mapStateToProps)(BeerList);
