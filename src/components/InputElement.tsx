import React from 'react';
import { ReactElement } from 'react';
import { FC, memo } from 'react';

interface Props {
  placeholder: string;
  type: string;
  children: ReactElement;
}

const InputElement: FC<Props> = ({ placeholder, type }) => {
  return (
    <div className="pt-12">
      <div>
        <input
          placeholder={placeholder}
          type={type}
          className="w-full leading-10 tracking-widest transition-all border-b border-gray-300 outline-none focus:border-blue-500"
          required
        />
      </div>
    </div>
  );
};

InputElement.defaultProps = {};

export default memo(InputElement);
