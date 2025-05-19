import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

function Application() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    age: '',
    phoneNumber: '',
    positionSought: '',
    resumeLink: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dm3uh1r', 'template_fxyqxth', form.current, 'KXPcIQIeCUM41qcxz')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({
          email: '',
          fullName: '',
          address: '',
          age: '',
          phoneNumber: '',
          positionSought: '',
          resumeLink: '',
        });
      }, (error) => {
        console.log('Email sending failed:', error.text);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 text-center bg-white">
        <h1 className="text-2xl font-black text-[#c2093b] mb-4 custom-font">Job Application</h1>
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="positionSought">Position Sought:</label>
            <input
              type="text"
              id="positionSought"
              name="positionSought"
              value={formData.positionSought}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1" htmlFor="resumeLink">Resume Link (Google Drive/Dropbox):</label>
            <input
              type="text"
              id="resumeLink"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <Button type="submit" className="mt-4 custom-font">Submit Application</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Application;