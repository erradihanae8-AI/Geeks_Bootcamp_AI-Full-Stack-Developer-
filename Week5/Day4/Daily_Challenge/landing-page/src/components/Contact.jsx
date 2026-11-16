
function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        Contact Us
      </h2>

      <p className="text-gray-600 mb-8">
        Have a question? We would love to hear from you!
      </p>

      {/* Contact Form */}
      <form className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">

        {/* Email */}
        <div className="mb-5 text-left">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6 text-left">
          <label className="block text-gray-700 font-semibold mb-2">
            Your Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;
