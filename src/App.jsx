import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Header title="Web Application" />
      <div className="content">
        <Card>
          <h2>Welcome</h2>
          <p>This is a simple web application</p>
          <Button text="Click Me" />
        </Card>
      </div>
    </div>
  );
}

export default App;
