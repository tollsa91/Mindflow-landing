import React from "react";

export default function MindFlowLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">Unclutter Your Mind. Align Your Life.</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          A wellness app that turns your mental chaos into clarity—with AI-powered insights,
          emotional check-ins, and personalized support.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700">
          Join the Waitlist
        </button>
      </header>

      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-bold">1. Brain Dump Freely</h3>
              <p>Let it out. Journaling or voice notes—your thoughts are safe here.</p>
            </div>
            <div>
              <h3 className="font-bold">2. AI-Powered Insight</h3>
              <p>Our intelligent system reflects your emotional patterns, stress levels, and wins.</p>
            </div>
            <div>
              <h3 className="font-bold">3. Actionable Wellness Tasks</h3>
              <p>Get calming prompts and activities—customized and easy to schedule.</p>
            </div>
            <div>
              <h3 className="font-bold">4. Progress You Can Feel</h3>
              <p>See your emotional trends and celebrate growth over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <img 
          src="https://res.cloudinary.com/dybrwhwjl/image/upload/v1748444904/image_wzd9hz.png" 
          alt="MindFlow App Screenshot"
          className="mx-auto rounded-2xl shadow-md w-full max-w-xl mb-10"
        />
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Why MindFlow AI Is Different</h2>
          <ul className="list-disc list-inside text-left">
            <li>✅ Built by a mental health counselor-in-training who *gets it*</li>
            <li>✅ Designed for high-functioning people with emotional overwhelm</li>
            <li>✅ Centered around compassion, not productivity guilt</li>
            <li>✅ AI that feels like a friend, not a robot</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">Founder’s Note</h2>
          <p className="italic mb-6">
            “I built MindFlow AI for people like me—overthinkers, overdoers, and those who hold
            space for everyone else but themselves.”
          </p>
          <p className="font-bold">— Sabrina, Founder & Counselor-in-Training</p>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
        <p className="mb-6">Ready to turn your thoughts into clarity?</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-700">
          Join the Waitlist
        </button>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        <p>Your thoughts are private. Your growth is sacred. MindFlow AI respects both.</p>
      </footer>
    </div>
  );
}