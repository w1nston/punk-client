import React, { Component } from 'react';

class Accordion extends Component {
  state = { open: false };

  toggleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClick = event => {
    this.toggleOpen();
  };

  render() {
    return (
      <div className={this.props.className} onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        {this.props.children(this.state.open)}
      </div>
    );
  }
}

export default Accordion;
