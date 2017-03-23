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
      pageIndex: 0,
      pages: [
        {
          title: 'Обзор курса',
          index: 0,
          active: true,
          component: 'overview'
        },
        {
          title: 'Практикум',
          index: 1,
          active: false,
          component: 'practice'
        },
        {
          title: 'Прогресс',
          index: 2,
          active: false,
          component: 'progress'
        }
      ]
    };
  }

  /**
   * Жуткий костыль!!!!!!!!!!!!!
   * @param  {[type]} index [description]
   * @return [type]         [description]
   */
  updatePage = (index) => {
    let pages = this.state.pages.map((page, i) => {
      if (i === index) {
        page.active = true;
        return page;
      }
      else{
        page.active = false;
        return page;
      }
    });

    this.setState({
      pageIndex: index,
      pages
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
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation
          updatePage={this.updatePage}
          pages={this.state.pages}
        />
        <Mission/>
        <Section
          data={this.state.articles}
          page={this.state.pages[this.state.pageIndex]}
        />
      </div>
    );
  }
}
