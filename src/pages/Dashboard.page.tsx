import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        This is Dashboard page.
        <Link to="/recordings">
          <span className="text-blue-500"> go to Recordings </span>
        </Link>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
