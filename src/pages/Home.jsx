import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { checkStoreStatus } from '../utils/Time';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BeechersImage1 from '../assets/slideshow/beechers.jpg';
import BeechersImage2 from '../assets/slideshow/beechers2.jpg';
import BeechersImage3 from '../assets/slideshow/beechers3.jpg';
import BeechersImage4 from '../assets/slideshow/beechers4.jpg';
import BeechersLogo from '../assets/beecherslogo.png';

function Home() {
  const [storeStatus, setStoreStatus] = useState({ statusMessage: '', storeStatus: '' });
  const isTemporarilyClosed = false; // Change this to true if the store is temporarily closed

  useEffect(() => {
    const status = checkStoreStatus(isTemporarilyClosed);
    setStoreStatus(status);
  }, [isTemporarilyClosed]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#c2093b] mb-4 custom-font">Welcome to Beecher’s Ice Cream & Yogurt – The Best In Town!</h2>
          <p className="text-left">
            Located inside Beecher Beverage Co Inc at <a href="https://maps.app.goo.gl/y7aF6T7FTQgEBKRG6" target="_blank" className="redHover">1691 Asbury Rd, Dubuque, IA</a>,
            we serve up homemade ice cream and yogurt in a wide variety of delicious flavors. Whether you prefer it in a scoop or a fresh waffle cone, we’ve got something to satisfy every sweet tooth. Come taste the difference!
          </p>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay={false}
          emulateTouch
          dynamicHeight
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white redHover p-2 rounded shadow cursor-pointer"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white redHover p-2 rounded shadow cursor-pointer"
              >
                ›
              </button>
            )
          }
          className="relative mt-4 w-full max-w-lg mx-auto shadow-lg"
        >
          <div>
            <img
              src={BeechersImage1}
              alt="Beecher's Ice Cream Store 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={BeechersImage3}
              alt="Beecher's Ice Cream Inside"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={BeechersImage4}
              alt="Beecher's Ice Cream Awards"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={BeechersImage2}
              alt="Beecher's Ice Cream Store 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={BeechersLogo}
              alt="Beecher's Ice Cream Logo"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </Carousel>

        <h1 className="text-2xl font-black text-[#c2093b] mt-4 custom-font">Hours</h1>
        <p>Sunday - Thursday: 12PM - 9PM</p>
        <p>Friday: 12PM - 10PM</p>
        <p>Saturday: 12PM - 8PM</p>
        <p className={`text-lg mb-4 mt-4 ${storeStatus.storeStatus === 'open' ? 'openStyle' : 'closeStyle'}`}>
          {storeStatus.statusMessage}
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;