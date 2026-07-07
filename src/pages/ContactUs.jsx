import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  

    setSuccess("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-6 py-20">
      <div className="bg-[#0B1220] w-full max-w-xl rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>

        <p className="text-gray-400 text-center mb-8">
          Have a question? Send us a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-green-400"
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-green-400"
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 h-32 outline-none focus:border-green-400"
          />

          <button
            type="submit"
            className="bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-500"
          >
            Send
          </button>

          {success && (
            <p className="text-green-400 text-center font-semibold">
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;