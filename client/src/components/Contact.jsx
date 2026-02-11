function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-800 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-700 focus:border-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-700 hover:bg-blue-700 rounded-lg text-lg transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact
