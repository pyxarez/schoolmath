import React, {Component} from 'react';
import Navigation from './Navigation';

export default class Section extends Component {
  render() {
    return (
      <div>
        <Navigation
          updatePage={this.props.route.updatePage}
          pages={this.props.route.pages}/>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
