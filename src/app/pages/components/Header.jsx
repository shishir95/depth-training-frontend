// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div className="logo">
        <img
          src="/assets/logo-white.png"
          alt="Depth Training Logo"
          className="h-12"
        />
      </div>
      <nav className="flex space-x-6">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/trainers">Trainers</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition duration-300">
        <Link href="/book">Book Now</Link>
      </button>
    </header>
  );
};

export default Header;
