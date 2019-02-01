
import React, {Component} from 'react';
import {getSubRedditInfo} from '../apiCalls/ApiCalls';
import SideBar from './SideBar';
import ContentHeader from './ContentHeader';
import ContentCard from './ContentCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.sideBarUpdated = this.sideBarUpdated.bind(this);
    this.getNextDataSet = this.getNextDataSet.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.state = {
      sideMenuSelected: ''
    }
  }

  componentWillMount() {
    const isMobile = window.innerWidth < 576 ? true: false;
    this.setState({
      isMobile: isMobile
    });
  }

  toggleSideBar() {
    this.setState({
      isMobile: !this.state.isMobile
    });
  }
  sideBarUpdated(val) {
    this.setState({ sideMenuSelected: val})
  }

  getNextDataSet() {
    this.triggerSearch(this.state.searchTerm, this.state.after);
  }

  triggerSearch(searchTerm, after) {
    getSubRedditInfo(searchTerm, after)
      .then((response) => {
        if (response.data && !after) {
          this.setState({ searchTerm:searchTerm, ...response.data.data, error: false}, () => {
            console.log(this.state);
          });
        } else if (response.data && after) {
          const {after, children} = response.data.data;
          this.setState({ after, children: [...this.state.children, ...children], error: false})
        } else {
          this.setState({ error: true });
        }
      })
      .catch((errMsg) => {
        this.setState({ error: true });
      });
  }

  render() {
    const {children, sideMenuSelected, isMobile} = this.state;
    return (
      <div>
        <div className="home">
          <SideBar sideBarUpdated={this.sideBarUpdated} isVisible={isMobile}/>
          <section className="tr d-in-bl col-12">
            <ContentHeader triggerSearch={this.triggerSearch} sideMenuSelected={sideMenuSelected} toggleSideBar={this.toggleSideBar}/>
            <div className="contentSection d-in-bl tl col-10 col-md-10 col-sm-12 sm-content">
              <ContentCard cardData={children} getNextDataSet={this.getNextDataSet}/>
            </div>
          </section>
        </div>
      </div>)
  }
}
