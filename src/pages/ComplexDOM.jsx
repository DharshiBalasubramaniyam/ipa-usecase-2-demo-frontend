import { useEffect } from 'react';

import { useState } from 'react';

function ComplexDOM() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = "Complex DOM";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setMessage(e.target.message.value);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-500 text-white p-4">
                <h1 id="main-heading" className="text-3xl font-bold">Complex DOM</h1>
                <nav>
                    <ul className="flex space-x-4 nav-links">
                        <li><a href="#home" className="nav-link hover:underline">Home</a></li>
                        <li><a href="#about" className="nav-link hover:underline">About</a></li>
                        <li><a href="#contact" className="nav-link hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow p-4">
                <section id="home" className="mb-8 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Home</h2>
                    <p className="mb-4">Welcome to the Selenium practice page.</p>
                    <button id="home-button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {
                        if (confirm('Do you want to proceed?')) {
                            document.getElementById('home-button').textContent = 'Happy';
                        } else {
                            document.getElementById('home-button').textContent = 'Sad';
                        }
                    }}>Click Me</button>
                </section>
                <section id="about" className="mb-8 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">About</h2>
                    <p className="mb-4">This page is designed to help you practice Selenium tests.</p>
                    <a href="/new-window" target='_blank' className="bg-blue-500 text-white px-4 py-2 rounded">Learn more</a>
                </section>
                <section id="contact" className="mb-8 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block">Email:</label>
                            <input type="text" id="email" name="email" className="border p-2 w-full" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block">Message:</label>
                            <input type="text" id="message" name="message" className="border p-2 w-full" />
                        </div>
                        <button type="submit" id="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                        <p id="result" className="mt-2">You typed: {email} {message}</p>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default ComplexDOM;
