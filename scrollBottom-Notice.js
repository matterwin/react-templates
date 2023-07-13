import React, { useEffect, useState } from 'react';

function App() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      
      if (windowHeight + scrollTop >= documentHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ paddingBottom:'1000px' }}>
      {/* Your app content */}
      {isBottom && alert('reached bottom')}
    </div>
  );
}

export default App;
