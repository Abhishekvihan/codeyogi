import { FC, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../components/Input/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Toggle from '../components/Toggle';
import Button from '../components/Button/Button';
import { FaSpinner } from 'react-icons/fa';
interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      Username: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      Username: yup.string().required(),
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center w-3/4 pt-12 mx-auto leading-3 ">
        <div className="">
          <div className="w-full text-4xl leading-snug tracking-widest text-gray-600">
            Get started with a <span className="block">free account</span>
          </div>
          <div className="pt-2 text-sm font-semibold leading-6 tracking-wider text-gray-600">
            Already have an account?
            <Link to="/login">
              <span className="text-blue-500 underline"> Log in </span>
            </Link>
          </div>
          <div>
            <Input
              required
              id="Username"
              placeholder="Username"
              type="text"
              touched={touched.Username}
              error={errors.Username}
              {...getFieldProps('Username')}
            />
            <Input
              id="email-address"
              placeholder="Email"
              type="email"
              autoComplete="email"
              touched={touched.email}
              error={errors.email}
              {...getFieldProps('email')}
              required
            />

            <Input
              required
              id="password"
              placeholder="Password"
              type="password"
              autoComplete="password"
              touched={touched.password}
              error={errors.password}
              {...getFieldProps('password')}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="pt-12 text-base text-gray-500 ">
              <div className="flex items-center justify-center space-x-3">
                <input type="checkbox" id="checkbox" />
                <span>
                  <label className="cursor-pointer" htmlFor="checkbox">
                    {' '}
                    I agree to the{' '}
                    <span className="text-blue-600 cursor-pointer">
                      terms and conditions
                    </span>
                  </label>
                </span>
              </div>
            </div>
            <Button children="Sign Up" className="" />
          </div>
          {isSubmitting && <FaSpinner className="animate-spin"></FaSpinner>}

          <div>
            <Toggle switchText="Show Password" />
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

Signup.defaultProps = {};

export default memo(Signup);
