import React, {Component} from 'react';
import Article from './Article';
import Mission from './Mission';

export default class Overview extends Component {
  render() {
    let articles = this.props.route.data.map((article) =>
      <Article data={article} key={article.id}/>);

    return (
      <div>
        <Mission/>
        <div className='main content'>{articles}</div>
      </div>
    );
  }
}
