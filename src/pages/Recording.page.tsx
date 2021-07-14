import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Recordings: FC<Props> = (props) => {
  return (
    <div>
      This is Recordings page.
      <Link
        className="text-blue-500"
        to="/batch/:batchNumber/lecture/:lectureNumber"
      >
        Go to lecture page
      </Link>
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
