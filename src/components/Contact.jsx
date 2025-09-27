import facebookContact from "../assets/facebook-contact.svg";
import instagramContact from "../assets/instagram-contact.svg";
import linkedinContact from "../assets/linkedin-contact.svg";
import githubContact from "../assets/github-contact.svg";

function Contact() {
  return (
    <section id="contact" className="w-11/12 md:w-4/5 mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="space-y-6">
          {/* Get in Touch */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">📨 Get in touch</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for collaborations, freelance work, or just
              a friendly chat. I’ll get back to you as soon as possible!
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Email:</strong> your@email.com
              </li>
              <li>
                <strong>Phone:</strong> +63 900 000 0000
              </li>
              <li>
                <strong>Location:</strong> Manila, Philippines
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">🔗 Follow me</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubContact} alt="GitHub" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinContact} alt="LinkedIn"/>
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookContact} alt="Facebook"/>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramContact}
                  alt="Instagram"
                />
              </a>
            </div>
            <p className="text-green-600 text-sm mt-3">
              *Usually responds within 24 hours
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Send a Message</h3>
          <p className="text-gray-500 mb-6">
            Fill in the form below and I’ll get back to you shortly.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
