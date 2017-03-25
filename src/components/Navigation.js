import React, {Component} from 'react';
import NavItemContainer from './NavItemContainer';

/*	смена страниц по нажатию таба	*/
export default class Navigation extends Component {
  render() {
    let navItemContainers = this.props.pages.map((item, i) => {
      return <NavItemContainer
        title={item.title}
        link={item.link}
        isActive={item.active}
        index={item.index}
        updatePage={this.props.updatePage}
        key={item.title}/>
    });

    return (
      <div className="navigation">
        {navItemContainers}
      </div>
    );
  }
}
