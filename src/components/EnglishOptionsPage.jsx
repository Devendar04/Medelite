import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnglishOptionsPage = () => {
  const [selectedConditions, setSelectedConditions] = useState({
    fever: false,
    coldAndCough: false,
    headache: false,
    stomachPain: false,
  });

  const toggleCondition = (condition) => {
    
    setSelectedConditions((prevState) => ({
      ...prevState,
      [condition]: !prevState[condition],
    }));
  };

  const confirmSelection = () => {
    const anyChecked = Object.values(selectedConditions).some((value) => value);

    if (!anyChecked) {
      alert("Please choose an option!");
    }
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onstart = () => {
        console.log('Voice recognition started. Speak into the microphone.');
      };
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        const conditions = {
          'fever': 'fever',
          'cold': 'coldAndCough',
          'cough': 'coldAndCough',
          'headache': 'headache',
          'stomach pain': 'stomachPain',
        };

        Object.keys(conditions).forEach((condition) => {
          if (speechResult.includes(condition)) {
            setSelectedConditions((prevState) => ({
              ...prevState,
              [conditions[condition]]: true,
            }));
          }
        });
      };
      recognition.start();
    } else {
      alert('Your browser does not support voice recognition. Please use Chrome.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white text-center py-6 shadow-md">
        <h1 className="text-3xl font-bold">Select Your Condition</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6 bg-white mt-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Fever */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <input
              type="checkbox"
              id="feverCheck"
              className="mr-4 w-6 h-6"
              checked={selectedConditions.fever}
              onChange={() => toggleCondition('fever')}
            />
            <img src="./src/assets/fever.webp" alt="Fever" className="w-12 h-12 mr-4" />
            <label htmlFor="feverCheck" className="cursor-pointer">
              Fever
            </label>
          </div>

          {/* Cold and Cough */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <input
              type="checkbox"
              id="coldCoughCheck"
              className="mr-4 w-6 h-6"
              checked={selectedConditions.coldAndCough}
              onChange={() => toggleCondition('coldAndCough')}
            />
            <img src="./src/assets/cough and cold.webp" alt="Cough and Cold" className="w-12 h-12 mr-4" />
            <label htmlFor="coldCoughCheck" className="cursor-pointer">
              Cough & Cold
            </label>
          </div>

          {/* Headache */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <input
              type="checkbox"
              id="headacheCheck"
              className="mr-4 w-6 h-6"
              checked={selectedConditions.headache}
              onChange={() => toggleCondition('headache')}
            />
            <img src="./src/assets/headache.jpeg" alt="Headache" className="w-12 h-12 mr-4" />
            <label htmlFor="headacheCheck" className="cursor-pointer">
              Headache
            </label>
          </div>

          {/* Stomach Pain */}
          <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <input
              type="checkbox"
              id="stomachPainCheck"
              className="mr-4 w-6 h-6"
              checked={selectedConditions.stomachPain}
              onChange={() => toggleCondition('stomachPain')}
            />
            <img src="./src/assets/stomach pain.webp" alt="Stomach Pain" className="w-12 h-12 mr-4" />
            <label htmlFor="stomachPainCheck" className="cursor-pointer">
              Stomach Pain
            </label>
          </div>

          {/* OK Button */}
          <button
            onClick={confirmSelection}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            OK
          </button>

          {/* Medicine Information Section */}
          {selectedConditions.fever && (
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-2">Fever Medicines</h2>
              <ul className="list-disc pl-5">
                <li>Paracetamol: 500mg, every 6 hours</li>
                <li>Ibuprofen: 200mg, every 8 hours</li>
              </ul>
            </div>
          )}
          {selectedConditions.coldAndCough && (
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-2">Fever Medicines</h2>
              <ul className="list-disc pl-5">
                <li>Paracetamol: 500mg, every 6 hours</li>
                <li>Ibuprofen: 200mg, every 8 hours</li>
              </ul>
            </div>
          )}
          {selectedConditions.fever && (
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-2">Fever Medicines</h2>
              <ul className="list-disc pl-5">
                <li>Paracetamol: 500mg, every 6 hours</li>
                <li>Ibuprofen: 200mg, every 8 hours</li>
              </ul>
            </div>
          )}
          {selectedConditions.fever && (
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-xl font-bold mb-2">Fever Medicines</h2>
              <ul className="list-disc pl-5">
                <li>Paracetamol: 500mg, every 6 hours</li>
                <li>Ibuprofen: 200mg, every 8 hours</li>
              </ul>
            </div>
          )}

          {/* Voice Control Section */}
          <div className="mt-6">
            <p className="mb-4">Click the button below and say the condition you want to select:</p>
            <button
              onClick={startVoiceRecognition}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Start Voice Recognition
            </button>
          </div>

          {/* Text Input for diseases */}
          <input
            type="text"
            placeholder="Enter the diseases here"
            className="w-full p-4 border border-gray-300 rounded-lg mt-6"
          />
        </div>
      </main>
    </div>
  );
};

export default EnglishOptionsPage;
