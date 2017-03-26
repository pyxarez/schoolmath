import React, {Component} from 'react';
import Header from './Header';

import Section from './Section';
import Overview from './Overview';
import Practice from './Practice';
import Progress from './Progress';
import NotFound from './404';

import {Router, Route, IndexRoute, browserHistory}
  from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      pages: [
        {
          title: 'Обзор курса',
          path: '/',
        }, {
          title: 'Практикум',
          path: '/practice',
        }, {
          title: 'Прогресс',
          path: '/progress',
        }
      ]
    };
  }

  componentDidMount() {
    fetch('http://localhost:2403/articles')
    .then(response => response.json())
    .then(articles => {
      this.setState({articles});
      console.log('data fetched');
    })
    .catch(err => {
      console.log(`error in fetch: ${err.message}`);
    });
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Router history={browserHistory}>
          <Route path='/' component={Section} pages={this.state.pages}>
            <IndexRoute component={Overview} data={this.state.articles}/>
            <Route path='practice' component={Practice}/>
            <Route path='progress' component={Progress}/>
            <Route path='*' component={NotFound}/>
          </Route>
        </Router>
      </div>
    );
  }
}
