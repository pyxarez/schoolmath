import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Section from './Section';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      route: 'overview',
      pageIndex: 0,
      pages: [
        {
          title: 'Обзор курса',
          index: 0,
          active: true,
          component: 'overview',
          link: '#overview'
        }, {
          title: 'Практикум',
          index: 1,
          active: false,
          component: 'practice',
          link: '#practice'
        }, {
          title: 'Прогресс',
          index: 2,
          active: false,
          component: 'progress',
          link: '#progress'
        },
      ],
    };
  }

  updatePage = (index) => {
    this.state.pages.forEach((page, i) => {
      if (i === index) {
        page.active = true;
      } else {
        page.active = false;
      }
    });

    this.setState({
      pageIndex: index
    });
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

    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation updatePage={this.updatePage} pages={this.state.pages}/>
        <Section data={this.state.articles} route={this.state.route}/>
      </div>
    );
  }
}
