import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-box">
          <div className="loader-side front">C</div>
          <div className="loader-side back">M</div>
          <div className="loader-side right">P</div>
          <div className="loader-side left">A</div>
          <div className="loader-side top">R</div>
          <div className="loader-side bottom">E</div>
        </div>
        <div className="loader-text">
          <span className="char">L</span>
          <span className="char">O</span>
          <span className="char">A</span>
          <span className="char">D</span>
          <span className="char">I</span>
          <span className="char">N</span>
          <span className="char">G</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
