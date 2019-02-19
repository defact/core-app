const isEmpty = value => value === undefined || value === null || value === ''
    , join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */];

export const isEmail = (message = 'Not an email address') => {
  return value => {
    if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  };
};

export const isRequired = (message = 'Required') => {
  return value => {
    if (isEmpty(value)) {
      return message;
    }
  };
};

export const isChecked = (message = 'Should be selected') => {
  return value => {
    if (value !== true) {
      return message;
    }
  };
};

export const notChecked = (message = 'Should not be selected') => {
  return value => {
    if (value === true) {
      return message;
    }
  };
};

export const minLength = (min, message = `Must be at least ${min} characters`) => {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return message;
    }
  };
}

export const maxLength = (max, message = `Must be no more than ${max} characters`) => {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return message;
    }
  };
};

export const isInteger = (message = 'Must be an integer') => {
  return value => {
    if (!Number.isInteger(Number(value))) {
      return message;
    }
  };
}

export const oneOf = (enumeration, message = `Must be one of: ${enumeration.join(', ')}`) => {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return message;
    }
  };
};

export const shouldMatch = (key, name, message = `Should match ${(name || key)}`) => {
  return (value, data) => {
    if (data && data[key] !== value) {
      return message;
    }
  };
};

export const createValidator = rules => {
  return (data = {}) => {
    const errors = {};

    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])) // concat enables both functions and arrays of functions
          , error = rule(data[key], data);
      
      if (error) errors[key] = error;
    });

    return errors;
  };
};