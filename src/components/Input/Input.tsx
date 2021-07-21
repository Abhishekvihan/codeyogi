import React from 'react';
import { InputHTMLAttributes } from 'react';
import { FC, memo } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  touched?: boolean;
}

const InputElement: FC<Props> = ({
  touched,
  error,
  className,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <div className="pt-12">
      <div>
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}
        <input
          id={id}
          {...rest}
          className={
            'w-full leading-10 tracking-widest transition-all border-b border-gray-300 outline-none focus:border-blue-500 ' +
            className
          }
          placeholder={placeholder}
        />
        {touched && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  );
};

InputElement.defaultProps = {};

export default memo(InputElement);
