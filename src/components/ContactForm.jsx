"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Note: The ': any' is removed for JavaScript
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value), // <-- NEW: Get phone number
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setSuccess(true);
      setLoading(false);
      event.target.reset();
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Error sending message");
      console.log("Error sending message");
      setLoading(false);
    }
  }

  // The JSX is identical to the TSX version from here down
  return (
    <div className="w-full max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
      {/* --- NEW: HEADING --- */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-500">I'd love to hear from you! Please fill out the form below.</p>
      </div>
      {/* --- END NEW HEADING --- */}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              minLength={3}
              maxLength={150}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          {/* --- NEW: PHONE NUMBER FIELD --- */}
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={150}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          {/* --- END NEW PHONE NUMBER FIELD --- */}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              minLength={5}
              maxLength={150}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              rows={5}
              id="message"
              required
              minLength={10}
              maxLength={500}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="mt-4 text-green-500">Message sent successfully!</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}