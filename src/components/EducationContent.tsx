import React, { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface EducationContentProps {
    darkMode: boolean;
}

const EducationContent: React.FC<EducationContentProps> = ({ darkMode }) => {
    const experiences = [
        {
            date: "Jan 2023 - Dec 2024",
            title: "Software Engineer",
            company: "Tech Company A",
            description: "Description of your experience and achievements here..."
        },
        {
            date: "Jun 2021 - Dec 2022",
            title: "Junior Developer",
            company: "Tech Company B",
            description: "Description of your experience and achievements here..."
        }
    ];

    const [currentExpSlide, setCurrentExpSlide] = useState(0);

    const nextExpSlide = () => {
        setCurrentExpSlide((prev) => (prev + 1) % experiences.length);
    };

    const prevExpSlide = () => {
        setCurrentExpSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <div className="space-y-8">
            {/* Education Section */}
            <div>
                <h2 className={`text-2xl font-semibold mb-1 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>My Education</h2>
                <div className='w-full min-h-min flex flex-col xl:flex-row items-center justify-between gap-8 px-1 py-2'>
                    {/* First box */}
                    <div className='w-full min-h-min bg-white border-2 border-black px-3 py-1.5 rounded-md hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-800 group'>
                        <div className='flex flex-col gap-0.5 text-black'>
                            <div className='flex flex-row items-center'>
                                <MdCheckBox className='text-lg mr-1 group-hover:text-green-600'/>
                                <p className='italic'>Jan 2025 - May 2026</p>
                            </div>
                            <h1 className='font-bold text-lg'>Masters - University Of South Dakota</h1>
                            <p>Computer Science - 3.8 GPA</p>
                        </div>
                    </div>
                    
                    {/* Second box */}
                    <div className='w-full min-h-min bg-white border-2 border-black px-3 py-1.5 rounded-md hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 cursor-pointer group'>
                        <div className='flex flex-col gap-0.5 text-black'>
                            <div className='flex flex-row items-center'>
                                <MdCheckBox className='text-lg mr-1 group-hover:text-green-600'/>
                                <p className='italic'>Jan 2025 - May 2026</p>
                            </div>
                            <h1 className='font-bold text-lg'>Bachelor's - Sree Vidyanikethan Engineering College</h1>
                            <p>Mechanical Engineering - 7.9 GPA</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className={`transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} />

            {/* Experience Section */}
            <div>
                <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Experience</h2>
                
                {/* Carousel Container with Side Arrows */}
                <div className="relative w-full flex items-center gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={prevExpSlide}
                        className="text-black hover:text-blue-600"
                        aria-label="Previous experience"
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>

                    {/* Carousel Content */}
                    <div className="flex-1 overflow-hidden">
                        <div className={`rounded-lg border-2 ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-300 bg-white'} transition-colors duration-300`}>
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentExpSlide * 100}%)` }}
                            >
                                {experiences.map((exp, index) => (
                                    <div 
                                        key={index}
                                        className="w-full flex-shrink-0 px-6 py-5"
                                    >
                                        <div className={`flex flex-col gap-2 ${darkMode ? 'text-gray-200' : 'text-black'}`}>
                                            <p className={`italic text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                {exp.date}
                                            </p>
                                            <h3 className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                {exp.company}
                                            </p>
                                            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextExpSlide}
                        className="text-black hover:text-blue-600"
                        aria-label="Next experience"
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentExpSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentExpSlide === index 
                                    ? 'bg-blue-600' 
                                    : 'bg-white border-2 border-gray-400'
                            }`}
                            aria-label={`Go to experience ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default EducationContent;
