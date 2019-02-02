import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRedditData, updateSearchTerms, updateRedditData, loadNewCard} from '../actions/contentHeaderActions';
import {loadNextCardData} from '../actions/contentCardActions';
import {getSubRedditInfo} from '../apiCalls/ApiCalls';

class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.searchFocus = this.searchFocus.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
  }

  componentDidMount() {
    setTimeout(this.refs.searchElt.children[0].focus(), 100);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.loadNextCardData && !this.props.loadNextCardData) {
      this.triggerSearch(false);
      this.props.dispatch(loadNextCardData(false));
    }
  }
  updateSearchTerm(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      if (!this.props.lastSearchTerm || (this.props.lastSearchTerm !== this.props.searchTerm)) {
        this.triggerSearch(true);
        this.props.dispatch(loadNewCard(true));
      }
    } else {
      this.props.dispatch(updateSearchTerms(e.target.value));
    }
  }


  triggerSearch(newterm) {
    const {searchTerm, after, loadNextCardData} = this.props;
    const ifAfter = newterm ? '' : after;
    getSubRedditInfo(searchTerm, ifAfter)
      .then((response) => {
        this.props.dispatch(loadNewCard(false));
        if (response.data && newterm) {
          response.data.data.error = false;
          response.data.data.lastSearchTerm = searchTerm;
          this.props.dispatch(addRedditData(response.data));
        } else if (response.data && !newterm) {
          response.data.data.error = false;
          this.props.dispatch(updateRedditData(response.data));
        } else {
          this.props.dispatch(addRedditData({ data:{ after:'', children: [], error: true} }));
        }
      })
      .catch((errMsg) => {
        this.props.dispatch(loadNewCard(false));
        this.props.dispatch(addRedditData({ data:{ after:'', children: [], error: true} }));
        console.log(errMsg);
      });
  }


  searchFocus() {
    this.refs.searchElt.classList.toggle('col-3');
    this.refs.searchElt.classList.toggle('col-4');
    this.refs.searchElt.classList.toggle('searchFocus');
    this.refs.searchElt.classList.toggle('col-sm-5');
    this.refs.searchElt.classList.toggle('col-sm-6');
  }

  render() {
   return (
    <div className="tl col-10 col-md-10 col-sm-12 sm-hdr">
      <div className="d-in-bl">
        <img className="left-menu" src="/img/menu.svg" onClick={this.props.toggleSideBar}/>
      </div>
      <div ref="searchElt" className="search d-in-bl col-3 col-sm-5">
        <input name="search" placeholder="search" type="text" aria-label="search" onKeyUp={this.updateSearchTerm} onFocus={this.searchFocus} onBlur={this.searchFocus} />
      </div>
      <div className="d-in-bl sideHeading f12">
        <span>{this.props.sideMenuSelected}</span>
      </div>
    </div>
   );
  }
}

const mapStateToProps = (state) => {
  const {children = [], after = '', searchTerm = '', lastSearchTerm = ''} = state.contentHeaderReducer;
  const {loadNextCardData = false} = state.contentCardReducer;
  return {
    children, after, searchTerm, loadNextCardData, lastSearchTerm
  }
}
export default connect(mapStateToProps)(ContentHeader);
