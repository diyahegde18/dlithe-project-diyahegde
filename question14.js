import React, { useState } from 'react';

function Quiz() {
  const questions = ['What is React?', 'What is JSX?', 'What is useState?'];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <p>{questions[index]}</p>
      <button onClick={() => setIndex(index - 1)} disabled={index === 0}>Previous</button>
      <button onClick={() => setIndex(index + 1)} disabled={index === questions.length - 1}>Next</button>
    </div>
  );
}

export default Quiz;
