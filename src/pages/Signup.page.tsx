import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div>
      This is SignUp page Already have an account
      <Link to="/login">
        <span className="text-blue-500"> click here </span>
      </Link>
      to Login .
      <Link to="/dashboard">
        <span className="text-blue-500"> go to dashboard </span>
      </Link>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
