import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { FormSpy } from 'react-final-form';
import diff from 'object-diff';

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

      const onSuccess = () => {
        this.setState({ isSaving: false });
        setFieldData(field, { isSaving: false });
      };
      const onFailure = onSuccess;

      save({ ...values, onSuccess, onFailure });
    }
  }

  render() {
    return (
      this.state.isSaving && <Typography variant='body1'>Saving...</Typography>
    )
  }
}

// const AS = (props) => {
//   const [ saving, setSaving ] = useState(false);

//   return (
//     <>{saving && <Typography variant='body1'>Saving...</Typography>}</>
//   );
// }

export default props => (
  <FormSpy {...props} subscription={{ active: true, values: true }} component={AutoSave} />
)