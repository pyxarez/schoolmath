import React, {Component} from 'react';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';

export default class Section extends Component {
  render() {
    const pageTitle = this.props.page.component;
    let targetComponent;

    if (pageTitle === 'overview') {
      targetComponent = <Overview data={this.props.data}/>;
    } else if (pageTitle === 'practice') {
      targetComponent = <Practice/>;
    } else
      targetComponent = <Progress/>;

    return (
      <div>{targetComponent}</div>
    );
  }
}
