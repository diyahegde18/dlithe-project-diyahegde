import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
