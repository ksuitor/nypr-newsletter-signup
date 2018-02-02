import React, { Component } from 'react';
import './App.css';
import SignupForm from './SignupForm';

const THEMES = process.env.REACT_APP_THEMES;
const ACTION = 'https://nypublicradio.us5.list-manage.com/subscribe/post?u=4109fdd323aaac7078eadaa8f';

const FORM_PROPS = {
  messages: {
    inputPlaceholder: 'Enter your email',
    btnLabel: 'Sign Up',
    sending: 'Sending...',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailchimpId: props.mailchimpId,
      headline: props.headline
    };
    props.embed.onMessage('incoming', this.listener);

    if (window.dataLayer) {
      window.dataLayer.push({ mailchimpId: this.props.mailchimpId });
    }
  }

  componentDidMount() {
  componentWillUnmount() {
    this.props.embed.remove();
  }

  componentDidUpdate(props, { brand }) {
    if (this.state.brand !== brand) {
      this.updateBrand();
    }
  }

  updateBrand() {
    fetch(`${THEMES}/${this.state.brand}.json`)
      .then(r => r.json())
      .then(styles => this.setState({styles}));
  }
  render() {
    let { mailchimpId, headline } = this.state;
    if (!mailchimpId && !headline) {
      return (
        <div className="App">
          <p className="App__placeholder">Fill out the fields and your preview will appear here</p>
        </div>
      );
    }
    FORM_PROPS.action = ACTION + `&id=${mailchimpId}`;
    return (
      <div className="App">
        <h1 className="App__headline">{this.state.headline || 'Stay up-to-date'}</h1>
        <SignupForm {...FORM_PROPS} />
      </div>
    );
  }

  parse(data) {
    let message = {};
    if (typeof data === 'string') {
      try {
        message = JSON.parse(data);
      } catch(e) {/* Ignored */}
    }
    return message;
  }

  listener = data => {
    let query = this.parse(data);
    this.setState(query);
  }
}

export default App;
