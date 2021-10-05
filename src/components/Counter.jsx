import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  function inc() {
    setCount(prev => prev + 1)
  }

  function dec() {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <h5>{count}</h5>
      <button className="btn btn-sm btn-primary mx-1" onClick={inc}>Increment</button>
      <button className="btn btn-sm btn-danger" onClick={dec}>Decrement</button>
    </div>
  );
};

export default Counter;