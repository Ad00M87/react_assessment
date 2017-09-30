import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Header, Container } from 'semantic-ui-react';
import Default from '../images/Default.png'
import { Link } from 'react-router-dom';

class BreweryList extends Component {

  breweries = () => {
    const { breweries } = this.props;

    return breweries.map( brewery => {
      if (brewery.hasOwnProperty('images'))
        return(
          <Card key={brewery.id}>
            <Image src={brewery.images.square_medium} />
            <Card.Content>
              <Card.Header><Link to={`/api/all_breweries/${brewery.id}`}>{brewery.name}</Link></Card.Header>
              <Card.Description style={styles.scroller}>
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
              <Card.Description style={styles.scroller}>
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
      <Container>
        <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Breweries</Header>
        <Card.Group itemsPerRow={3}>
          { this.breweries() }
        </Card.Group>
      </Container>
    )
  }

}

const styles = {
  scroller: { maxHeight: '200px', overflowY: 'scroll' }
}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  return { breweries }
}

export default connect(mapStateToProps)(BreweryList);
