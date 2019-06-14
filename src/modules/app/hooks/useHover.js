import React, { useState } from 'react';

export default element => {
  const [ state, setState ] = useState(false);

  const noOp = () => {};

  const onMouseEnter = (originalOnMouseEnter) => e => {
    (originalOnMouseEnter || noOp)(e);
    setState(true);
  };

  const onMouseLeave = (originalOnMouseLeave) => e => {
    (originalOnMouseLeave || noOp)(e);
    setState(false);
  };

  if (typeof element === 'function') {
    element = element(state);
  }

  return React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  });
};