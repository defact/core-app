import React, { memo, useState } from 'react';
import { Field } from 'react-final-form';

export default memo(({ name, form, accept = 'image/png, image/jpeg, image/gif' }) => {
  const [ image, setImage ] = useState(null);
  
  const handleChangeFile = (e, form) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      form.change(name, file);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
  const styles = {
    input: {
      width: 0.1, 
      height: 0.1, 
      opacity: 0, 
      overflow: 'hidden', 
      position: 'absolute', 
      zIndex: -1,
    },
    select: {
      border: '2px dashed #eee',
      cursor: 'pointer',
      width: '100%',
      minHeight: 20,
    },
  };

  return (
    <Field name={`${name}_image`}>
      {({ input: { name, ...rest}}) => (
        <div>
          <input {...rest} id={name} type='file' style={styles.input}
            accept={accept}
            onChange={e => handleChangeFile(e, form)} />
          <label for={name}>
            <img src={image} style={styles.select} />
          </label>
        </div>
      )}
    </Field>
  );
});