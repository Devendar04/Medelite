import { Link } from 'react-router-dom';

const LanguageSelectionPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 to-blue-500 text-white">
      <div className="text-center bg-white bg-opacity-10 p-12 rounded-xl shadow-lg backdrop-blur-lg animate-fadeIn">
        <h1 className="text-5xl mb-10 text-shadow-md">Select Your Language</h1>
        <p className="text-2xl mb-6">भाषा चुनें</p>
        <div className="flex justify-center items-center gap-12 mt-8">
          <Link to="/EnglishOptionsPage" className="bg-gradient-to-r from-blue-400 to-blue-900 text-white text-xl font-bold py-4 px-8 rounded-full shadow-md transition-transform transform hover:scale-110">
            English
          </Link>
          <Link to="/HindiOptionsPage" className="bg-gradient-to-r from-blue-400 to-blue-900 text-white text-xl font-bold py-4 px-8 rounded-full shadow-md transition-transform transform hover:scale-110">
            हिंदी
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
