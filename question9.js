import React from 'react';

function ClickLogger({ logMessage }) {
  return <button onClick={logMessage}>Click me</button>;
}

export default ClickLogger;
