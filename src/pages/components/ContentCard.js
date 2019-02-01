import React, {Component} from 'react';
import ImageLoader from './ImageLoader';
import {commentSvg, UPVOTESVG, DOWNVOTESVG} from './svgs';
import Ripple from './Ripple';

function findCount(val){
  if (val < 1000) {
    return val;
  } else {
    return (Math.round((val / 1000) * 10) / 10) + 'K';
  }
}

function publishedTime(utc) {
  const postDate = new Date(utc * 1000);
  const now = new Date();
  if (now.getFullYear() === postDate.getFullYear()) {
    if (now.getMonth() === postDate.getMonth()) {
      if(now.getDate() === postDate.getDate()) {
        return (now.getHours() - postDate.getHours() + ' hours ago ');
      } else {
        const day = parseInt(now.getDate() - postDate.getDate(), 10);
        if (day === 1) {
          return (24 + now.getHours() - 17) + ' hours ago ';
        }
        return (day + 'days ago ');
      }
    } else {
      const month = parseInt(now.getMonth() - postDate.getMonth(), 10);
      return (month + (month === 1 ? ' month ' : 'months ') + ' ago ');
    }
  } else {
    const year = parseInt(now.getFullYear() - postDate.getFullYear(), 10);
    return (year + (year === 1 ? ' year ' : 'years ') + ' ago ');
  }
}

export default class ContentCard extends Component {
  constructor(props) {
    super(props);
    this.renderCardData = this.renderCardData.bind(this);
    this.showImage = this.showImage.bind(this);
    this.removePopup = this.removePopup.bind(this);
    this.state = {showImage: false};
    this.debounce = undefined;
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.cardData && this.props.cardData || (prevProps.cardData && this.props.cardData && prevProps.cardData.length !== this.props.cardData.length)) {
      this.setScrollCapture();
    }
  }

  setScrollCapture() {
    window.onscroll = () => {
      clearTimeout(this.debounc);
      this.debounc = setTimeout(() => {
        const bounding = this.refs.itemToScrollToView.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          this.props.getNextDataSet();
        }
      }, 100);
    }
  }

  showImage(url) {
    this.setState({ showImage: true, url: url });
  }
  removePopup() {
    this.setState({ showImage: false, url:'' });
  }
  renderCardData() {
    const {cardData} = this.props;
    return cardData.map((item, index, arr) => {
      const data = item.data;
      const length = arr.length - 3;
      const { title, ups, thumbnail, num_comments, author, created_utc, url } = data;
      const time = publishedTime(created_utc);
      if (!thumbnail || thumbnail === 'self') {
        return null;
      }
      const otherProps = (index === length ? { ref: 'itemToScrollToView'}: {});
      return (
        <div key={index} {...otherProps} onClick={this.showImage.bind(this, url)}>
          <div className="cardWrapper col-sm-12">
            <div className="imgWrap tc">
              <img className="thumb"  src={thumbnail} alt={'image_'+ index}/>
            </div>
            <div className="detailsCardSection">
              <div className="title"><span className="txtEllipsis">{title}</span></div>
              <div className="details">
                <span className="md-bl pad5"><span>{commentSvg}</span><span className="commentsCount">{num_comments}</span></span>
                <span className="commentsCount marginL15">{' Published ' + time }</span><span> by </span><span className="author">{author}</span>
              </div>
            </div>
            <div className="voting tc f12">
              <div>{UPVOTESVG}</div>
              <div className="f12 ups">{findCount(ups)}</div>
              <div>{DOWNVOTESVG}</div>
            </div>
          </div>
          {/* <div className="borderBtm"></div> */}
        </div>

      )
    });
  }

  render() {
    const {cardData} = this.props;
    const {showImage, url} = this.state;
    return (
      <div>
        {cardData ?
          <div className= "contentCardWrapper col-10 col-sm-11">
            {this.renderCardData()}
            <div className="tc loading">Loading...</div>
          </div>:
          <div className="noCardContent">
            <svg style={{width: '80px'}} viewBox="0 0 20 20"><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>
            <div className="noCardContentTxt">Search to load sub-reddits</div>
          </div>
        }
        {showImage && <ImageLoader url={url} removePopup={this.removePopup}/>}
      </div>
    );
  }
}
