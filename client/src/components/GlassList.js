import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class GlassList extends Component {

  glass = () => {
    const { glassware } = this.props;

    return glassware.map( glass => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              {glass.name}
            </Card.Header>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return(
      <Container>
        <Header as='h3' textAlign='center' style={{ color: 'white'}}>Glassware</Header>
        <Card.Group itemsPerRow={1}>
          { this.glass() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const glassware = state.glass;
  return { glassware }
}

export default connect(mapStateToProps)(GlassList);
