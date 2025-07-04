import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Home');

  const content = {
    Home: 'Welcome Home!',
    About: 'This is About.',
    Contact: 'Contact us here.'
  };

  return (
    <div>
      {Object.keys(content).map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </button>
      ))}
      <p>{content[activeTab]}</p>
    </div>
  );
}

export default Tabs;
