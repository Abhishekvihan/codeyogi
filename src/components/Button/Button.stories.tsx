import Button from './Button';
import { HiLockClosed, HiLogin, HiLockOpen } from 'react-icons/hi';
import '../../index.css';
const icons = { HiLockClosed, HiLogin, HiLockOpen };

const Xyz = {
  title: 'My button',
  component: Button,
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          HiLockClosed: 'closed Lock',
          HiLogin: 'login Icon',
          HiLockOpen: 'open Lock',
        },
      },
    },
  },
};

export const main = (args: any) => <Button {...args}> Sign in</Button>;
main.args = {
  children: 'Sign in',
  type: 'submit',
  className: '',
  disabled: false,
  Icon: HiLockClosed,
};

export default Xyz;
