import React from 'react';
import LetterProvider from './context/LetterProvider';
import Letters from './components/Letters';

function App() {
  return (
    <LetterProvider>
      <Letters />
    </LetterProvider>
  );
}

export default App;
