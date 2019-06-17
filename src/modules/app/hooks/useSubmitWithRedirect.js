import { navigate } from '@reach/router';

const useSubmit = (onSubmit, options = {}) => {
  const handleSubmit = (props, form) => {
    const onSuccess = () => {
      const { onSuccess, redirectTo } = options;

      if (redirectTo) navigate(redirectTo);
      if (onSuccess) onSuccess();

      form.reset();
    };
    const onFailure = onSuccess;

    onSubmit({ ...props, options, onSuccess, onFailure });
  };

  return handleSubmit;
};

export default useSubmit;