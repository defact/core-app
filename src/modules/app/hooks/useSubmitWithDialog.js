
import React, { memo, useState } from 'react';
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

  const Dialog = memo(({ error, message, ...props }) => {
    const text = error && error.message ? error.message : message;
    return (
      <Alert 
        isOpen={openAlert} 
        close={handleClose} 
        type={error ? 'error' : 'info'} message={text} {...props} />
    );
  });

  return { handleSubmit, Dialog };
};

export default useSubmit;