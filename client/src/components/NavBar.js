import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Link to='/'>
            <Menu.Item name='home' active={this.activeItem('/')} />
          </Link>
          <Link to='/api/all_beers'>
            <Menu.Item name='Beers' active={this.activeItem('/api/all_beers')} />
          </Link>
          <Link to='/api/all_breweries'>
            <Menu.Item name='Breweries' active={this.activeItem('/api/all_breweries')} />
          </Link>
          <Link to='/api/all_locations'>
            <Menu.Item name='Locations' active={this.activeItem('/api/all_locations')} />
          </Link>
          <Link to='/api/all_glassware'>
            <Menu.Item name='Glassware' active={this.activeItem('/api/all_glassware')} />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/api/search_all'>
              <Menu.Item name='Search Beers and Breweries' active={this.activeItem('/api/search_all')} />
            </Link>
            <Link to='/'>
              <Menu.Item name='DPS React Assessment' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
