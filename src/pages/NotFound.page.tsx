import { FC, memo } from 'react';

interface Props {}

const NotFound: FC<Props> = (props) => {
  return (
    <div className="w-screen h-screen bg-red-300">sorry the page not found</div>
  );
};

NotFound.defaultProps = {};

export default memo(NotFound);
