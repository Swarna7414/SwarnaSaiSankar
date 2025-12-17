import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "../src/Pages/Home";
import cursorImage from "./assets/cursor.png";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newValue));
      return newValue;
    });
  };

  useEffect(() => {

    document.body.style.cursor = `url(${cursorImage}), auto`;


    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `
      * {
        cursor: url(${cursorImage}), auto !important;
      }
      /* All anchor tags should use pointer cursor */
      a, a * {
        cursor: pointer !important;
      }
      /* Navigation links - Home, About, DataBase */
      a[href="/"], a[href="/about"], a[href*="db-console"],
      a[href="/"] *, a[href="/about"] *, a[href*="db-console"] * {
        cursor: pointer !important;
      }
      /* Input fields - show default text cursor (I-beam) */
      input, textarea, [contenteditable="true"], [contenteditable=""] {
        cursor: text !important;
      }
      /* Buttons should use pointer cursor */
      button, button * {
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);


    const applyPointerCursor = () => {

      const allLinks = document.querySelectorAll('a');
      allLinks.forEach(link => {
        if (link instanceof HTMLElement) {
          link.style.setProperty('cursor', 'pointer', 'important');

          link.querySelectorAll('*').forEach(child => {
            if (child instanceof HTMLElement) {
              child.style.setProperty('cursor', 'pointer', 'important');
            }
          });
        }
      });

      const navLinks = document.querySelectorAll('a[href="/"], a[href="/about"], a[href*="db-console"]');
      navLinks.forEach(link => {
        if (link instanceof HTMLElement) {
          link.style.setProperty('cursor', 'pointer', 'important');

          link.querySelectorAll('*').forEach(child => {
            if (child instanceof HTMLElement) {
              child.style.setProperty('cursor', 'pointer', 'important');
            }
          });
        }
      });


      const allButtons = document.querySelectorAll('button');
      allButtons.forEach(btn => {
        btn.style.setProperty('cursor', 'pointer', 'important');
        btn.querySelectorAll('*').forEach(child => {
          if (child instanceof HTMLElement) {
            child.style.setProperty('cursor', 'pointer', 'important');
          }
        });
      });
    };


    applyPointerCursor();


    const observer = new MutationObserver(() => {
      applyPointerCursor();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });


    const timeoutId = setTimeout(applyPointerCursor, 100);

    return () => {

      const styleElement = document.getElementById('custom-cursor-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      observer.disconnect();
      clearTimeout(timeoutId);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;