import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getBeers } from '../actions/beers';
import b1 from '../images/b1.png';
import b2 from '../images/b2.png';
import b3 from '../images/b3.png';
import b4 from '../images/b4.png';
import b5 from '../images/b5.png';

class BeerList extends Component {
  state = { num: 10 }

  getImage = () => {
    let num = Math.floor(Math.random() * 5) + 1;
    if (num === 1) {
        return( <Image style={styles.image} src={b1} /> ) }
      else if (num === 2) {
        return( <Image style={styles.image} src={b2} /> ) }
      else if (num === 3) {
        return( <Image style={styles.image} src={b3} /> ) }
      else if (num === 4) {
        return( <Image style={styles.image} src={b4} /> ) }
      else if (num === 5) {
        return( <Image style={styles.image} src={b5} /> ) }
  }


  beers = () => {
    const { beers } = this.props;

    return beers.map( beer => {
      return(
        <Card key={beer.id}>
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
          <Card.Content extra>
            <h3>RATING:</h3>
            {this.getImage()}
            <h4>(Out of 5 beers)</h4>
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
  scroller: { maxHeight: '200px', overflowY: 'scroll' },
  image: { height: '204px' },
}

const mapStateToProps = (state) => {
  const beers = state.beers;
  return { beers }
}

export default connect(mapStateToProps)(BeerList);
