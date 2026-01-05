import React, { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCalendarCheck, FaComputer } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TbRectangleFilled } from "react-icons/tb";
import { Citi } from '../util/EducationTypes';

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
        <div className="space-y-8">
            {/* Education Section */}
            <div>
                <h2 className={`text-2xl font-serif mb-4 transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Education</h2>
                <div className='w-full min-h-min flex flex-col xl:flex-row items-center justify-between gap-8 px-1 py-2'>
                    {/* First box */}
                    <div className={`w-full min-h-min border-2 px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black border-white hover:border-blue-300' : 'bg-white border-black hover:border-blue-300'} hover:shadow-md hover:shadow-blue-400`}>
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
                    <div className={`w-full min-h-min border-2 px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black border-white hover:border-green-300' : 'bg-white border-black hover:border-green-300'} hover:shadow-md hover:shadow-green-400`}>
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

            {/* Divider */}
            <hr className={`transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} />

            {/* Experience Section - Carousel with 3 Slides */}
            <div>
                <h2 className={`text-2xl font-serif mb-4 transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Experience</h2>
                
                {/* Carousel Container with Side Arrows */}
                <div className="relative w-full flex items-center gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={prevExpSlide}
                        className={`transition-colors duration-300 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Previous experience"
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>

                    {/* Carousel Content */}
                    <div className="flex-1 overflow-hidden">
                        <div className={`rounded-lg min-h-[500px] transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black' : 'bg-white'}`}>
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentExpSlide * 100}%)` }}
                            >
                                {/* Slide 1 */}
                                <div className="w-full flex-shrink-0 px-8 py-8 min-h-[500px] flex flex-col items-start justify-start gap-4">
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
                                        <div className='xl:ml-3 space-y-3'>
                                            {Citi.map((citi,index)=>(
                                                <div className='flex flex-row items-start xl:ml-1.5 gap-3' key={index}>
                                                    <span className={`font-bold text-lg xl:text-xl flex-shrink-0 ${darkMode ? 'text-white' : 'text-black'}`}>{index + 1}.</span>
                                                    <div className='flex flex-col'>
                                                        <p className={`text-sm xl:text-base leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>{citi}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="w-full flex-shrink-0 px-8 py-8 min-h-[500px] flex flex-col items-start justify-start gap-4">
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
                                <div className="w-full flex-shrink-0 px-6 py-5 flex items-center justify-center">
                                    <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Slide 3</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextExpSlide}
                        className={`transition-colors duration-300 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Next experience"
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                {/* Slide Indicators - Shows 3 dots for 3 slides */}
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
    );
};

export default EducationContent;
