import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
  color,
  bgColor,
  text,
  borderRadius,
  size,
  icon,
  bgHoverColor,
  width,
}) => {
  const { handleClick } = useStateContext();

  return (
    <button
      type='button'
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
