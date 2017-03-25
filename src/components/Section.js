import React, {Component} from 'react';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';

export default class Section extends Component {
  render() {
    const route = this.props.route;
    let targetComponent;

    if (route === 'overview' || '') {
      targetComponent = <Overview data={this.props.data}/>;
    } else if (route === 'practice') {
      targetComponent = <Practice/>;
    } else
      targetComponent = <Progress/>;

    return (
      <div>{targetComponent}</div>
    );
  }
}
