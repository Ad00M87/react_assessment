import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Segment, Form, Container, Card, Divider, Image } from 'semantic-ui-react';
import { searchAll } from '../actions/search';
import b1 from '../images/b1.png';
import pin from '../images/pin.svg';

class SearchHome extends Component {
  state = { search: '', searched: false }

  searchInput = () => {
    this.props.dispatch(searchAll(this.state.search));
    this.setState({ searched: true })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  searching = () => {
    const { search } = this.props;

    return search.map( item => {
      if (item.hasOwnProperty('style')) {
        return(
          <Card key={item.id}>
            <Card.Content>
              <Card.Header>{item.name}<Image style={styles.image} src={b1} /></Card.Header>
              <Card.Description>{item.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <h5>{item.abv}% Alcohol</h5>
            </Card.Content>
          </Card>
        )
      } else {
        return(
          <Card key={item.id}>
            <Card.Content>
              <Card.Header>{item.name}<Image style={styles.image} src={pin} /></Card.Header>
              <Card.Description>{item.description}</Card.Description>
            </Card.Content>
          </Card>
        )
      }
    })
  }

  render() {
    let { searched } = this.state;
      return(
        <Container>
          <Divider />
          <Form>
            <Form.Input
              placeholder="What do you want to search for?"
              onChange={(e) => this.handleChange(e)}
              name='search'
              value={this.state.search}
            />
            <Form.Button onClick={ () => this.searchInput()}>Submit</Form.Button>
          </Form>
          <Divider />
          <Card.Group itemsPerRow={1}>
            { searched && this.searching() }
          </Card.Group>
        </Container>
      )
  }
}

const mapStateToProps = (state) => {
  const search = state.search;
  return { search }
}

const styles = {
  image: {
    height: '40px',
  },
}

export default connect(mapStateToProps)(SearchHome);
