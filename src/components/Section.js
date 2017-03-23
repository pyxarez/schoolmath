import React, {Component} from 'react';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';

export default class Section extends Component {
  render() {
    const page = this.props.page;
    const pageTitle = page.component;

    if (pageTitle === 'overview') {
      return <Overview data={this.props.data} />
    } else if (pageTitle === 'practice') {
      return <Practice />
    }
    return <Progress />
  }
}
