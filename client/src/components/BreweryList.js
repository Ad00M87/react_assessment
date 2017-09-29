import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Header } from 'semantic-ui-react';
import { getBreweries } from '../actions/breweries';
import Default from '../images/Default.png'

class BreweryList extends Component {

  componentDidMount() {
    this.props.dispatch(getBreweries());
  }

  breweries = () => {
    const { breweries } = this.props;

    return breweries.map( brewery => {
      if (brewery.hasOwnProperty('images'))
        return(
          <Card>
            <Image src={brewery.images.square_medium} />
            <Card.Content>
              <Card.Header>{brewery.name}</Card.Header>
              <Card.Description>
                {brewery.description}
              </Card.Description>
              <Card.Content extra>
                {brewery.website}
              </Card.Content>
            </Card.Content>
          </Card>
        )
      else
        return(
          <Card>
            <Image src={Default} />
            <Card.Content>
              <Card.Header>{brewery.name}</Card.Header>
              <Card.Description>
                {brewery.description}
              </Card.Description>
              <Card.Content extra>
                {brewery.website}
              </Card.Content>
            </Card.Content>
          </Card>
        )
    })
  }

  render() {
    return(
      <div>
      <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Breweries</Header>
      <Card.Group itemsPerRow={1}>
        { this.breweries() }
      </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  return { breweries }
}

export default connect(mapStateToProps)(BreweryList);
