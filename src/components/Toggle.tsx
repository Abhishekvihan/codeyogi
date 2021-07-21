import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

interface Props {
  switchText: string;
}

const Toggle: React.FC<Props> = ({ switchText }) => {
  const [isEnabled, setisEnabled] = useState(false);
  return (
    <div className="flex items-center text-gray-600">
      {switchText}{' '}
      <Switch checked={isEnabled} onChange={setisEnabled}>
        <span
          className={` flex  h-5 py-0.5   rounded-full shadow-xl w-8 transform transition ease-in -out bg-gray-200 duration-200  ${
            isEnabled ? 'justify-end bg-blue-500' : ''
          } `}
        >
          <span
            className={`block w-4 h-4  rounded-full transform transition ease-in -out duration-200  ${
              isEnabled ? 'bg-gray-100' : 'bg-blue-500'
            }`}
          ></span>
        </span>
      </Switch>
    </div>
  );
};
Toggle.defaultProps = {};

export default React.memo(Toggle);
