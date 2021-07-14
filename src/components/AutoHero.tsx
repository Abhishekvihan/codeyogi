import { useEffect } from 'react';
import { FC, memo } from 'react';

interface Props {}

const Login: FC<Props> = (props) => {
  useEffect(() => {
    console.log('renderin for the first time');
  }, []);
  return (
    <div className="w-1/2 h-screen text-white bg-black">LOgo will go here</div>
  );
};

Login.defaultProps = {};

export default memo(Login);
