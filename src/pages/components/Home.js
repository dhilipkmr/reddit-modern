
import React, {Component} from 'react';
import {getSubRedditInfo} from '../apiCalls/ApiCalls';
import SideBar from './SideBar';
import ContentHeader from './ContentHeader';
import ContentCard from './ContentCard';
import {connect} from 'react-redux';
import {addRedditData} from '../actions/HomeActions';

class Home extends Component {
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
    window.onresize = (e) => {
      const isMobile = window.innerWidth < 576 ? true: false;
      this.setState({
        isMobile: isMobile
      });
    };
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
          response.data.error = false;
          this.props.addRedditData(response.data);
        } else if (response.data && after) {
          response.data.error = false;
          this.props.updateRedditData(response.data);
          this.setState({ after, children: [...this.state.children, ...children], error: false})
        } else {
          this.setState({ after:'', children: [], error: true });
        }
      })
      .catch((errMsg) => {
        this.setState({ after:'', children: [], error: true });
        console.log(errMsg);
      });
  }

  render() {
    const {sideMenuSelected, isMobile, error} = this.state;
    return (
      <div>
        <div className="home">
          <SideBar sideBarUpdated={this.sideBarUpdated} isVisible={isMobile} toggleSideBar={this.toggleSideBar}/>
          <section className="tr d-in-bl col-12">
            <ContentHeader triggerSearch={this.triggerSearch} sideMenuSelected={sideMenuSelected} toggleSideBar={this.toggleSideBar}/>
            <div className="contentSection d-in-bl tl col-10 col-md-10 col-sm-12 sm-content">
              <ContentCard getNextDataSet={this.getNextDataSet} error={error}/>
            </div>
          </section>
        </div>
      </div>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRedditData: (data) => {
    dispatch(addRedditData(data));
  }
});

const mapStateToProps = (state) => {
  return {
    children: state.homeReducer ? state.homeReducer.children: []
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);