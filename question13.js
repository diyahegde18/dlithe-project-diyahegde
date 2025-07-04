import React, { useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: '10px',
    minHeight: '100px'
  };

  return (
    <div style={themeStyle}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
