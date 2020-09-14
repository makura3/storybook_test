import './../../../assets/scss/components/_button.scss';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  return `
    <button class='c-button c-button--primary'>button primary</button>
  `
  // const btn = document.createElement('button');
  // btn.type = 'button';
  // btn.innerText = children;
  // btn.addEventListener('click', onClick);
  // return btn;
};

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  onClick: action('onClick'),
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: '😀 😎 👍 💯',
};

export const TextWithAction = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Trigger Action';
  btn.addEventListener('click', () => action('This was clicked')());
  return btn;
};

TextWithAction.storyName = 'With an action';
TextWithAction.parameters = { notes: 'My notes on a button with emojis' };
