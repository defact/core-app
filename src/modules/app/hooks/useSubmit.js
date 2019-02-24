import React, { useState } from 'react';
import { Alert } from '../components';

const useSubmit = (onSubmit) => {
  const [ openAlert, setOpenAlert ] = useState(false);
  
  const handleClose = () => setOpenAlert(false);
  
  const handleSubmit = (props, form) => {
    const onSuccess = () => {
      form.reset();
      setOpenAlert(true);
    };
    const onFailure = onSuccess;

    onSubmit({ ...props, onSuccess, onFailure });
  };

  const Dialog = ({ error, message, ...props }) => (
    <Alert open={openAlert} handleClose={handleClose} type={error ? 'error' : 'info'} {...props}>
      {error && error.message}
      {!error && message}
    </Alert>
  );

  return { handleSubmit, Dialog };
};

export default useSubmit;