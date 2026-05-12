import React, { useContext, useState } from 'react';

export const CursorContext = createContext();

const CursorContextProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorBg, setCursorBg] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  // Check device size on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setCursorBg('none');
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse position — only on desktop
  useEffect(() => {
    if (isMobile) return;
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isMobile]);

  const onMouseEnter = () => { if (!isMobile) setCursorBg('text'); };
  const onMouseLeave = () => { if (!isMobile) setCursorBg('default'); };

  const cursorVariants = {
    default: {
      x: cursorPos.x - 8,
      y: cursorPos.y - 8,
      width: '16px',
      height: '16px',
      backgroundColor: '#C9A96E',
      mixBlendMode: 'normal',
      border: '0px solid transparent',
    },
    text: {
      width: '120px',
      height: '120px',
      x: cursorPos.x - 60,
      y: cursorPos.y - 60,
      backgroundColor: '#C9A96E',
      mixBlendMode: 'difference',
      border: '0px solid transparent',
    },
    none: {
      width: 0,
      height: 0,
      opacity: 0,
    },
  };

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBg, onMouseEnter, onMouseLeave }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
