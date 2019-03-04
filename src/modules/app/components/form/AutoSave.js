import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FormSpy, Field } from 'react-final-form';
import diff from 'object-diff';

export const Saving = ({ name }) => (
  <Field
    name={name}
    subscription={{ data: true }}
    render={({ meta: { data: { isSaving }}}) =>
      !isSaving 
        ? <CircularProgress color='secondary' size={15} thickness={3} style={{marginRight:4}} /> 
        : null
    }
  />
);

class AutoSave extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props.values, isSaving: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active && this.props.active !== nextProps.active) {
      // blur occurred
      this.save(this.props.active);
    }
  }

  save = (field) => {
    const { values, setFieldData, save } = this.props

    const difference = diff(this.state.values, values);

    if (Object.keys(difference).length) {
      this.setState({ isSaving: true, values });
      setFieldData(field, { isSaving: true });
      if (this.props.container) this.props.container.current.style.opacity = 0.3;

      const onSuccess = () => {
        this.setState({ isSaving: false });
        setFieldData(field, { isSaving: false });
        if (this.props.container) this.props.container.current.style.opacity = 1;
      };
      const onFailure = onSuccess;

      save({ ...values, onSuccess, onFailure });
    }
  }

  render() {
    return (
      this.state.isSaving && <Typography variant='body1'>{this.props.children}</Typography>
    )
  }
}

export default props => (
  <FormSpy {...props} subscription={{ active: true, values: true }} component={AutoSave} />
)