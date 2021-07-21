import Button from './Button';
import '../../index.css';

const Xyz = {
  title: 'My button',
  component: Button,
};

export const main = (args: any) => <Button {...args}> Sign in</Button>;

export default Xyz;
