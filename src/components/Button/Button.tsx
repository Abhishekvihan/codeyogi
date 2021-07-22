import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  theme?: 'primary' | 'secondary';
  className: string;
  Icon?: IconType;
}

const Button: React.FC<Props> = ({
  children,
  className,
  theme,
  Icon,
  ...rest
}) => {
  const themeClasses =
    theme === 'primary'
      ? 'bg-blue-600 rounded-md shadow-xl hover:bg-blue-500 hover:shadow-none '
      : 'bg-gray-600 rounded-md shadow-xl hover:bg-gray-500 hover:shadow-none ';

  const iconThemeClasses =
    theme === 'primary'
      ? 'bg-blue-600 group-hover:bg-blue-500'
      : 'text-gray-300 bg-gray-600 group-hover:text-gray-400';

  return (
    <button
      {...rest}
      type="submit"
      className={
        'relative w-28 flex justify-center px-3 py-3 text-sm font-medium text-white transition-all  ' +
        themeClasses +
        ' ' +
        className
      }
    >
      {Icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon className={'w-5 h-5 ' + iconThemeClasses} aria-hidden="true" />
        </span>
      )}
      {children}
    </button>
  );
};

Button.defaultProps = { theme: 'primary' };

export default React.memo(Button);
