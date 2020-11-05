import React, { Component } from 'react';
import { randomQuote } from '../../utils/client';
import './popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }

    this.getQuote();
  }

  getQuote =  async () => {
    const response = await randomQuote();
    const quote = response['en'];
    const author = response['author'];
    this.setState((state, props) => ({quote, author}));
  }

  handleClick = (e) => {
    e.preventDefault();
    this.getQuote();
  }

  render() {
    return (
      <>
        <blockquote>{this.state.quote}</blockquote>
        <h6>-- {this.state.author} --</h6>
        <button onClick={this.handleClick}>New quote</button>
      </>
    )
  }
}

export default Popup;