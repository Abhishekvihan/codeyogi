import React from 'react';
import { HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  buttontext: string;
  className: string;
}

const ButtonBlue: React.FC<Props> = ({ buttontext, className, ...rest }) => {
  return (
    <div className="pt-12">
      <button
        type="submit"
        className={
          'px-3 py-3 text-white transition-all bg-blue-600 rounded-md shadow-xl hover:bg-blue-500 hover:shadow-none ' +
          className
        }
      >
        {buttontext}
      </button>
    </div>
  );
};

ButtonBlue.defaultProps = {};

export default React.memo(ButtonBlue);
