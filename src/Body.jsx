import React, { useState } from 'react'; // 1. Import the useState hook
import "./Body.css";

function Body(props) {
  // 2. Initialize state: "count" is our number, "setCount" is the function to update it
  const [count, setCount] = useState(0);
const [ userText, setUserText] = useState('');

  return (
    <main className="card-container">
      {/* Display the welcome text prop you passed from App.jsx */}
      <p className="welcome-text">{userText ||props.content}</p>
      {/* Interactive Text Input Field */}
      <div style={{ marginBottom: '25px' }}>
        <input 
          type="text" 
          placeholder="Type to customize the message..." 
          value={userText}
          onChange={(e) => setUserText(e.target.value)} // Updates state on every keystroke
          style={{ 
            padding: '10px', 
            width: '80%', 
            fontSize: '14px', 
            borderRadius: '6px', 
            border: '1px solid #ccc' 
          }}
        />
      </div>
      
      {/* 3. Display the current state value */}
      <h3 style={{ color: '#333', margin: '20px 0' }}>
        Current Clicks: <span style={{ color: '#007bff' }}>{count}</span>
      </h3>
      
      {/* 4. Increase the count by 1 whenever the button is clicked */}
      <button 
        onClick={() => setCount(count + 1)}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        +
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        -
      </button>
      {/* Resert button to set count back to 0 */}
      <button 
        onClick={() => setCount(0)}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#6c757d', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Reset
      </button>
    </main>
  );
}

export default Body;
