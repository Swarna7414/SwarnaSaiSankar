import React from 'react';
import { frameworks, Languages, Tools } from '../util/types';
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

interface SkillsContentProps {
    darkMode: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ darkMode }) => {
    return (
        <div>
            <h2 className={`text-2xl font-serif mb-4 transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Skills</h2>

            {/* bigBox */}
            <div className='flex xl:flex-row flex-col justify-between gap-4'>
                <div className='h-min font-normal w-full flex flex-col justify-between gap-6'>
                    <div className='xl:ml-2 text-lg'>
                        <div>
                            <h1 className='font-semibold'>Languages</h1>
                            <div className='h-min w-full md:pt-0.5 xl:pt-2'>
                                <div className={`flex flex-col gap-5 h-min border-2 px-5 py-5 rounded-2xl transition-all duration-300 hover:border-orange-300 hover:shadow-md hover:shadow-orange-400 ${darkMode ? 'border-white' : 'border-black'}`}>
                                    {Languages.map((lang, index)=>(
                                        <div className='flex flex-row items-center gap-3 group' key={index}>
                                            <div className='relative'>
                                                <FaDotCircle className='group-hover:opacity-0 transition-opacity duration-300 text-orange-400' />
                                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-500'>
                                                    {lang.logo}
                                                </div>
                                            </div>
                                            <p>{lang.skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tools & Technologies */}
                    <div className='h-min font-normal w-full'>
                        <h1 className='font-semibold'>Tools & Technologies</h1>
                        <div className='h-min w-full md:pt-0.5 xl:pt-2'>
                                <div className={`flex flex-col gap-5 h-min border-2 hover:border-blue-300 hover:shadow-md hover:shadow-blue-400 px-5 py-5 rounded-2xl transition-all duration-300 ${darkMode ? 'border-white' : 'border-black'}`}>
                                    {Tools.map((tool, index)=>(
                                        <div className='flex flex-row items-center gap-3 group' key={index}>
                                            <div className='relative'>
                                                <FaRegDotCircle className='group-hover:opacity-0 transition-opacity duration-300 text-blue-400' />
                                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500'>
                                                    {tool.logo}
                                                </div>
                                            </div>
                                            <p>{tool.skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
                <div className='w-full xl:mt-44 flex flex-col'>
                    <h1 className='font-semibold mb-0.5'>Frame Works</h1>
                    <div className={`flex flex-col gap-5 h-min border-2 hover:border-green-300 hover:shadow-md hover:shadow-green-400 px-5 py-5 rounded-2xl transition-all duration-300 ${darkMode ? 'border-white' : 'border-black'}`}>
                        {frameworks.map((framework,index)=>(
                            <div className='flex flex-row items-center gap-3 group' key={index}>
                            <div className='relative'>
                                <FaRegDotCircle className='group-hover:opacity-0 transition-opacity duration-300 text-green-400' />
                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-500'>
                                    {framework.logo}
                                </div>
                            </div>
                            <p>{framework.skill}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SkillsContent;
