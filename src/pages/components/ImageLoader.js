import React, {Component} from 'react';

export default class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (e.target.classList.contains('imagePopup')) {
      this.props.removePopup();
    }
  }
  render() {
    const {url} = this.props;
    return (
      <div className="imagePopup" onClick={this.handleClick}>
        <img className="img" src={url} onError={(e) => {e.target.src = '/img/404.png';}}/>
      </div>
    )
  }
}
