import React, { useState } from 'react';

const TwoWayBindingExample = () => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    const newTextValue = event.target.value;
    setTextValue(newTextValue);
  };

  return (
    <div>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>{textValue}</p>
    </div>
  );
};

export default TwoWayBindingExample;
