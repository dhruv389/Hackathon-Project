import React from 'react';

const App = () => {
  // State example
  const [count, setCount] = React.useState(0);

  // Event handler example
  const handleClick = () => {
    setCount(count + 1);
  };

  return (

    <div>
      <h1>Hello, All Guys We are building a new startup!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};


export default App;
