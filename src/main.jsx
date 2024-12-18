// main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import './index.css';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <React.StrictMode>
      <Header onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
