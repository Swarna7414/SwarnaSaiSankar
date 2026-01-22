import React, { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCalendarCheck, FaComputer } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";

interface EducationContentProps {
    darkMode: boolean;
}

const EducationContent: React.FC<EducationContentProps> = ({ darkMode }) => {

    const [currentExpSlide, setCurrentExpSlide] = useState(0);
    const totalSlides = 3;

    const nextExpSlide = () => {
        setCurrentExpSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevExpSlide = () => {
        setCurrentExpSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <style>{`
                .slide1-scrollable::-webkit-scrollbar {
                    width: 1px;
                }
                .slide1-scrollable::-webkit-scrollbar-track {
                    background: transparent;
                }
                .slide1-scrollable::-webkit-scrollbar-thumb {
                    background: transparent;
                    border-radius: 0px;
                    border: none;
                    transition: background 0.3s ease;
                }
                .slide1-scrollable:hover::-webkit-scrollbar-thumb {
                    background: ${darkMode ? '#FFFFFF' : '#000000'};
                }
                .slide1-scrollable::-webkit-scrollbar-thumb:hover {
                    background: ${darkMode ? '#FFFFFF' : '#000000'};
                }
                .slide1-scrollable::-webkit-scrollbar-button {
                    display: none !important;
                    height: 0 !important;
                    width: 0 !important;
                }
                .slide1-scrollable::-webkit-scrollbar-button:start:decrement,
                .slide1-scrollable::-webkit-scrollbar-button:end:increment {
                    display: none !important;
                }
                .slide1-scrollable::-webkit-scrollbar-corner {
                    display: none !important;
                }
                .slide1-scrollable:hover {
                    scrollbar-color: ${darkMode ? 'rgba(255, 255, 255, 1) transparent' : 'rgba(0, 0, 0, 1) transparent'} !important;
                }
            `}</style>
            <div className="space-y-8">
            {/* Education Section */}
            <div>
                <h2 className={`text-2xl font-serif mb-4 transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Education</h2>
                <div className='w-full min-h-min flex flex-col xl:flex-row items-center justify-between gap-8 px-1 py-2'>
                    {/* First box */}
                    <div className={`w-full min-h-min border-2 px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black border-white hover:shadow-white hover:border-gray-300' : 'bg-white border-black hover:border-black hover:shadow-black hover:shadow-sm'} hover:shadow-md`}>
                        <div className={`flex flex-col gap-0.5 ${darkMode ? 'text-white' : 'text-black'}`}>
                            <div className='flex flex-row items-center'>
                                <MdCheckBox className='text-lg mr-1 group-hover:text-green-600'/>
                                <p className='italic'>Jan 2025 - May 2026</p>
                            </div>
                            <h1 className='font-bold text-lg'>Masters - University Of South Dakota</h1>
                            <p>Computer Science - 3.9 GPA</p>
                        </div>
                    </div>
                    
                    {/* Second box */}
                    <div className={`w-full min-h-min border-2 px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black border-white hover:shadow-white hover:border-gray-300' : 'bg-white border-black hover:shadow-sm hover:shadow-black'} hover:shadow-md`}>
                        <div className={`flex flex-col gap-0.5 ${darkMode ? 'text-white' : 'text-black'}`}>
                            <div className='flex flex-row items-center'>
                                <MdCheckBox className='text-lg mr-1 group-hover:text-green-600'/>
                                <p className='italic'>Jan 2025 - May 2026</p>
                            </div>
                            <h1 className='font-bold text-lg'>Bachelor's - MohanBabu Universiry</h1>
                            <p>Mechanical Engineering - 7.9 GPA</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <hr className={`transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} />

            {/* Experience Section - Carousel with 3 Slides */}
            <div>
                <h2 className={`text-2xl font-serif transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Experience</h2>
                
                {/* Carousel Container with Side Arrows */}
                <div className="relative w-full flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={prevExpSlide}
                        className={`transition-colors duration-300 -mr-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Previous experience"
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>

                    
                    <div className="flex-1 overflow-hidden">
                        <div className={`rounded-lg min-h-[500px] transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black' : 'bg-white'}`}>
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentExpSlide * 100}%)` }}
                            >
                                {/* Slide 1 */}
                                <div className="w-full flex-shrink-0 px-12 py-12 min-h-[500px] flex flex-col items-start justify-start gap-4">
                                    <div className='flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg'>
                                        <FaRegCalendarCheck className={`text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-black'}`}/>
                                        <h1 className={darkMode ? 'text-white' : 'text-black'}>Jul 2022 - Dec 2024</h1>
                                    </div>
                                    <h1 className={`font-semibold text-lg xl:text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>Tata Consultancy Services (TCS)</h1>
                                    <div className='w-full'>
                                        <div className='xl:ml-3 flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg mb-3 group'>
                                            <div className='relative'>
                                                <TbRectangleFilled className={`text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} group-hover:opacity-0 transition-opacity duration-300`}/>
                                                <FaComputer className={`absolute inset-0 text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>
                                            </div>
                                            <h1 className={`font-semibold italic ${darkMode ? 'text-white' : 'text-black'}`}>Citi Bank <span className={darkMode ? 'text-white' : 'text-black'}>(Jul 2022 - Jun 2024)</span></h1>
                                        </div>
                                        <div className='slide1-scrollable xl:ml-3 space-y-3 max-h-[350px] overflow-y-auto' style={{
                                            scrollbarWidth: 'thin',
                                            scrollbarColor: darkMode ? 'rgba(255, 255, 255, 0) transparent' : 'rgba(0, 0, 0, 0) transparent',
                                            scrollbarGutter: 'stable'
                                        }}>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>1.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I worked on a large-scale customer onboarding platform for a global banking client, where I helped modernize a legacy system by breaking it down into microservices.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>2.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I built and maintained Spring Boot–based REST APIs, making sure they were clean, reliable, and easy for other teams and services to consume.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>3.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I collaborated closely with my teammates to set up an API Gateway, which simplified communication and routing between multiple backend services.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>4.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I regularly used modern Java features and Streams to write cleaner, more efficient code, improving both performance and long-term maintainability.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>5.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I handled database operations using Spring Data JPA and Hibernate, working with entities, repositories, and transactions that supported real business workflows.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>6.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>To keep the codebase stable, I wrote unit tests using JUnit and Mockito, maintaining around 80% test coverage across the services I worked on.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>7.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Before every release, I thoroughly tested APIs using Postman, checking edge cases and error scenarios to ensure smooth production deployments.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>8.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>I was also involved in CI/CD pipelines with Jenkins and Bitbucket, and actively participated in code reviews and release discussions with developers, QA, and DevOps teams.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="w-full flex-shrink-0 px-12 py-12 min-h-[500px] flex flex-col items-start justify-start gap-4">
                                    <div className='flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg'>
                                        <FaRegCalendarCheck className={`text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-black'}`}/>
                                        <h1 className={darkMode ? 'text-white' : 'text-black'}>Jan 2025 - May 2026</h1>
                                    </div>
                                    <h1 className={`font-semibold text-lg xl:text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>University Of South Dakota</h1>
                                    <div className='w-full'>
                                        <div className='xl:ml-3 flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg mb-3 group'>
                                            <div className='relative'>
                                                <TbRectangleFilled className={`text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} group-hover:opacity-0 transition-opacity duration-300`}/>
                                                <FaUniversity className={`absolute inset-0 text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>
                                            </div>
                                            <h1 className={`font-semibold italic ${darkMode ? 'text-white' : 'text-black'}`}>Graduate Research Assistant – Frontend Developer</h1>
                                        </div>
                                        <div className='xl:ml-3 space-y-3'>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>1.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Worked on building frontend interfaces using React to make AI and machine learning models developed by the department usable through simple web applications.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>2.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Updated Department websites using HTML and plain CSS, improving layout structure, responsiveness, and content accessibility.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>3.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Supported existing projects by fixing UI issues and improving previously developed project interfaces to enhance usability and overall user experience.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>4.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Collaborated with faculty members and research teams to understand project requirements and translate them into practical frontend features.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>5.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Assisted with integrating model APIs and backend services into the frontend to support real-time results and visual outputs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 3 */}
                                <div className="w-full flex-shrink-0 px-12 py-12 min-h-[500px] flex flex-col items-start justify-start gap-4">
                                    <div className='flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg'>
                                        <FaRegCalendarCheck className={`text-lg xl:text-xl ${darkMode ? 'text-white' : 'text-black'}`}/>
                                        <h1 className={darkMode ? 'text-white' : 'text-black'}>May 2025 - present</h1>
                                    </div>
                                    <h1 className={`font-semibold text-lg xl:text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>Open Source Developer</h1>
                                    <div className='w-full'>
                                        <div className='xl:ml-3 flex flex-row gap-1.5 items-center font-semibold italic text-base xl:text-lg mb-3 group'>
                                            <div className='relative'>
                                                <TbRectangleFilled className={`text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} group-hover:opacity-0 transition-opacity duration-300`}/>
                                                <FaComputer className={`absolute inset-0 text-base xl:text-lg ${darkMode ? 'text-white' : 'text-black'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>
                                            </div>
                                            <h1 className={`font-semibold italic ${darkMode ? 'text-white' : 'text-black'}`}>Open Source Projects</h1>
                                        </div>
                                        <div className='xl:ml-3 space-y-3'>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>1.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Actively contributed to well-known open-source projects such as <a href="https://github.com/metasfresh/metasfresh" target="_blank" rel="noopener noreferrer" className={`underline hover:opacity-80 transition-opacity ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>metasfresh</a>, <a href="https://github.com/codecentric/spring-boot-admin" target="_blank" rel="noopener noreferrer" className={`underline hover:opacity-80 transition-opacity ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Spring Boot Admin</a>, <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer" className={`underline hover:opacity-80 transition-opacity ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>JHipster</a>, <a href="https://github.com/jvondermarck/dinosaur-exploder" target="_blank" rel="noopener noreferrer" className={`underline hover:opacity-80 transition-opacity ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Dinosaur Exploder</a>, and projects within the <a href="https://github.com/spring-projects/spring-framework" target="_blank" rel="noopener noreferrer" className={`underline hover:opacity-80 transition-opacity ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Spring Framework</a> ecosystem.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>2.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Investigated and fixed issues by navigating large codebases, debugging Java and Spring-based components, and submitting pull requests that addressed bugs, edge cases, and minor feature gaps.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>3.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Improved code reliability by writing and updating JUnit-based unit tests, validating fixes locally, and ensuring changes did not break existing functionality before submitting PRs.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>4.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Refactored existing code to resolve SonarQube warnings, including code smells, unused logic, and maintainability issues, while keeping changes aligned with project coding standards.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>5.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Assisted with dependency and framework upgrades, including Java version compatibility fixes and library updates, and verified builds locally using Maven and Gradle before contribution.</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row items-start xl:ml-1.5 gap-3'>
                                                <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>6.</span>
                                                <div className='flex flex-col'>
                                                    <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>Collaborated with maintainers through GitHub pull requests, issue discussions, and code reviews, adapting to different project architectures, CI checks, and contribution workflows.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextExpSlide}
                        className={`transition-colors duration-300 -ml-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Next experience"
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentExpSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentExpSlide === index 
                                    ? 'bg-blue-600' 
                                    : darkMode 
                                        ? 'bg-gray-700 border-2 border-gray-500' 
                                        : 'bg-white border-2 border-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
        </>
    );
};

export default EducationContent;
