import { FC, memo } from 'react';

interface Props {}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="h-screen text-white bg-gray-400 w-60">this is sidebar</div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
