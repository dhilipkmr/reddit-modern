
import React, {Component} from 'react';
import SideBar from './SideBar';
import ContentHeader from './ContentHeader';
import ContentCard from './ContentCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.sideBarUpdated = this.sideBarUpdated.bind(this);
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

  render() {
    const {sideMenuSelected, isMobile, error} = this.state;
    return (
      <div>
        <div className="home">
          <SideBar sideBarUpdated={this.sideBarUpdated} isVisible={isMobile} toggleSideBar={this.toggleSideBar}/>
          <section className="tr d-in-bl col-12">
            <ContentHeader sideMenuSelected={sideMenuSelected} toggleSideBar={this.toggleSideBar}/>
            <div className="contentSection d-in-bl tl col-10 col-md-10 col-sm-12 sm-content">
              <ContentCard error={error} isMobile={isMobile}/>
            </div>
          </section>
        </div>
      </div>)
  }
}
export default Home;