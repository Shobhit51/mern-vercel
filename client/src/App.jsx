// Import React and CSS
import React from 'react';
import './index.css';

// Import your new component
import MyComponent from './About';

// Define the main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <MyComponent /> 
        hello
      </header>
    </div>
  );
}

// Export the App component
export default App;
