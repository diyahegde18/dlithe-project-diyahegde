import React from 'react';

function StatusIndicator({ isOnline }) {
  const style = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red'
  };
  return <div style={style}></div>;
}

export default StatusIndicator;
