import React, {Component} from 'react';
import {SIDEBAR_MENU_ITEMS} from '../constants/Constants';
import Ripple from './Ripple';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.sideMenuClick = this.sideMenuClick.bind(this);
    this.renderSideMenu = this.renderSideMenu.bind(this);
    this.state = {
      menu_items: SIDEBAR_MENU_ITEMS,
      activeIndex: '1'
    }
  }

  componentDidMount() {
    const val = this.refs["index_" + this.state.activeIndex].innerText;
    this.props.sideBarUpdated(val);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex !== this.state.activeIndex && parseInt(this.state.activeIndex, 10) < 6) {
      const val = this.refs["index_" + this.state.activeIndex].innerText;
    this.props.sideBarUpdated(val);
    }
  }
  sideMenuClick(e) {
    const itemIndex = e.target.parentNode.children[0].dataset.itemIndex;
    this.setState({ activeIndex: itemIndex });
  }

  renderSideMenu() {
    const {menu_items = [], activeIndex= ''} = this.state;
    return menu_items.map((item, index) => {
      let sideBarItemClass = (item.heading ? 'sideHeading' : '');
      sideBarItemClass += (!item.heading && index.toString() === activeIndex) ? ' activeSideMenu' : '';
      return (
        <Ripple key={'item_' + index}>
          <div ref={"index_" + index} data-item-index={index} className={'content ' + sideBarItemClass }>{item.name}</div>
        </Ripple>
      ) 
    });
  }

  render() {
    return (
      <div>
      <div className={'sidebar sm-sidebar ' + (this.props.isVisible ? 'dn' : '')}>
        <div className="logo">
          <svg className="redditIconSvg" viewBox="0 0 20 20"><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>
          <svg className="redditNameSvg" viewBox="0 0 55 17.44"><g fill="#1c1c1c"><circle fill="#FF4500" cx="45.77" cy="3.33" r="2.05"></circle><path fill="inherit" d="M16.73,12.05a1.44,1.44,0,0,0,1.54-1.48,4.91,4.91,0,0,0-.1-0.83,5.66,5.66,0,0,0-5.34-4.61c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a5.47,5.47,0,0,0,4.26-1.78,1.19,1.19,0,0,0-.19-1.77,1.25,1.25,0,0,0-1.53.16,3.78,3.78,0,0,1-2.54,1.09,3.42,3.42,0,0,1-3.14-3.08h7ZM12.82,7.44a3.3,3.3,0,0,1,3,2.56h-6A3.3,3.3,0,0,1,12.82,7.44Z"></path><path fill="inherit" d="M7.44,6.32a1.15,1.15,0,0,0-1-1.14A4.46,4.46,0,0,0,2.31,6.69V6.54A1.15,1.15,0,1,0,0,6.54V16a1.18,1.18,0,0,0,1.08,1.2A1.15,1.15,0,0,0,2.31,16V11.15A3.51,3.51,0,0,1,6.15,7.47H6.38A1.15,1.15,0,0,0,7.44,6.32Z"></path><path fill="inherit" d="M46.92,7.56a1.15,1.15,0,0,0-2.31,0V16a1.15,1.15,0,1,0,2.31,0V7.56Z"></path><path fill="inherit" d="M29.87,1.15A1.15,1.15,0,0,0,28.72,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,29.87,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S26.39,15.13,24.62,15.13Z"></path><path fill="inherit" d="M41.92,1.15A1.15,1.15,0,0,0,40.77,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,41.92,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S38.44,15.13,36.67,15.13Z"></path><path fill="inherit" d="M52.91,16V7.44h1a1,1,0,0,0,1.06-1,1,1,0,0,0-1-1.09H52.91V3.76a1.18,1.18,0,0,0-1.08-1.19,1.15,1.15,0,0,0-1.23,1.15V5.38h-1a1,1,0,0,0-1.06,1,1,1,0,0,0,1,1.09h1V16a1.15,1.15,0,0,0,1.15,1.15h0A1.15,1.15,0,0,0,52.91,16Z"></path></g></svg>
        </div>
        <div onClick={this.sideMenuClick}>
          {this.renderSideMenu()}
        </div>
      </div>
      {!this.props.isVisible && <div className="sm-sidebar overlay" onClick={this.props.toggleSideBar}></div>}
      </div>
    ); 
  }
}
