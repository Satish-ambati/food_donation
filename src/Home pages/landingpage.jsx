import sp1 from '../assets/landing/sp1.png'
import sp2 from '../assets/landing/sp2.png'
import sp3 from '../assets/landing/sp3.png'
import p2 from '../assets/landing/p2.png'
import p3 from '../assets/landing/p3.png'
import p4 from '../assets/landing/p4.png'
import { useEffect, useState } from 'react'
function LandingPage(){
    const images = [sp1, sp2, sp3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
    return (
        <>
        <div className="bg-white font-sans">
      <header className="bg-green-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FoodSave</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#impact" className="hover:underline">Impact</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">awareness</a>
            <a href="#" className="hover:underline">Login/sign up</a>
          </nav>
        </div>
      </header>
      <section className="bg-green-100 py-20 px-6">
        <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-green-800 mb-4">
              Stop Wasting. Start Saving.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our food wastage management system connects donors with shelters and NGOs to make sure surplus food never goes to waste.
            </p>
            <a
              href="#about"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Learn More
            </a>
          </div>
          <div className="w-full h-100 flex items-center justify-center bg-gray-100">
      <img
        src={images[currentIndex]}
        alt="Rotating banner"
        className="rounded-2xl shadow-lg w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
    </div>
        </div>
      </section>
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">Why FoodSave?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every year, millions of tons of food go to waste while countless people go hungry. 
            FoodSave is a platform that bridges this gap, promoting sustainability and compassion. 
            Together, we can reduce food waste and help feed those in need.
          </p>
        </div>
      </section>
      <section id="impact" className="py-16 px-6 bg-green-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-10">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={p2}
                alt="Food donated"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-green-700">5000+ Meals Saved</h4>
              <p className="text-gray-600">Redistributed to shelters and communities in need.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={p3}
                alt="Volunteers"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-green-700">100+ Volunteers</h4>
              <p className="text-gray-600">Working round-the-clock to manage and deliver food.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img
                src={p4}
                alt="NGOs connected"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-green-700">50+ NGOs Partnered</h4>
              <p className="text-gray-600">Ensuring food reaches the right hands in time.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">“Don’t waste food, someone needs it more than you think.”</h2>
        <p className="mb-6">Join us in our mission to reduce food waste and fight hunger.</p>
        <a
          href="#contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get Involved
        </a>
      </section>
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">Email: fooddonation@gmail.com| Phone: +91-8106204119</p>
          <p className="text-gray-500 text-sm">© 2025 FoodSave. All rights reserved.</p>
        </div>
      </section>
    </div>
        </>
    );
}
export default LandingPage;