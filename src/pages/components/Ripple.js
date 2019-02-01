import React, {Component} from 'react';

/* Declaring Styles */
const styleRipple = {
  position: 'relative',
  overflow: 'hidden'
};
const styleRippleContainer = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0'
}
const styleSpan = {
  transform: 'scale(0)',
  borderRadius: '100%',
  position: 'absolute',
  opacity: '0.75',
  backgroundColor: '#777777',
  animation: 'ripple 850ms'
}


export default class Ripple extends Component {
  constructor(props) {
    super(props);
    this.initializeState = this.initializeState.bind(this);
    this.callCleanUp = this.callCleanUp.bind(this);
    this.showRipple = this.showRipple.bind(this);
    this.cleanUp = this.cleanUp.bind(this);
    this.renderRippleSpan = this.renderRippleSpan.bind(this);
    this.state = this.initializeState();
  }

  initializeState() {
    return {
      showRipple: false,
      combinedSpanStyles: {},
      count: 0
    }
  }

  componentDidMount() {
    const style = document.createElement('style');
    style.innerHTML = `@keyframes ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }`;
    document.head.appendChild(style);
  }

  /* Debounce Code to call the Ripple removing function */
  callCleanUp(cleanup, delay) {
      const that = this;
      return function() {
        clearTimeout(that.bounce);
        that.bounce = setTimeout(() => {
          cleanup();
        }, delay);
      }
  }

  showRipple(e) {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - (size / 2);
    const y = e.pageY - pos.y - (size / 2);

    const styleSizing = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
    const combinedSpanStyles = { ...styleSizing, ...styleSpan};
    const count = this.state.count + 1;
    this.setState({
      combinedSpanStyles: {...this.state.combinedSpanStyles, [count] : combinedSpanStyles},
      showRipple: {...this.state.showRipple, [count]: true},
      count: count
    });
  }

  cleanUp() {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  }

  renderRippleSpan() {
    const {showRipple = false, combinedSpanStyles = {}} = this.state;
    const spanArray = Object.keys(combinedSpanStyles);
    if (spanArray && spanArray.length > 0) {
      return (
        spanArray.map((key, index) => {
          return <span key={'spanCount_' + index} style={{ ...combinedSpanStyles[key]}}></span>
        })
      )
    } else {
      return null;
    }
  }

  render() {
    const {children= null, classes = "", onClickHandler = null} = this.props;
    return (
      <div style={{...styleRipple}} className={classes} onClick={onClickHandler}>
        {children}
        <div style={{...styleRippleContainer}} onMouseDown={this.showRipple} onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
          {this.renderRippleSpan()}
        </div>
      </div>
    );
  }
}
