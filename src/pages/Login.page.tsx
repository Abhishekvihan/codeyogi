import { FC, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputElement from '../components/InputElement';

import { FaSpinner } from 'react-icons/fa';
import Toggle from '../components/Toggle';
import ButtonBlue from '../components/ButtonBlue';
import * as yup from 'yup';
import { useFormik } from 'formik';

interface Props {}

const Login: FC<Props> = (props) => {
  const history = useHistory();
  const { handleSubmit, getFieldProps, touched, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
      onSubmit: (data, { setSubmitting }) => {
        console.log('form submitting', data);
        setTimeout(() => {
          console.log('form submit sucessfully');
          history.push('/dashboard');
          setSubmitting(false);
        }, 5000);
      },
    });

  // history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center w-3/4 pt-12 mx-auto leading-3 ">
        <div className="">
          <div className="w-full pt-10 text-4xl tracking-wide text-gray-600 ">
            Log In to{' '}
            <span className="font-medium text-blue-600 cursor-pointer">
              CORK
            </span>
          </div>
          <div className="pt-3 text-sm font-semibold tracking-wider text-gray-600">
            New here?{'  '}
            <Link to="/signup">
              <span className="inline-block text-blue-500 underline">
                {' '}
                Create an account
              </span>
            </Link>
          </div>

          <InputElement
            id="email-address"
            placeholder="Email"
            type="email"
            autoComplete="email"
            touched={touched.email}
            error={errors.email}
            {...getFieldProps('email')}
            required
          />

          <InputElement
            required
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="password"
            touched={touched.password}
            error={errors.password}
            {...getFieldProps('password')}
          />

          <div className="flex items-center justify-between">
            <Toggle switchText="Show Password" />
            <ButtonBlue buttontext="Log In" className="" />
          </div>
          {isSubmitting && <FaSpinner className="animate-spin"></FaSpinner>}
          <div className="pt-12 text-base text-gray-500 ">
            <div className="flex items-center justify-center space-x-3">
              <input type="checkbox" id="checkbox" />
              <span>
                <label className="cursor-pointer" htmlFor="checkbox">
                  {' '}
                  Keep me Logged in
                </label>
              </span>
            </div>
          </div>

          <div className="pt-6 text-xl tracking-widest text-center text-blue-600 cursor-pointer">
            Forgot Password?
          </div>
          <div className="pt-12 text-sm tracking-wider text-gray-600">
            © 2020 All Rights Reserved.
            <span className="text-blue-600 cursor-pointer">CORK</span> is a
            product of Designreset.{' '}
            <span className="text-blue-600 cursor-pointer">
              Cookie Preferences
            </span>
            , <span className="text-blue-600 cursor-pointer">Privacy</span>, and{' '}
            <span className="text-blue-600 cursor-pointer">Terms.</span>
          </div>
        </div>
      </div>
    </form>
  );
};

Login.defaultProps = {};

export default memo(Login);
