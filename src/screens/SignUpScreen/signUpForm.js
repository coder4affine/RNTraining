import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { string, object, ref } from 'yup';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Picker from '../../components/Picker';

const data = [
  {
    label: 'Select Gender',
    value: '',
  },
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Third Gender',
    value: 'Third Gender',
  },
];

const signUpForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={object().shape({
      username: string().required('username is required'),
      email: string()
        .email('Not valid email')
        .required('Email is required'),
      password: string()
        .min(6)
        .required('Password is required'),
      confirmPassword: string()
        .oneOf([ref('password', null)], 'Confirm Password must matched Password')
        .required('Confirm Password is required'),
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
        />
        <TextInput
          label="Confirm Password"
          autoCapitalize="none"
          secureTextEntry
          value={values.confirmPassword}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="confirmPassword"
          error={touched.confirmPassword && errors.confirmPassword}
        />
        <TextInput
          label="First Name"
          autoCapitalize="none"
          value={values.firstName}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="firstName"
          error={touched.firstName && errors.firstName}
        />
        <TextInput
          label="Last Name"
          autoCapitalize="none"
          value={values.lastName}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="lastName"
          error={touched.lastName && errors.lastName}
        />
        <TextInput
          label="Email"
          autoCapitalize="none"
          value={values.email}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="email"
          error={touched.email && errors.email}
        />
        <DatePicker
          label="Birth Date"
          autoCapitalize="none"
          value={values.birthDate}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="birthDate"
          error={touched.birthDate && errors.birthDate}
          iconName="md-calendar"
        />
        <Picker
          label="Gender"
          selectedValue={values.gender}
          onChange={setFieldValue}
          name="gender"
          data={data}
          error={touched.gender && errors.gender}
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

signUpForm.propTypes = {
  initialValues: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.oneOfType(['Male', 'Female', 'Third gender']).isRequired,
    birthDate: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default signUpForm;
