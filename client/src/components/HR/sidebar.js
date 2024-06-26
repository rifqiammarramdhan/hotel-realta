import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: "fixed"}}>
      
    </div>
  )
};

export default Sidebar;