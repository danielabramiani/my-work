import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const Navbar = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Daniel Hotel Room Service</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/rooms" className="hover:underline">Rooms</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section className="container mx-auto p-6 text-center">
    <h2 className="text-3xl font-semibold mb-4">Welcome to Daniel Hotel</h2>
    <p className="text-lg mb-6">Experience unmatched comfort and luxury in the heart of the city.</p>
    <Button className="px-6 py-2 text-white bg-blue-600 rounded-full">Book Now</Button>
  </section>
);

const Rooms = () => (
  <section className="container mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-4">Our Rooms</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Deluxe Room", "Executive Suite", "Presidential Suite"].map((room) => (
        <Card key={room} className="p-4 shadow-lg">
          <CardContent>
            <h3 className="text-xl font-bold mb-2">{room}</h3>
            <p className="text-gray-600">Enjoy the ultimate in luxury and style.</p>
            <Button className="mt-4 bg-blue-600 text-white">View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section className="container mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
    <ul className="list-disc pl-6">
      <li>24/7 Room Service</li>
      <li>Spa and Wellness Center</li>
      <li>Complimentary Breakfast</li>
      <li>Free Wi-Fi</li>
    </ul>
  </section>
);

const About = () => (
  <section className="container mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
    <p>Daniel Hotel is a premier destination offering exceptional hospitality and personalized services.</p>
  </section>
);

const Contact = () => (
  <section className="container mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
    <p>Reach us at: contact@danielhotel.com</p>
  </section>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;