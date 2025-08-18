// app/page.tsx (Next.js 13+ with App Router)
import Image from "next/image";
import peek from "../public/Icon.ico";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 flex justify-center py-4 shadow-lg">
        <a href="#top">
          <Image
            src={peek}
            alt="Peek Logo"
            width={64}
            height={64}
            className="cursor-pointer invert transition hover:scale-105"
          />
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="top"
        className="flex flex-col items-center justify-center text-center h-screen px-6"
      >
        <h1 className="space-y-2">
          <span className="block text-7xl md:text-8xl font-extrabold tracking-tight">
            Peek
          </span>
          <span className="block text-3xl md:text-4xl font-light text-gray-300">
            Assistant
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-400 mt-6 mb-2">
          Anywhere, Anytime, Any Application
        </p>
        <p className="text-md md:text-lg max-w-2xl text-gray-400 mb-10">
          Designed for speed and simplicity, Peek helps you stay focused without
          getting in the way — boosting productivity seamlessly. (beta)
        </p>

        {/* Get Started Button */}
        <a
          href="#preview"
          className="px-8 py-4 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition transform hover:scale-105"
        >
          Get Started
        </a>
      </section>

      {/* Preview Section */}
      <section id="preview" className="w-full flex flex-col items-center py-24">
        <h2 className="text-3xl font-semibold mb-8">Preview</h2>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl shadow-xl max-w-5xl w-full border border-gray-800"
        >
          <source src="/peek-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Download Section */}
      <section className="w-full flex flex-col items-center py-24 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-semibold mb-8">Download Peek</h2>
        <a
          href="/Peek.exe" // place your build in /public/peek.exe
          download
          className="px-8 py-4 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
        >
          Download for Windows
        </a>
      </section>

      {/* Information Section */}
      <section className="w-full flex flex-col items-center py-24 px-6 bg-black/95">
        <h2 className="text-3xl font-semibold mb-8">Information</h2>
        <div className="max-w-3xl text-left space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Setup</h3>
            <p>
              Download and run <code className="bg-gray-800 px-1 rounded">peek.exe</code>. 
              The assistant will start automatically in the background.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Hotkeys</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <kbd className="bg-gray-800 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-800 px-1 rounded">P</kbd> — Toggles Prompt Switch
              </li>
              <li>
                <kbd className="bg-gray-800 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-800 px-1 rounded">S</kbd> — Toggles Screenshot Switch
              </li>
              <li>
                <kbd className="bg-gray-800 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-800 px-1 rounded">H</kbd> — Toggles UI Visibility
              </li>
              <li>
                <kbd className="bg-gray-800 px-1 rounded">F4</kbd> — Activates LLM response
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Usage</h3>
            <p>
              Peek works inside any application. Simply open it with your
              hotkey, take a screenshot, and/or enter a prompt, and the
              assistant will respond without interrupting your workflow.
            </p>
            <br />
            <p>Currently free at the use of your own OpenAI API key, Peek will be exiting beta, introducing project history tracking and modular support for various LLMs as a subscription-based service.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-gray-500 text-sm w-full text-center border-t border-gray-800">
        © {new Date().getFullYear()} Peek. All rights reserved.
      </footer>
    </div>
  );
}
