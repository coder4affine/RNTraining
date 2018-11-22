import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { string, object } from 'yup';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const signInForm = ({ initialValues, onSubmit }) => {
  let password;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={object().shape({
        username: string().required('username is required'),
        password: string()
          .min(6)
          .required('Password is required'),
      })}
      render={({
        values,
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        setFieldTouched,
        isValid,
        isSubmitting,
      }) => (
        <React.Fragment>
          <TextInput
            label="Username"
            autoCapitalize="none"
            value={values.username}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="username"
            error={touched.username && errors.username}
            returnKeyType="next"
            onSubmitEditing={() => {
              password.focus();
            }}
          />
          <TextInput
            label="Password"
            autoCapitalize="none"
            secureTextEntry
            value={values.password}
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            name="password"
            error={touched.password && errors.password}
            returnKeyType="done"
            inputRef={ref => {
              password = ref;
            }}
            onSubmitEditing={handleSubmit}
          />
          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
          />
        </React.Fragment>
      )}
    />
  );
};

signInForm.propTypes = {
  initialValues: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default signInForm;
