import { navigate } from '@reach/router';

const useSubmit = (onSubmit, options = {}) => {
  const handleSubmit = (props, form) => {
    const onSuccess = () => {
      const { onSuccess, redirectTo } = options;

      form.reset();

      if (redirectTo) navigate(redirectTo);
      if (onSuccess) onSuccess();
    };
    const onFailure = () => form.reset();

    onSubmit({ ...props, options, onSuccess, onFailure });
  };

  return handleSubmit;
};

export default useSubmit;