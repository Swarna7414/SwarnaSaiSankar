import React, { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { TbRectangleFilled } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";
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
                        <div className={`rounded-lg border-2 transition-all duration-300 cursor-pointer group ${darkMode ? 'bg-black border-white hover:border-blue-300' : 'bg-white border-black hover:border-blue-300'} hover:shadow-md hover:shadow-blue-400`}>
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentExpSlide * 100}%)` }}
                            >
                                {/* Slide 1 */}
                                <div className="w-full flex-shrink-0 px-6 py-5 flex flex-col items-start justify-start">
                                    <div className='flex flex-row gap-1.5 items-center font-semibold italic'>
                                        <FaRegCalendarCheck/>
                                        <h1>Jul 2022 - Dec 2024</h1>
                                    </div>
                                    <h1 className='font-semibold text-md xl:text-xl'>Tata Consultancy Services (TCS)</h1>
                                    <div>
                                        <div className='xl: ml-3 flex flex-row gap-1.5 items-center font-semibold italic'>
                                            <TbRectangleFilled/>
                                            <h1 className='font-semibold italic'> Citi Bank (Jul 2022 - Jun 2024)</h1>
                                        </div>
                                        <div className='xl: ml-3'>
                                            {Citi.map((citi,index)=>(
                                                <div className='flex flex-row items-center xl:ml-1.5' key={index}>
                                                    <TbPointFilled/>
                                                    <div className='flex flex-col gap-2'>
                                                        <p>{citi}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="w-full flex-shrink-0 px-6 py-5 flex items-center justify-center">
                                    <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Slide 2</h1>
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
