import React from 'react';
import 'boxicons/css/boxicons.min.css';
import NavBarLogo from '../assets/Navbarlogo.png'

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} h-36 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-50 transition-colors duration-300`}>
      <div className="flex items-center space-x-2">
        <img
          src={NavBarLogo}
          alt="AI Lab Logo"
          onClick={toggleDarkMode}
          className="h-32 w-32 object-contain cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;