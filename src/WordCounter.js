import React, { useState } from 'react';

function WordCounter() {
    const [wordCount, setWordCount] = useState(0);
  
    const handleInputChange = (e) => {
      const words = e.target.value.trim().split(/\s+/);
      setWordCount(words.length);
    };
  
    return (
      <div>
        <textarea
          placeholder="Enter your text..."
          rows={5}
          onChange={handleInputChange}
        ></textarea>
        <p>Word Count: {wordCount}</p>
      </div>
    );
  }
  
  export default WordCounter;
