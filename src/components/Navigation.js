import React, {Component} from 'react';
import NavItem from './NavItem';

/*	смена страниц по нажатию таба	*/
export default class Navigation extends Component {
  render() {
    let navItems = this.props.pages.map((item, i) => {
      return <NavItem
        title={item.title}
        isActive={item.active}
        handleClick={this.updatePage.bind(this, i)}
        key={item.title}/>
    });

    return (
      <div className="navigation">
        {navItems}
      </div>
    );
  }

  updatePage = (index, e) => {
    e.target.classList.add('navigation__link_active');
    this.props.updatePage(index);
  }
}
