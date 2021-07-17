import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import InputElement from '../components/InputElement';
import { HiUser } from 'react-icons/hi';
import { BsLock } from 'react-icons/bs';
import Toggle from '../components/Toggle';
import ButtonBlue from '../components/ButtonBlue';

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-center w-1/2 pt-12 mx-auto leading-3 ">
      <div className="w-3/4 ">
        <div className="w-full pt-10 text-4xl tracking-wide text-gray-600 ">
          Log In to{' '}
          <span className="font-medium text-blue-600 cursor-pointer">CORK</span>
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
        <InputElement placeholder="Email" type="email">
          <HiUser />
        </InputElement>
        <InputElement placeholder="Password" type="password">
          <BsLock />
        </InputElement>
        <div className="flex items-center justify-between">
          <Toggle switchText="Show Password" />
          <ButtonBlue buttontext="Log In" />
        </div>
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
  );
};

Login.defaultProps = {};

export default memo(Login);
