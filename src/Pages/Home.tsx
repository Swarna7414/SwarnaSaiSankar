import React, { useState } from 'react';
import Pic from "../assets/about.png"
import { displaylinks } from '../util/types';
import EducationContent from '../components/EducationContent';
import SkillsContent from '../components/SkillsContent';
import ProjectsContent from '../components/ProjectsContent';
import { FaChevronDown } from 'react-icons/fa';

interface HomeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Home: React.FC<HomeProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState<string>('education');
  const [isMobileExpanded, setIsMobileExpanded] = useState<boolean>(false);

  const tabs = [
    { id: 'education', label: 'Education & Experience' },
    { id: 'skills', label: 'My Skills' },
    { id: 'projects', label: 'My Works & Publications' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">


          <div className={`w-full md:w-[35%] lg:w-[35%] xl:w-[35%] border-2 rounded-lg p-4 md:p-6 transition-colors duration-300 ${darkMode ? 'border-white bg-black' : 'border-black bg-white'} flex flex-col`}>
            <div>
              <img
                src={Pic}
                alt="Sai Image"
                onClick={toggleDarkMode}
                className='rounded-2xl w-full cursor-pointer hover:opacity-90 transition-opacity duration-300'
              />
              <br />
              <h1 className={`m-1 font-bold text-2xl italic text-center hover:underline hover:decoration-blue-500 hover:text-blue-800 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sai Sankar Swarna</h1>
              
             
              <div className="md:hidden flex justify-center mt-2 w-full">
                <button
                  onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                  className={`rounded-full p-2 transition-transform duration-300 ${isMobileExpanded ? 'rotate-180' : ''} ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                  aria-label={isMobileExpanded ? 'Collapse' : 'Expand'}
                >
                  <FaChevronDown className={`text-lg  rounded-2xl p-1 transition-colors duration-300 ${darkMode ? 'text-black bg-white' : 'text-white dark:bg-black'}`} />
                </button>
              </div>


              <div className={`md:block ${isMobileExpanded ? 'block' : 'hidden'}`}>
                <p className={`mt-4 text-md leading-relaxed text-justify transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-black'}`}>
                Hello I'm Sai Sankar Swarna and I'm a Full Stack Developer with over 3.5 years of experience building web applications with React, Java, and Python. I love creating responsive interfaces using Tailwind CSS and reliable back-end systems with Spring Boot. I've worked with microservices, RESTful APIs, and real-time communication through WebSocket's. Comfortable deploying applications on AWS (EC2, ECS, EKS), setting up CI/CD pipelines with Jenkins.
                </p>
                <br />
                <hr className={`mt-0.5 transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} />

                <div className="mt-4 space-y-4">
                  {displaylinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.value.startsWith('http') ? link.value : `https://${link.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 transition-colors duration-200 rounded-lg cursor-pointer ${darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`}
                    >

                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <div className={`text-2xl hover:text-blue-400 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
                          {link.logo}
                        </div>
                      </div>


                      <div className="flex-1 min-w-0">

                        <div className={`text-xs uppercase tracking-wider mb-1 transition-colors duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {link.name.toUpperCase()}
                        </div>

                        <div className={`hover:text-blue-500 transition-colors duration-200 block truncate ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className={`w-full md:w-[65%] border-2 rounded-lg p-6 transition-colors duration-300 ${darkMode ? 'border-white bg-black' : 'border-black bg-white'} flex flex-col`}>

            {/* Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-6 border-b pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-t-lg font-medium transition-all duration-300 ${activeTab === tab.id
                    ? darkMode
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : darkMode
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            
            <div className={`space-y-6 leading-relaxed transition-colors duration-300 flex-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>

              {activeTab === 'education' && <EducationContent darkMode={darkMode} />}
              {activeTab === 'skills' && <SkillsContent darkMode={darkMode} />}
              {activeTab === 'projects' && <ProjectsContent darkMode={darkMode} />}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;