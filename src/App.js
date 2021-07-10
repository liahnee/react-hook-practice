import React from 'react';
import TestRef from './practices/useRefP';
import TestContext from './practices/useContextP';
import TestHOC from './practices/componentHover';
import './App.css';

function App() {
  return (
    <div className="App">
      <TestContext />
      <TestRef />
      <TestHOC />
    </div>
  );
}

export default App;
