import { useEffect } from 'react';
import { FC, memo } from 'react';
import Authside from '../Assets/Auth-side.webp';

interface Props {}

const Login: FC<Props> = (props) => {
  useEffect(() => {
    console.log('rendering for the first time');
  }, []);
  return (
    <div className="items-center justify-center hidden w-1/2 h-screen text-white lg:flex bg-primary-auth">
      <img
        src={Authside}
        alt="authside"
        className="flex-shrink w-3/4 md:auto md:h-auto h-3/4"
      />
      <div></div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
