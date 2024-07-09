// Thumb.jsx

import React from 'react';
import { CircularProgress, useMediaQuery } from '@mui/material';

const Thumb = (props) => {
  const { file, src, variant = 'normal' } = props;
  const matchWidthBigScreen = useMediaQuery('(min-width:900px)');

  if (!file && !src) {
    return null;
  }

  if (file && !src) {
    return <CircularProgress size={24} />;
  }

  return (
    <img
      src={src || URL.createObjectURL(file)}
      alt={file?.name || 'preview'}
      style={{
        maxWidth: `${
          variant === 'small'
            ? '100px'
            : matchWidthBigScreen
            ? '800px'
            : '350px'
        }`,
        minWidth: `${
          variant === 'small'
            ? '100px'
            : matchWidthBigScreen
            ? '700px'
            : '300px'
        }`,
        padding: `${variant === 'small' ? '1px' : '2px'}`,
        backgroundColor: 'gray',
        marginLeft: `${variant === 'small' ? '0px' : '20px'}`,
        width: '200px',
        height: '200px',
        borderRadius: '50%',
      }}
    />
  );
};

export default Thumb;
