import React, { useEffect, useState } from 'react';
import "./Header.css";

function Header() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="div1">
      <div className="animated-text">
        <div className="line">CLICK HERE FOR : <u className="toptext">DISPATCH TIMELINE</u></div>
        {showSecondLine && (
          <div className="line">FOR INTERNATIONAL WEBSITE VISIT : <u className="toptext">WWW.BAROQUE.COM.PK</u></div>
        )}
        <div className="line">CLICK HERE FOR : <u className="toptext">DISPATCH TIMELINE</u></div>
      </div>
    </div>
  );
}

export default Header;