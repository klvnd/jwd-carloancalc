"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        // Log form data to the console
        console.log({ name, email, message });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-4 text-center text-black">Contact Us</h1>
                <p className="text-center text-gray-500 max-w-xl mb-6">
                    Have questions or need help? Get in touch with us by filling out the form below.
                </p>
                <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Message:</label>
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                    {status && <p className="text-center mt-4">{status}</p>}
                </form>
            </div>
        </div>
    );
}