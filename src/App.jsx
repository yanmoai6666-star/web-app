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
          <p>This is a modern web application with enhanced UI</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <Button text="Primary Action" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Delete" variant="danger" size="sm" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
