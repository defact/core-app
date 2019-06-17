import React, { Component } from 'react';

import { Error } from '../components';
import { Typography } from '@material-ui/core';

export default class Broken extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });

    // Log
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <Error title='Error'>Application Error</Error>
          <Typography variant='subtitle1'>{this.state.error.toString()}</Typography>
          <Typography variant='body2'>{this.state.info.componentStack}</Typography>
        </>
      );
    }

    return this.props.children; 
  }
}
