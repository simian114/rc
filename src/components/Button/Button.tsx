import React, { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
