import React, {Component} from 'react';

export default class NavItem extends Component {
  render() {
    return (
      <a onClick={this.props.handleClick} className={this.props.isActive
        ? "navigation__link navigation__link_active"
        : "navigation__link"}>{this.props.title}</a>
    );
  }
}
