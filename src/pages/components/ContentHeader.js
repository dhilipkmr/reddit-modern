import React, {Component} from 'react';

export default class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
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

  render() {
    const {searchTerm = ''} = this.state;
   return (
    <div className="contentHeaderWrap col-6 col-md-12 col-sm-12">
      <div className="search">
        <input placeholder="search" onKeyUp={this.updateSearchTerm} />
      </div>
    </div>
   );
  }
}
