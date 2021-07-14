import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div>
      This is login page. Don't have an account{' '}
      <Link to="/signup">
        <span className="text-blue-500">click here</span>
      </Link>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
