// app/page.tsx (Next.js 13+ with App Router)
// or pages/index.tsx (Next.js 12)
import Image from "next/image";
import peek from "../public/Icon.ico"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      {/* Logo */}
      <div className="mb-4">
        <Image
          src={peek} // put your logo in /public/peek-logo.png
          alt="Peek Logo"
          width={120}
          height={120}
          className="rounded-2x invert brightness-500"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight">Peek</h1>
      <p className="mt-2 text-lg text-gray-400">
        Your AI assistant, instantly available.
      </p>

      {/* CTA button */}
      <button className="mt-10 px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition">
        Get Started
      </button>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Peek
      </footer>
    </main>
  );
}
