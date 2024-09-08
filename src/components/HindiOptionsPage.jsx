import { Link } from 'react-router-dom';

import React, { useState } from "react";

const HindiOptionsPage = () => {
  const [selected, setSelected] = useState({
    fever: false,
    coldAndCough: false,
    headache: false,
    stomachPain: false,
  });

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelected((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const confirmSelection = () => {
    const anyChecked = Object.values(selected).some((value) => value);

    if (!anyChecked) {
      alert("कृपया एक विकल्प चुनें।");
    }
  };

  const startVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); // use webkitSpeechRecognition for Chrome
    recognition.lang = "hi-IN";
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();

      const checkboxes = {
        "बुखार": "fever",
        "सर्दी": "coldAndCough",
        "खांसी": "coldAndCough",
        "सिरदर्द": "headache",
        "पेट दर्द": "stomachPain",
      };

      let foundMatch = false;
      for (const [symptom, checkboxId] of Object.entries(checkboxes)) {
        if (transcript.includes(symptom)) {
          setSelected((prevState) => ({
            ...prevState,
            [checkboxId]: true,
          }));
          foundMatch = true;
        }
      }

      if (!foundMatch) {
        alert("कोई मेल खाने वाला लक्षण नहीं मिला। कृपया फिर से प्रयास करें।");
      } else {
        confirmSelection(); // Automatically confirm after recognition
      }
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
      alert("वॉयस रिकग्निशन में समस्या हुई। कृपया फिर से प्रयास करें।");
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-900 text-white text-center py-6 shadow-md">
        <h1 className="text-4xl font-merienda">अपनी स्थिति चुनें</h1>
      </header>

      <main className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <div className="flex flex-col space-y-6">
          <label className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-all cursor-pointer">
            <input
              type="checkbox"
              id="fever"
              checked={selected.fever}
              onChange={handleCheckboxChange}
              className="form-checkbox h-6 w-6 text-blue-500"
            />
            <img src="./src/assets/fever.webp" alt="Fever" className="w-12 h-12" />
            <span>बुखार</span>
          </label>

          <label className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-all cursor-pointer">
            <input
              type="checkbox"
              id="coldAndCough"
              checked={selected.coldAndCough}
              onChange={handleCheckboxChange}
              className="form-checkbox h-6 w-6 text-blue-500"
            />
            <img src="./src/assets/cough and cold.webp" alt="Cough and Cold" className="w-12 h-12" />
            <span>खांसी और सर्दी</span>
          </label>

          <label className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-all cursor-pointer">
            <input
              type="checkbox"
              id="headache"
              checked={selected.headache}
              onChange={handleCheckboxChange}
              className="form-checkbox h-6 w-6 text-blue-500"
            />
            <img src="./src/assets/headache.jpeg" alt="Headache" className="w-12 h-12" />
            <span>सिरदर्द</span>
          </label>

          <label className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition-all cursor-pointer">
            <input
              type="checkbox"
              id="stomachPain"
              checked={selected.stomachPain}
              onChange={handleCheckboxChange}
              className="form-checkbox h-6 w-6 text-blue-500"
            />
            <img src="./src/assets/stomach pain.webp" alt="Stomach Pain" className="w-12 h-12" />
            <span>पेट दर्द</span>
          </label>
        </div>

        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 hover:bg-blue-600 transition-all"
          onClick={confirmSelection}
        >
          OK
        </button>

        {selected.fever && (
          <a href="bukhar.html" className="block mt-6 bg-white p-4 rounded-lg border hover:bg-gray-50 transition-all">
            <h2 className="text-2xl font-semibold">बुखार की दवा</h2>
            <ul className="list-none mt-2">
              <li>पेरासिटामोल: 500 मिलीग्राम, हर 6 घंटे में</li>
              <li>इबुप्रोफेन: 200 मिलीग्राम, हर 8 घंटे में</li>
            </ul>
          </a>
        )}

        {selected.coldAndCough && (
          <a href="sardi khasi.html" className="block mt-6 bg-white p-4 rounded-lg border hover:bg-gray-50 transition-all">
            <h2 className="text-2xl font-semibold">खांसी और सर्दी की दवाएँ</h2>
            <ul className="list-none mt-2">
              <li>डिफेनहाइड्रामाइन: 25 मिलीग्राम, हर 8 घंटे में</li>
              <li>डेक्सट्रोमेथॉर्फ़न: 10 मि.ली., हर 6 घंटे में</li>
            </ul>
          </a>
        )}

        {selected.headache && (
          <a href="sir dard.html" className="block mt-6 bg-white p-4 rounded-lg border hover:bg-gray-50 transition-all">
            <h2 className="text-2xl font-semibold">सिरदर्द की दवाएँ</h2>
            <ul className="list-none mt-2">
              <li>एस्पिरिन: 300 मिलीग्राम, हर 4 घंटे में</li>
              <li>एसिटामिनोफेन: 500 मिलीग्राम, हर 6 घंटे में</li>
            </ul>
          </a>
        )}

        {selected.stomachPain && (
          <a href="pet dard.html" className="block mt-6 bg-white p-4 rounded-lg border hover:bg-gray-50 transition-all">
            <h2 className="text-2xl font-semibold">पेट दर्द की दवाएँ</h2>
            <ul className="list-none mt-2">
              <li>डायक्लोमीन: 10 मिलीग्राम, आवश्यकतानुसार</li>
              <li>ओमप्राज़ोल: 20 मिलीग्राम, दिन में एक बार</li>
            </ul>
          </a>
        )}

        <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
            onClick={startVoiceRecognition}
          >
            Speak Symptoms
          </button>
        </div>
      </main>
    </div>
  );
};

export default HindiOptionsPage;
