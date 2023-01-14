import { useState, useEffect, createContext, Children } from 'react';
export const CursorContext = createContext()
const CursorContextProvider = ({ children }) => {
  // Cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  })
  // cursor background state
  const [cursorBg, setCursorBg] = useState('default')
  // mouse leave and enter event handler
  const onMouseEnter = () => {
    setCursorBg('text')

  }
  const onMouseLeave = () => {
    setCursorBg('default')

  }
  // check device size
  const mobileSizeIsActive = window.innerWidth < 768
  useEffect(() => {
    if (!mobileSizeIsActive) {
      console.log(mobileSizeIsActive)
      const moveCursor = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY
        })
      }
      window.addEventListener('mousemove', moveCursor)

      return () => {
        window.removeEventListener('mousemove', moveCursor)
      }
    } else {
      setCursorBg('none')
    }
  })
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112'
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference'
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255,1)'
    }
  }
  return <CursorContext.Provider value={{ cursorVariants, cursorBg, onMouseEnter, onMouseLeave }}>{children}</CursorContext.Provider>;
};

export default CursorContextProvider;
