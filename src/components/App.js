import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Mission from './Mission';
import Section from './Section';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      pages: [
        {
          title: 'Обзор курса',
          index: 0,
          active: true
        },
        {
          title: 'Практикум',
          index: 1,
          active: false
        },
        {
          title: 'Прогресс',
          index: 2,
          active: false
        }
      ]
    };
  }

  componentDidMount() {
    fetch('http://localhost:2403/articles')
    .then(response => response.json())
    .then(articles => {
      this.setState({articles});
    })
    .catch(err => {
      console.log(`error in fetch: ${err.message}`);
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Mission/>
        <Section data={this.state.articles}/>
      </div>
    );
  }
}
