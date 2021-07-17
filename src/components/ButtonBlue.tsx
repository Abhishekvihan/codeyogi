import React from 'react';

interface Props {
  buttontext: string;
}

const ButtonBlue: React.FC<Props> = ({ buttontext }) => {
  return (
    <div className="pt-12">
      <div className="px-3 py-3 text-white transition-all bg-blue-600 rounded-md shadow-xl hover:bg-blue-500 hover:shadow-none">
        {buttontext}
      </div>
    </div>
  );
};

ButtonBlue.defaultProps = {};

export default React.memo(ButtonBlue);
