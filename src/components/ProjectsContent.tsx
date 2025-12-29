import React, { useState, useEffect } from 'react';
import one from "../assets/ProjectWorks/First.png"
import second from "../assets/ProjectWorks/Second.png"
import fourth from "../assets/ProjectWorks/Fourth.png"
import third from "../assets/ProjectWorks/Third.png"
import fifth from "../assets/ProjectWorks/Fifth.png";
import Sixth from "../assets/ProjectWorks/Sixth.png";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface ProjectsContentProps {
    darkMode: boolean;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ darkMode }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [slidesPerPage, setSlidesPerPage] = useState(1);
    const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
    const totalSlides = 6;

    const projectNames = ["Sup", "DentiMap", "SwaRAG", "Code Generator", "Bit Coin Trading Agent", "GastroVision-Challenge"];
    
    const projectLinks = [
        "#",
        "https://debeshjha.github.io/DentiMap/",
        "https://swarna7414.github.io/SwaRAG-FrontEnd/",
        "#",
        "https://swarna7414.github.io/Agent-FrontEnd/", 
        "https://perceptionintelligencelab.github.io/GastroVision-Challenge/#home"
    ];
    
    const projectPublications = [
        "#",
        "#",
        "#",
        "#",
        "#",
        "#"
    ];
    
    const projectDescriptions = [
        "Sup - Coming soon Bhai",
        "DentiMap was built using a combination of modern backend, frontend, and AI technologies. The backend is developed with Spring Boot, which handles the core application logic, API endpoints, and communication with the AI services. To keep user data safe and secure, Spring Security is used for authentication and authorization.\n\nFor user storage and management, Hibernate (JPA) is used to interact with the database, with H2 serving as the database during development and testing. This setup made it easy to manage users efficiently while keeping the system lightweight and fast.\n\nThe AI part of the project focuses on analyzing dental images to detect potential oral health issues. The AI model processes uploaded images and sends the analysis results back to the backend through APIs, allowing the application to display clear and useful insights to users.\n\nOn the frontend, React is used to build a responsive and interactive user interface. It handles image uploads, displays analysis results visually, and communicates with the backend through REST APIs to ensure a smooth user experience.",
        "SwaRAG is a custom-built search and analysis tool created to help developers quickly find useful and trustworthy answers from Stack Overflow. Instead of showing long lists of links, it focuses on surfacing the most relevant content and presenting it in a clear, easy-to-read format. The goal is to save time and help users understand solutions faster without having to dig through multiple threads.\n\nOn the backend, SwaRAG is built using Flask, which handles search requests, data processing, and communication between different parts of the system. Stack Overflow data is collected through the Stack Exchange API and stored locally in a SQLite database. Once the data is downloaded, the system can run completely offline, making searches fast, reliable, and independent of external services.\n\nTo deliver accurate results, SwaRAG uses an inverted index along with the BM25 ranking algorithm to find and rank relevant questions and answers. The ranking is further improved by giving more importance to question titles, highly upvoted answers, and recent posts. In addition to basic search, the system uses a retrieval-augmented approach to combine key explanations and code snippets from multiple posts into a single, structured response.\n\nThe frontend is built with React, using React Router for smooth navigation and Tailwind CSS for a clean and responsive design. It communicates with the backend through REST APIs, making the application interactive and easy to use. The entire project is containerized using Docker and deployed on Hugging Face Spaces, ensuring consistent performance and a smooth deployment process.",
        "Code Generator - Coming Soon Bhai",
        "Agent Swarna is a Bitcoin trading bot built with reinforcement learning to handle the fast-moving and unpredictable nature of cryptocurrency markets. Since traditional trading strategies often struggle to adapt to sudden price changes, this project focuses on training an AI agent to make smarter buy, sell, or hold decisions using market data and sentiment signals.\n\nThe agent is trained using the PPO algorithm with the Stable-Baselines3 library. A custom trading environment was created using the OpenAI Gym framework, where the agent learns from historical Bitcoin prices, trading volume, and sentiment data. Training is done in multiple stages, starting with short 1-minute trades, moving to 5-minute intervals, and ending with confidence-based trading to improve overall decision-making.\n\nThe project is developed mainly in Python, using libraries such as NumPy and Pandas for data processing and Matplotlib for visualizing trading performance. Live Bitcoin price data is fetched from the OKX exchange, while news sentiment is analyzed using NewsAPI and the VADER sentiment analyzer, allowing the agent to react to both price movements and market news.\n\nTo make the system easy to use and monitor, a FastAPI backend exposes real-time trading predictions, net worth tracking, and sentiment updates through REST APIs. A React-based frontend consumes these APIs and provides a clean, interactive dashboard for visualizing trades, performance metrics, and market sentiment. The agent's performance is evaluated using financial metrics such as the Sharpe ratio, maximum drawdown, and overall profit, demonstrating the real-world potential of reinforcement learning in trading.",
        "I designed and developed this website as a modern, user-friendly platform focused on presenting information in a clear and visually engaging way. The layout emphasizes simplicity, readability, and intuitive navigation, ensuring that users can easily understand the content and move through different sections without confusion. Special attention was given to structuring the content logically and maintaining a consistent design throughout the site.\n\nFor the frontend development, I used React, which allowed me to build the website using reusable components and maintain a scalable and efficient codebase. React's component-based architecture helped in managing the UI effectively, improving performance, and making the application easier to maintain and extend in the future. State management and dynamic rendering were handled smoothly to create an interactive user experience.\n\nTo style the website, I used Tailwind CSS, which enabled rapid UI development with a clean and responsive design. Tailwind's utility-first approach helped me maintain consistent spacing, colors, and typography while ensuring responsiveness across different screen sizes. This combination of React and Tailwind CSS allowed me to create a modern, fast, and visually appealing website that aligns well with current web development best practices."
    ];

    useEffect(() => {
        const updateSlidesPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1280) { 
                setSlidesPerPage(3);
            } else if (width >= 768) { 
                setSlidesPerPage(2);
            } else {
                setSlidesPerPage(1);
            }
        };
        updateSlidesPerPage();
        window.addEventListener('resize', updateSlidesPerPage);
        return () => window.removeEventListener('resize', updateSlidesPerPage);
    }, []);

    const totalPages = Math.ceil(totalSlides / slidesPerPage);

    
    useEffect(() => {
        setCurrentPage(0);
    }, [slidesPerPage]);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="space-y-8">
            {/* Project Works Section */}
            <div>
                <h2 className={`text-2xl font-serif mb-4 transition-colors duration-300 underline underline-offset-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>My Works</h2>
                
                {/* Carousel Container */}
                <div className="relative w-full flex items-center gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={prevPage}
                        className={`transition-colors duration-300 z-10 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Previous projects"
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>

                    {/* Carousel Content - Responsive: 1 slide (mobile), 2 slides (md), 3 slides (xl) */}
                    <div className="flex-1 overflow-hidden">
                        <div className="rounded-lg transition-all duration-300">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentPage * 100}%)` }}
                            >
                                {/* Slide 1 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                    <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={one} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(0)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>Sup</h1>
                                    </div>
                                </div>

                                {/* Slide 2 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={second} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(1)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>DentiMap</h1>
                                    </div>
                                </div>

                                {/* Slide 3 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={third} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(2)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>SwaRAG</h1>
                                    </div>
                                </div>
                                {/* Slide 4 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                    <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={fourth} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(3)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>Code Generator</h1>
                                    </div>
                                </div>
                                {/* Slide 5 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                    <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={fifth} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(4)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>Bit Coin Trading Agent</h1>
                                    </div>
                                </div>
                                {/* Slide 6 */}
                                <div className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-4 py-6 flex items-center justify-center">
                                <div className='flex flex-col items-center group relative'>
                                        <div className='relative rounded-2xl group-hover:rounded-xl group-hover:scale-[0.98] transition-all duration-300 overflow-hidden'>
                                            <img src={Sixth} alt="" className="w-[500px] h-[250px] object-contain cursor-pointer" onClick={() => setSelectedSlide(5)} />
                                        </div>
                                        <h1 className={`mt-2 font-bold text-2xl transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-black group-hover:text-blue-600'}`}>GastroVision-Challenge</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextPage}
                        className={`transition-colors duration-300 z-10 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
                        aria-label="Next projects"
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                {/* Page Indicators - Dynamic based on mobile/desktop */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentPage === index 
                                    ? 'bg-blue-600' 
                                    : darkMode 
                                        ? 'bg-gray-700 border-2 border-gray-500' 
                                        : 'bg-white border-2 border-gray-400'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
                <h1 className='text-red-400'>Note : I also contribute to open-source projects, you can check them out on my <span className="hover:text-blue-500 cursor-pointer" onClick={()=>{window.open("https://github.com/Swarna7414")}}>GitHub.</span></h1>
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

            {/* Modal Popup with Blurred Background */}
            {selectedSlide !== null && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] transition-opacity duration-300"
                    onClick={() => setSelectedSlide(null)}
                >
                    {/* Popup Window */}
                    <div 
                        className={`relative max-w-4xl w-full mx-4 rounded-2xl p-8 shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-900 border-2 border-gray-700' : 'bg-white border-2 border-gray-300'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedSlide(null)}
                            className={`absolute top-4 right-4 text-2xl transition-colors duration-300 ${darkMode ? 'text-white hover:text-gray-400' : 'text-gray-600 hover:text-gray-800'}`}
                            aria-label="Close modal"
                        >
                            <FaTimes  className='hover:text-red-500'/>
                        </button>

                        {/* Modal Content - Text Only */}
                        <div className="flex flex-col">
                            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                                {projectNames[selectedSlide]}
                            </h2>
                            <p className={`whitespace-pre-line leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {projectDescriptions[selectedSlide]}
                            </p>
                            {/* Project Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href={projectLinks[selectedSlide] !== "#" ? projectLinks[selectedSlide] : "#"}
                                    target={projectLinks[selectedSlide] !== "#" ? "_blank" : undefined}
                                    rel={projectLinks[selectedSlide] !== "#" ? "noopener noreferrer" : undefined}
                                    onClick={(e) => {
                                        if (projectLinks[selectedSlide] === "#") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                        projectLinks[selectedSlide] !== "#"
                                            ? darkMode 
                                                ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer' 
                                                : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                                            : darkMode
                                                ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-50'
                                                : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                                    }`}
                                >
                                    Visit Project
                                </a>
                                <a
                                    href={projectPublications[selectedSlide] !== "#" ? projectPublications[selectedSlide] : "#"}
                                    target={projectPublications[selectedSlide] !== "#" ? "_blank" : undefined}
                                    rel={projectPublications[selectedSlide] !== "#" ? "noopener noreferrer" : undefined}
                                    onClick={(e) => {
                                        if (projectPublications[selectedSlide] === "#") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                        projectPublications[selectedSlide] !== "#"
                                            ? darkMode 
                                                ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer' 
                                                : 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                                            : darkMode
                                                ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-50'
                                                : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                                    }`}
                                >
                                    View Publication
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsContent;
