import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { checkStoreStatus } from '../utils/Time';
import FacebookLogo from '../assets/facebooklogo.png';
import InstaLogo from '../assets/instalogo.png';

function Contact() {
  
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
          <h1 className="text-2xl font-black text-[#c2093b] mb-4 custom-font">Contact Us</h1>
          <p>Give us a call to see if we're open, or come and see us:</p>
          <a href="https://maps.app.goo.gl/y7aF6T7FTQgEBKRG6" target="_blank" className="redHover">1691 Asbury Rd, Dubuque, IA</a>
          <p>Email: <a className="redHover" href='mailto:Deemigill@live.com'>Deemigill@live.com</a></p>
          <p>Phone: <a className="redHover" href='tel:+15635562624'>(563) 556-2623</a></p>
          <p className='mt-4'>Our Social Media:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.facebook.com/beecherice/" target="_blank" className="hover:opacity-80 transition-opacity">
              <img src={FacebookLogo} alt="Visit our Facebook page" width="45" className="rounded"/>
            </a>
            <a href="https://www.instagram.com/Beechers_icecream1691/#/" target="_blank" className="hover:opacity-80 transition-opacity">
              <img src={InstaLogo} alt="Visit our Instagram page" width="45" className="rounded"/>
            </a>
          </div>
          <h1 className="text-2xl font-black text-[#c2093b] mt-4 custom-font">Hours</h1>
          <p>Sunday - Thursday: 12PM - 9PM</p>
          <p>Friday: 12PM - 10PM</p>
          <p>Saturday: 12PM - 8PM</p>
          <p className={`text-lg mb-4 mt-4 ${storeStatus.storeStatus === 'open' ? 'openStyle' : 'closeStyle'}`}>
            {storeStatus.statusMessage}
          </p>
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.576131026552!2d-90.69972442422694!3d42.50056317118015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e32ddf14e06129%3A0xbebc43e07dc6686d!2sBeecher&#39;s%20Ice%20Cream!5e0!3m2!1sen!2sus!4v1747605033356!5m2!1sen!2sus"
              className="absolute top-0 left-0 w-full h-full rounded-lg" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;