import React from 'react';
import { InputHTMLAttributes } from 'react';
import { FC, memo } from 'react';
import { IconType } from 'react-icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  touched?: boolean;
  Icon?: IconType;
}

const InputElement: FC<Props> = ({
  touched,
  error,
  className,
  placeholder,
  id,
  Icon,
  ...rest
}) => {
  return (
    <div className="pt-12">
      <div>
        {Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="w-5 h-5 " aria-hidden="true" />
          </span>
        )}
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
