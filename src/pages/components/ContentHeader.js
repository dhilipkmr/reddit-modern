import React, {Component} from 'react';

export default class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.searchFocus = this.searchFocus.bind(this);
    this.state = {
      searchTerm: 'cats'
    }
  }

  componentDidMount(){ 
    this.props.triggerSearch('cats');
  }
  updateSearchTerm(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const {searchTerm} = this.state;
      this.props.triggerSearch(searchTerm);
    } else {
      this.setState({
        searchTerm: e.target.value
      });
    }
  }

  searchFocus() {
    this.refs.searchElt.classList.toggle('searchFocus');
  }

  render() {
    const {searchTerm = ''} = this.state;
   return (
    <div className="contentHeaderWrap col-6 col-md-12 col-sm-12">
      <div ref="searchElt" className="search d-in-bl">
        <input placeholder="search" onKeyUp={this.updateSearchTerm} onFocus={this.searchFocus} onBlur={this.searchFocus} />
      </div>
      <div className="d-in-bl sideHeading f12">
        <span>{this.props.sideMenuSelected}</span>
      </div>
    </div>
   );
  }
}
