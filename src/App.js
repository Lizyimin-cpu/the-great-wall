import React from 'react';
import CommentSection from './CommentSection';
import SupportModule from './SupportModule';  // 添加这个模块
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Great Wall - Safe Space for Women</h1>
      </header>
      <main>
        <div className="comment-section">
          
          <CommentSection />
        </div>
        <div className="support-module">
          <h3>Support & Anti-Cyberbullying Resources</h3>
          <SupportModule />
        </div>
      </main>
    </div>
  );
}

export default App;



