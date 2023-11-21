import React, { useState } from 'react';

const ShowHideText = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClick={toggleTextVisibility}>
        {isTextVisible ? 'Hide Text' : 'Show Text'}
      </button>

      {isTextVisible && <p>This is the text that can be shown or hidden.</p>}
    </div>
  );
};

export default ShowHideText;