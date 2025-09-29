import { useState } from "react";

import facebookContact from "../assets/facebook-contact.svg";
import instagramContact from "../assets/instagram-contact.svg";
import linkedinContact from "../assets/linkedin-contact.svg";
import githubContact from "../assets/github-contact.svg";

import emailjs from "emailjs-com";

function Contact() {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();

          // auto-hide after 3s
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <>
      <section id="contact" className="w-11/12 md:w-4/5 mx-auto py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  📨
                </span>
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, freelance work, or
                just a friendly chat. I'll get back to you as soon as possible!
              </p>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">
                      j.olores.work@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">
                      +63 992 402 0419
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">
                      Cebu, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  🔗
                </span>
                Follow My Journey
              </h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/jayr-olores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={githubContact} alt="GitHub" className="w-12 h-12" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayr-olores/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={linkedinContact}
                    alt="LinkedIn"
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://facebook.com/jyr.olores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={facebookContact}
                    alt="Facebook"
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://instagram.com/jyr_ol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={instagramContact}
                    alt="Instagram"
                    className="w-12 h-12"
                  />
                </a>
              </div>
              <p className="text-blue-600 text-sm font-medium flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Usually responds within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Send a Message
            </h3>
            <p className="text-gray-500 mb-8">
              Fill in the form below and I'll get back to you shortly.
            </p>

            <div className="relative">
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName" // 👈 added
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName" // 👈 added
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" // 👈 added
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject" // 👈 added
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    name="message" // 👈 added
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Send Message
                  <span className="ml-2">🚀</span>
                </button>
              </form>

              {success && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-20 rounded-xl">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl">
                      ✓
                    </div>
                    <p className="mt-3 text-green-700 font-medium">
                      Message sent!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
        <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <p className="text-sm">
            © {new Date().getFullYear()} Jay-r Portfolio. All rights reserved.
          </p>

          {/* Middle Navigation */}
          <div className="flex gap-8 text-sm">
            <a
              href="#about"
              className="hover:text-white transition duration-200 hover:scale-105"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white transition duration-200 hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition duration-200 hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Right Side Socials */}
          <div className="flex gap-5">
            <a
              href="https://github.com/jayr-olores"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img src={githubContact} alt="GitHub" className="w-12 h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayr-olores/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img src={linkedinContact} alt="LinkedIn" className="w-12 h-12" />
            </a>
            <a
              href="https://facebook.com/jyr.olores"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img src={facebookContact} alt="Facebook" className="w-12 h-12" />
            </a>
            <a
              href="https://instagram.com/jyr_ol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={instagramContact}
                alt="Instagram"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
