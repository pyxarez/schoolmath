import React, {Component} from 'react';
import NavItem from './NavItem';

export default class NavItemContainer extends Component {
  handleClick = (e) => {
    const {index, updatePage} = this.props;

    e.target.classList.add('navigation__link_active');
    updatePage(index);
  }

  render() {
    return (
      <NavItem {...this.props} onClick={this.handleClick}/>
    );
  }
}
