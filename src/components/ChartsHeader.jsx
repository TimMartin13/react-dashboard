import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const ChartsHeader = ({ category, title }) => {
  const { currentMode } = useStateContext();
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-light dark:text-gray-300'>
        {title}
      </p>
    </div>
  );
};

export default ChartsHeader;
