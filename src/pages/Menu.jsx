import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FlavorsList from '../assets/flavorslist.jpg';
import FlavorsList2 from '../assets/menu/flavors.jpg';
import FlavorsList3 from '../assets/menu/flavors2.jpg';
import Kitchen from '../assets/menu/kitchen.jpg';
import Kitchen2 from '../assets/menu/kitchen2.jpg';

function Menu() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#c2093b] mb-4 custom-font">Explore Our Flavors</h2>
          <p className="text-left">
            At Beecher’s Ice Cream & Yogurt, we serve a rotating selection of homemade flavors crafted with care. From classics like <b>Vanilla</b>, <b>Chocolate</b>, and <b>Strawberry</b> to fun picks like <b>Cotton Candy</b>, <b>Mint Oreo</b>, and <b>Razzle Dazzle</b>, there's something for everyone. Enjoy rich favorites like <b>Cookie Dough</b> and <b>Cheesecake</b>, fruity options like <b>Blueberry</b> and <b>Apple Pie</b>, or soft serve and fro-yo flavors like <b>Twist</b> and <b>Butter Pecan</b>. Your next favorite scoop is waiting!
          </p>
          <div className="flex justify-center items-start">
            <div className="w-2/3">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay={false}
                swipeable={false}
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
                    src={FlavorsList2}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={FlavorsList3}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={Kitchen}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={Kitchen2}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="w-3/8 ml-4 mt-4">
              <img src={FlavorsList} className="h-auto max-h-100 w-full object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;