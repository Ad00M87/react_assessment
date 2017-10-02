import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image, Header, Container, Button, Grid } from 'semantic-ui-react';
import Default from '../images/Default.png';
import { Link } from 'react-router-dom';
import { getBreweries } from '../actions/breweries';

class BreweryList extends Component {
  state = { num: 10 }

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
                {brewery.description ? <p>{brewery.description}</p> : <h3>No Description was provided.</h3>}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {brewery.website ? <h3>{brewery.website}</h3> : <h3>No Email provided</h3>}
            </Card.Content>
          </Card>
        )
      else
        return(
          <Card>
            <Image src={Default} />
            <Card.Content>
              <Card.Header><Link to={`/api/all_breweries/${brewery.id}`}>{brewery.name}</Link></Card.Header>
              <Card.Description style={styles.scroller}>
                {brewery.description ? <p>{brewery.description}</p> : <h3>No Description was provided.</h3>}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {brewery.website ? <h3>{brewery.website}</h3> : <h3>No Email provided</h3>}
            </Card.Content>
          </Card>
        )
    })
  }

  loadMore = (num) => {
    this.props.dispatch(getBreweries(num))
    this.setState({ num })
  }

  render() {
    const { num } = this.state;
    if (num === 50) {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Breweries</Header>
          <Card.Group itemsPerRow={2}>
            { this.breweries() }
          </Card.Group>
        </Container>
      )
    } else {
      return(
        <Container>
          <Header as='h3' textAlign='center' style={{ color: 'white' }}>Featured Breweries</Header>
          <Card.Group itemsPerRow={2}>
            { this.breweries() }
          </Card.Group>
          <Grid>
            <Grid.Row columns={5} centered>
              <Button onClick={() => this.loadMore(num + 10)}>Load More</Button>
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
  const breweries = state.breweries;
  return { breweries }
}

export default connect(mapStateToProps)(BreweryList);
