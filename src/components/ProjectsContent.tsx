import React from 'react';

interface ProjectsContentProps {
    darkMode: boolean;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ darkMode }) => {
    return (
        <div className="space-y-8">
            {/* Project Works Section */}
            <div>
                <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Project Works</h2>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Project works content goes here...
                </p>
            </div>

            {/* Divider */}
            <hr className={`transition-colors duration-300 ${darkMode ? 'border-gray-800' : 'border-gray-300'}`} />

            {/* Publications Section */}
            <div>
                <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Publications</h2>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Publications content goes here...
                </p>
            </div>
        </div>
    );
};

export default ProjectsContent;
