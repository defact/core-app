import React, { Component } from 'react';

import { Error } from '../components';

export default class Broken extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
  }

  render() {
    if (this.state.hasError) {
      return <Error title='Error'>Error</Error>;
    }

    return this.props.children; 
  }
}
