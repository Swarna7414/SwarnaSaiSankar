import React from 'react';

interface SkillsContentProps {
    darkMode: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ darkMode }) => {
    return (
        <div>
            <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Skills</h2>
            <p>Skills content goes here...</p>
        </div>
    );
};

export default SkillsContent;
