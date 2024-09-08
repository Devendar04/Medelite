import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="m-5 text-center">
        <h1 className="text-white text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-800 p-6 rounded-lg shadow-lg mb-12 text-shadow-md transition-transform transform hover:scale-105">
          How May I Help You? <br />क्या मेरे द्वारा आपकी कोई सहायता हो सकती है
        </h1>
      </header>

      <main className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}>
        <div className="w-full flex flex-col items-center text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg animate-fadeIn">
          <div className="mb-5 flex gap-8 justify-center">
            <a href="#" className="text-blue-900 text-xl font-semibold transition-colors hover:text-blue-400 hover:scale-110">
              Help and Support
            </a>
            <a href="#" className="text-blue-900 text-xl font-semibold transition-colors hover:text-blue-400 hover:scale-110">
              Contact Us
            </a>
          </div>
          <div className="mb-5">
            <Link to="/language" className="bg-gradient-to-r from-purple-800 to-blue-400 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              ENTER TO GET MEDICINE
            </Link>
          </div>
     
          {/* Remove or hide this if the background image is sufficient */}
          <div className="hidden">
            <img src="image copy.png" alt="Medicine Support Image" className="max-w-full h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
